import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Faltas from './pages/Faltas'
import Notas from './pages/Notas'
import Boletos from './pages/Boletos'
import Requerimentos from './pages/Requerimentos'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/faltas" element={<Faltas />} />
        <Route path="/notas" element={<Notas />} />
        <Route path="/boletos" element={<Boletos />} />
        <Route path="/requerimentos" element={<Requerimentos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
