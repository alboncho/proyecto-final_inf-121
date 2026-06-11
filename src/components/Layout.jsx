import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Dia del Trabajo en Bolivia
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/">Bienvenida</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/historia">Historia</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/personajes">Personajes</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/feriado">Feriado</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="py-4">
        <Outlet />
      </main>

      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p className="mb-0">Diseñado por Alvaro Cruz Sarzuri, 2026</p>
      </footer>
    </>
  )
}

export default Layout;