import Layout from '../components/Layout'
import './Dashboard.css'

function Dashboard() {
  return (
    <Layout>
      <article className="card">
        <header className="card-header">
          <h2>Mural de Avisos</h2>
        </header>
        <ul className="card-content">
          <li>Inscrição para o projeto de extensão</li>
          <li>Eleição para representante de turma</li>
        </ul>
      </article>

      <article className="card">
        <header className="card-header">
          <h2>Calendário Acadêmico</h2>
        </header>
        <ul className="card-content">
          <li>23/02 - Início do período letivo 2026-1</li>
          <li>25/04 - Prazo final para aplicação da P1</li>
          <li>23/06 - Prazo final para aplicação da P2</li>
          <li>04/07 - Fim do período letivo 2026-1</li>
        </ul>
      </article>

      <article className="card">
        <header className="card-header">
          <h2>Minhas Disciplinas</h2>
        </header>
        <ul className="card-content">
          <li>BI e Data Warehousing</li>
          <li>Construção de Frontend</li>
          <li>Manutenção de Software e Devops</li>
        </ul>
      </article>
    </Layout>
  )
}

export default Dashboard
