import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

// Hook personalizado para consumir o contexto
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}

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
