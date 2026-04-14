import Layout from '../components/Layout'
import './Notas.css'

function Notas() {
  const semestres = [
    {
      nome: '2026.1',
      disciplinas: [
        { nome: 'BI e Data Warehousing', a1: '', a2: '', a3: '', mencao: 'SR' },
        { nome: 'Construção de Frontend', a1: '', a2: '', a3: '', mencao: 'SR' },
        { nome: 'Manutenção de Software e Devops', a1: '', a2: '', a3: '', mencao: 'SR' }
      ]
    },
    {
      nome: '2025.2',
      disciplinas: [
        { nome: 'Construção de Backend', a1: '5.4', a2: '6.2', a3: '', mencao: 'MM' },
        { nome: 'Estrutura de Dados', a1: '6.3', a2: '6.1', a3: '', mencao: 'MM' },
        { nome: 'Gerenciamento de Projetos', a1: '7.4', a2: '7.1', a3: '', mencao: 'MS' }
      ]
    },
    {
      nome: '2025.1',
      disciplinas: [
        { nome: 'Algoritmos e Programação', a1: '7.0', a2: '8.5', a3: '', mencao: 'MS' },
        { nome: 'Banco de Dados', a1: '8.0', a2: '8.0', a3: '', mencao: 'MS' }
      ]
    }
  ]

  return (
    <Layout>
      <article className="notas-container">
        <header className="notas-header">
          <h1>Minhas Notas</h1>
          <h2>Histórico de Notas por Semestre</h2>
        </header>

        {semestres.map((semestre) => (
          <section key={semestre.nome} className="notas-card">
            <header className="notas-card-header">
              <h3>{semestre.nome}</h3>
            </header>
            <section className="table-container">
              <table className="notas-table">
                <thead>
                  <tr>
                    <th>Disciplina</th>
                    <th>A1</th>
                    <th>A2</th>
                    <th>A3</th>
                    <th>Menção</th>
                  </tr>
                </thead>
                <tbody>
                  {semestre.disciplinas.map((disciplina, index) => (
                    <tr key={index}>
                      <td>{disciplina.nome}</td>
                      <td>{disciplina.a1}</td>
                      <td>{disciplina.a2}</td>
                      <td>{disciplina.a3}</td>
                      <td>{disciplina.mencao}</td>
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

export default Notas
