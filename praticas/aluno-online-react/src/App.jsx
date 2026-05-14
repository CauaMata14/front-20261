import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './contexts/useAuth'
import Dashboard from './pages/Dashboard'
import Faltas from './pages/Faltas'
import Notas from './pages/Notas'
import Boletos from './pages/Boletos'
import Requerimentos from './pages/Requerimentos'
import Login from './pages/Login'

function App() {
  const { autenticado } = useAuth()

  return (
    <Routes>
      <Route path="/login" element={!autenticado ? <Login /> : <Navigate to="/" />} />
      <Route path="/" element={autenticado ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="/faltas" element={autenticado ? <Faltas /> : <Navigate to="/login" />} />
      <Route path="/notas" element={autenticado ? <Notas /> : <Navigate to="/login" />} />
      <Route path="/boletos" element={autenticado ? <Boletos /> : <Navigate to="/login" />} />
      <Route path="/requerimentos" element={autenticado ? <Requerimentos /> : <Navigate to="/login" />} />
      <Route path="*" element={<Navigate to={autenticado ? "/" : "/login"} />} />
    </Routes>
  )
}
export default App
