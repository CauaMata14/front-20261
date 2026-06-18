import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import {
  autenticar,
  limparSessao,
  obterSessaoSalva,
  obterToken,
} from "../services/authService";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const sessaoInicial = useMemo(() => obterSessaoSalva(), []);
  const [autenticado, setAutenticado] = useState(Boolean(sessaoInicial?.token));
  const [usuario, setUsuario] = useState(sessaoInicial?.usuario || null);

  const encerrarSessao = useCallback(() => {
    limparSessao();
    setUsuario(null);
    setAutenticado(false);
  }, []);

  useEffect(() => {
    window.addEventListener("auth:unauthorized", encerrarSessao);

    return () => {
      window.removeEventListener("auth:unauthorized", encerrarSessao);
    };
  }, [encerrarSessao]);

  useEffect(() => {
    if (!autenticado) {
      return undefined;
    }

    const validarTokenPersistido = () => {
      if (!obterToken()) {
        encerrarSessao();
      }
    };

    document.addEventListener("click", validarTokenPersistido);

    return () => {
      document.removeEventListener("click", validarTokenPersistido);
    };
  }, [autenticado, encerrarSessao]);

  const login = async (email, senha) => {
    const sessao = await autenticar(email, senha);
    setUsuario(sessao.usuario);
    setAutenticado(true);
    return sessao.usuario;
  };

  const logout = () => {
    encerrarSessao();
  };

  return (
    <AuthContext.Provider value={{ autenticado, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
