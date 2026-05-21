import './Menu.css'

function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li><a href="/">Dashboard</a></li>
        <li><a href="/notas">Notas</a></li>
        <li><a href="/faltas">Faltas</a></li>
        <li><a href="/boletos">Boletos</a></li>
        <li><a href="/requerimentos">Requerimentos</a></li>
        <li><a href="/login">Sair</a></li>
      </ul>
    </nav>
  )
}

export default Menu
