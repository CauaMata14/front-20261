import { NavLink } from 'react-router-dom'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function Sidebar() {
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <img src="/learn.svg" alt="Logo" className="sidebar-logo" />
        <h1>Aluno Online</h1>
      </header>
      <nav className="sidebar-nav">
        <ul>
<<<<<<< HEAD
          <li><NavLink to="/">Dashboard</NavLink></li>
          <li><NavLink to="/notas">Notas</NavLink></li>
          <li><NavLink to="/faltas">Faltas</NavLink></li>
          <li><NavLink to="/boletos">Boletos</NavLink></li>
          <li><NavLink to="/requerimentos">Requerimentos</NavLink></li>
          <li><a href="#" onClick={handleLogout}>Sair</a></li>
=======
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
>>>>>>> baf90a6ebf5a4a24fdcdea8497d2859c78e5a32d
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
