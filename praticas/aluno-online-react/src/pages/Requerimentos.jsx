import Layout from '../components/Layout'
import './Requerimentos.css'

function Requerimentos() {
  const requerimentos = [
    { tipo: 'Revisão de Menção', data: '15/12/2025', situacao: 'Indeferido', situacaoClass: 'indeferido' },
    { tipo: 'Dispensa de Disciplina', data: '12/06/2025', situacao: 'Indeferido', situacaoClass: 'indeferido' },
    { tipo: 'Trancamento de Matrícula', data: '05/01/2024', situacao: 'Deferido', situacaoClass: 'deferido' },
    { tipo: 'Mudança de Turno', data: '10/10/2023', situacao: 'Deferido', situacaoClass: 'deferido' },
    { tipo: 'Renovação de Matrícula', data: '20/02/2023', situacao: 'Deferido', situacaoClass: 'deferido' }
  ]

  return (
    <Layout>
      <article className="requerimentos-container">
        <header className="requerimentos-header">
          <h1>Meus Requerimentos</h1>
          <h2>Faça solicitações online para a secretaria</h2>
        </header>

        <section className="requerimentos-card">
          <section className="table-container">
            <table className="requerimentos-table">
              <thead>
                <tr>
                  <th>Tipo de Requerimento</th>
                  <th>Data de Solicitação</th>
                  <th>Situação</th>
                </tr>
              </thead>
              <tbody>
                {requerimentos.map((req, index) => (
                  <tr key={index}>
                    <td>{req.tipo}</td>
                    <td>{req.data}</td>
                    <td>
                      <span className={`situacao-badge ${req.situacaoClass}`}>
                        {req.situacao}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </section>
      </article>
    </Layout>
  )
}

export default Requerimentos
