import Sidebar from './Sidebar'
import Topbar from './Topbar'
import './Layout.css'

function Layout({ titulo, subtitulo, children }) {
  return (
    <section className="app-container">
      <Sidebar />
      <main className="main-content">
        <Topbar />
        <section className="content-area">
          {(titulo || subtitulo) && (
            <header className="page-header">
              {titulo && <h1>{titulo}</h1>}
              {subtitulo && <h2>{subtitulo}</h2>}
            </header>
          )}
          {children}
        </section>
      </main>
    </section>
  )
}

export default Layout
