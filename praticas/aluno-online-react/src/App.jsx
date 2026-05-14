import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'
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
      {!autenticado ? (
        <Route path="/login" element={<Login />} />
      ) : (
        <>
          <Route path="/" element={<Dashboard />} />
          <Route path="/faltas" element={<Faltas />} />
          <Route path="/notas" element={<Notas />} />
          <Route path="/boletos" element={<Boletos />} />
          <Route path="/requerimentos" element={<Requerimentos />} />
        </>
      )}
      <Route path="*" element={<Navigate to={autenticado ? "/" : "/login"} />} />
    </Routes>
  )
}

export default App
