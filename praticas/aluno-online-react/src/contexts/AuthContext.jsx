import { createContext, useState } from "react";

const AuthContext = createContext();

// Provedor do contexto
function AuthProvider({ children }) {
  const [autenticado, setAutenticado] = useState(false);
  const [usuario, setUsuario] = useState(null);

  const login = (dadosUsuario) => {
    // Simulação de login - em produção, chamaria API
    setUsuario(dadosUsuario);
    setAutenticado(true);
  };

  const logout = () => {
    // Limpa o estado de autenticação
    setUsuario(null);
    setAutenticado(false);
  };

  return (
    <AuthContext.Provider value={{ autenticado, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
