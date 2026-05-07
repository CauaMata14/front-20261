import Card from '../components/Card'

function Dashboard() {
  return (
    <>
      <header className="page-header">
        <h1>Dashboard</h1>
        <h2>Bem-vindo ao portal do aluno</h2>
      </header>
      
      <Card title="Mural de Avisos">
        <ul>
          <li>Inscrição para o projeto de extensão</li>
          <li>Eleição para representante de turma</li>
        </ul>
      </Card>

      <Card title="Calendário Acadêmico">
        <ul>
          <li>23/02 - Início do período letivo 2026-1</li>
          <li>25/04 - Prazo final para aplicação da P1</li>
          <li>23/06 - Prazo final para aplicação da P2</li>
          <li>04/07 - Fim do período letivo 2026-1</li>
        </ul>
      </Card>

      <Card title="Minhas Disciplinas">
        <ul>
          <li>BI e Data Warehousing</li>
          <li>Construção de Frontend</li>
          <li>Manutenção de Software e Devops</li>
        </ul>
      </Card>
    </>
  )
}

export default Dashboard
