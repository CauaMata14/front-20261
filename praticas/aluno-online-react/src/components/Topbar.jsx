import './Topbar.css'

function Topbar() {
  return (
    <header className="topbar">
      <section className="user-greeting">
        <span>Olá, Aluno!</span>
        <p className="welcome-message">Bem-vindo ao portal do aluno</p>
      </section>
      <figure className="user-avatar">
        <img src="/avatar.svg" alt="Avatar do usuário" />
      </figure>
    </header>
  )
}

export default Topbar
