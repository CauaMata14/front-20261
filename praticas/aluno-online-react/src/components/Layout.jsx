import Sidebar from './Sidebar'
import Topbar from './Topbar'
import './Layout.css'

function Layout({ children }) {
  return (
    <section className="app-container">
      <Sidebar />
      <main className="main-content">
        <Topbar />
        <section className="content-area">
          {children}
        </section>
      </main>
    </section>
  )
}

export default Layout
