import Layout from '../components/Layout'
import './Faltas.css'

function Faltas() {
  const semestres = [
    {
      nome: '2026.1',
      disciplinas: [
        { nome: 'BI e Data Warehousing', faltas: 0, presenca: '100%' },
        { nome: 'Construção de Frontend', faltas: 0, presenca: '100%' },
        { nome: 'Manutenção de Software e Devops', faltas: 0, presenca: '100%' }
      ]
    },
    {
      nome: '2025.2',
      disciplinas: [
        { nome: 'Construção de Backend', faltas: 27, presenca: '87.5%' },
        { nome: 'Estrutura de Dados', faltas: 9, presenca: '85%' },
        { nome: 'Gerenciamento de Projetos', faltas: 10.5, presenca: '82.5%' }
      ]
    },
    {
      nome: '2025.1',
      disciplinas: [
        { nome: 'Algoritmos e Programação', faltas: 5, presenca: '92%' },
        { nome: 'Banco de Dados', faltas: 2, presenca: '96%' }
      ]
    }
  ]

  return (
    <Layout>
      <article className="faltas-container">
        <header className="faltas-header">
          <h1>Minhas Faltas</h1>
          <h2>Histórico de Faltas por Semestre</h2>
        </header>

        {semestres.map((semestre) => (
          <section key={semestre.nome} className="semestre-card">
            <header className="semestre-header">
              <h3>{semestre.nome}</h3>
            </header>
            <section className="table-container">
              <table className="faltas-table">
                <thead>
                  <tr>
                    <th>Disciplina</th>
                    <th>Total de Faltas</th>
                    <th>% de Presença</th>
                  </tr>
                </thead>
                <tbody>
                  {semestre.disciplinas.map((disciplina, index) => (
                    <tr key={index}>
                      <td>{disciplina.nome}</td>
                      <td>{disciplina.faltas}</td>
                      <td>{disciplina.presenca}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </section>
        ))}
      </article>
    </Layout>
  )
}

export default Faltas
