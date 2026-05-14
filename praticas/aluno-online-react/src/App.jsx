import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Faltas from './pages/Faltas'
import Notas from './pages/Notas'
import Boletos from './pages/Boletos'
import Requerimentos from './pages/Requerimentos'
import Login from "./pages/Login"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      
        <Route index element={<Dashboard />} />
        <Route path="faltas" element={<Faltas />} />
        <Route path="notas" element={<Notas />} />
        <Route path="boletos" element={<Boletos />} />
        <Route path="requerimentos" element={<Requerimentos />} />
      </Route>
    </Routes>
  )
}
export default App
