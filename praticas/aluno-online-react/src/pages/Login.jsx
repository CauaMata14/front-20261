<<<<<<< HEAD
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de login - em produção, chamaria API
    login({ email, nome: "Cauã Mata" });
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
=======
import logo from '../assets/learn.svg'
import { useState } from 'react'
import InputEmail from '../components/InputEmail'
import InputSenha from '../components/InputSenha'
import './Login.css'

function Login() {
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const [emailErro, setEmailErro] = useState('O campo de email é obrigatório.')
  const [senhaErro, setSenhaErro] = useState('O campo de senha é obrigatório.')

  const handleSubmit = (e) => {
    e.preventDefault()
    setEmailErro('')
    setSenhaErro('')

    if (!email) {
      setEmailErro('O campo de email é obrigatório.')
    } else if (!email.includes('@')) {
      setEmailErro('Formato de email inválido.')
    }

    if (!senha) {
      setSenhaErro('O campo de senha é obrigatório.')
    } else if (senha.length < 6) {
      setSenhaErro('A senha deve ter no mínimo 6 caracteres.')
    }
  }

  return (
    <section className="login-container">
      <article className="login-card">
        <header className="login-header">
          <img src={logo} alt="Imagem do Logo" />
          <h1>Aluno Online</h1>
        </header>
        <form onSubmit={handleSubmit} className="login-form">
          <InputEmail
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setEmailErro('')
            }}
            erro={emailErro}
          />
          <InputSenha
            value={senha}
            onChange={(e) => {
              setSenha(e.target.value)
              setSenhaErro('')
            }}
            erro={senhaErro}
          />
          <button type="submit" className="login-button">Entrar</button>
        </form>
        <footer className="login-footer">
          <p>© 2026. Todos os direitos reservados.</p>
        </footer>
      </article>
    </section>
  )
}

export default Login
>>>>>>> baf90a6ebf5a4a24fdcdea8497d2859c78e5a32d
