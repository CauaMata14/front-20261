import './Sidebar.css'

function Sidebar() {
  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <img src="/learn.svg" alt="Logo" className="sidebar-logo" />
        <h1>Aluno Online</h1>
      </header>
      <nav className="sidebar-nav">
        <ul>
          <li><a href="/">Dashboard</a></li>
          <li><a href="/notas">Notas</a></li>
          <li><a href="/faltas">Faltas</a></li>
          <li><a href="/boletos">Boletos</a></li>
          <li><a href="/requerimentos">Requerimentos</a></li>
          <li><a href="/login">Sair</a></li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
