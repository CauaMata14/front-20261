import { NavLink } from 'react-router-dom'
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
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/notas" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Notas
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/faltas" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Faltas
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/boletos" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Boletos
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/requerimentos" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Requerimentos
            </NavLink>
          </li>
          <li><a href="/login">Sair</a></li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
