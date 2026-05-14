import './Topbar.css'
import { useAuth } from '../contexts/AuthContext'

function Topbar() {
  const { usuario } = useAuth()

  return (
    <header className="topbar">
      <section className="user-greeting">
        <span>Olá, {usuario?.nome || 'Aluno'}!</span>
        <p className="welcome-message">Bem-vindo ao portal do aluno</p>
      </section>
      <figure className="user-avatar">
        <img src="/avatar.svg" alt="Avatar do usuário" />
      </figure>
    </header>
  )
}

export default Topbar
