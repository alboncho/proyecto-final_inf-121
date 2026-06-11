import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Bienvenida from './pages/Bienvenida'
import Historia from './pages/Historia'
import Personajes from './pages/Personajes'
import Feriado from './pages/Feriado'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Bienvenida />} />
        <Route path="historia" element={<Historia />} />
        <Route path="personajes" element={<Personajes />} />
        <Route path="feriado" element={<Feriado />} />
      </Route>
    </Routes>
  )
}

export default App