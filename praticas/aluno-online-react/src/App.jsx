import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './contexts/useAuth'
import Dashboard from './pages/Dashboard'
import Faltas from './pages/Faltas'
import Notas from './pages/Notas'
import Boletos from './pages/Boletos'
import Requerimentos from './pages/Requerimentos'
import Login from './pages/Login'
import Layout from './components/Layout'
import RequerimentoForm from './forms/RequerimentoForm'

function App() {
  const { autenticado } = useAuth()

  return (
    <Routes>
      <Route path="/login" element={!autenticado ? <Login /> : <Navigate to="/" />} />
      <Route element={autenticado ? <Layout /> : <Navigate to="/login" />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/faltas" element={<Faltas />} />
        <Route path="/notas" element={<Notas />} />
        <Route path="/boletos" element={<Boletos />} />
        <Route path="/requerimentos" element={<Requerimentos />} />
        <Route path="/requerimentos/novo" element={<RequerimentoForm />} />
      </Route>
      <Route path="*" element={<Navigate to={autenticado ? "/" : "/login"} />} />
    </Routes>
  )
}
export default App
