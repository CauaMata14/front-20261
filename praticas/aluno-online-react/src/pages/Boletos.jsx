import Layout from '../components/Layout'
import './Boletos.css'

function Boletos() {
  const boletos = [
    { vencimento: '19/01/2026', valor: '500,00', situacao: 'Pago', situacaoClass: 'pago' },
    { vencimento: '19/02/2026', valor: '500,00', situacao: 'Em atraso', situacaoClass: 'atraso' },
    { vencimento: '19/03/2026', valor: '500,00', situacao: 'A Pagar', situacaoClass: 'a-pagar' },
    { vencimento: '19/04/2026', valor: '500,00', situacao: 'A Pagar', situacaoClass: 'a-pagar' },
    { vencimento: '19/05/2026', valor: '500,00', situacao: 'A Pagar', situacaoClass: 'a-pagar' },
    { vencimento: '19/06/2026', valor: '500,00', situacao: 'A Pagar', situacaoClass: 'a-pagar' },
    { vencimento: '19/07/2026', valor: '500,00', situacao: 'A Pagar', situacaoClass: 'a-pagar' },
    { vencimento: '19/08/2026', valor: '500,00', situacao: 'A Pagar', situacaoClass: 'a-pagar' },
    { vencimento: '19/09/2026', valor: '500,00', situacao: 'A Pagar', situacaoClass: 'a-pagar' },
    { vencimento: '19/10/2026', valor: '500,00', situacao: 'A Pagar', situacaoClass: 'a-pagar' },
    { vencimento: '19/11/2026', valor: '500,00', situacao: 'A Pagar', situacaoClass: 'a-pagar' },
    { vencimento: '19/12/2026', valor: '500,00', situacao: 'A Pagar', situacaoClass: 'a-pagar' },
    { vencimento: '19/01/2027', valor: '500,00', situacao: 'A Pagar', situacaoClass: 'a-pagar' },
    { vencimento: '19/02/2027', valor: '500,00', situacao: 'A Pagar', situacaoClass: 'a-pagar' }
  ]

  return (
    <Layout>
      <article className="boletos-container">
        <header className="boletos-header">
          <h1>Meus Boletos</h1>
          <h2>Histórico de Pagamentos</h2>
        </header>

        <section className="boletos-card">
          <section className="table-container">
            <table className="boletos-table">
              <thead>
                <tr>
                  <th>Vencimento</th>
                  <th>Valor R$</th>
                  <th>Situação</th>
                </tr>
              </thead>
              <tbody>
                {boletos.map((boleto, index) => (
                  <tr key={index}>
                    <td>{boleto.vencimento}</td>
                    <td>{boleto.valor}</td>
                    <td>
                      <span className={`situacao-badge ${boleto.situacaoClass}`}>
                        {boleto.situacao}
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

export default Boletos
