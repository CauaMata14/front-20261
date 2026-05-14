import Tabela from '../components/Tabela'

function Boletos() {
  const boletos = [
    { vencimento: '19/01/2026', valor: '500,00', situacao: 'Pago' },
    { vencimento: '19/02/2026', valor: '500,00', situacao: 'Em atraso' },
    { vencimento: '19/03/2026', valor: '500,00', situacao: 'A Pagar' },
    { vencimento: '19/04/2026', valor: '500,00', situacao: 'A Pagar' },
    { vencimento: '19/05/2026', valor: '500,00', situacao: 'A Pagar' },
    { vencimento: '19/06/2026', valor: '500,00', situacao: 'A Pagar' },
    { vencimento: '19/07/2026', valor: '500,00', situacao: 'A Pagar' },
    { vencimento: '19/08/2026', valor: '500,00', situacao: 'A Pagar' },
    { vencimento: '19/09/2026', valor: '500,00', situacao: 'A Pagar' },
    { vencimento: '19/10/2026', valor: '500,00', situacao: 'A Pagar' },
    { vencimento: '19/11/2026', valor: '500,00', situacao: 'A Pagar' },
    { vencimento: '19/12/2026', valor: '500,00', situacao: 'A Pagar' },
    { vencimento: '19/01/2027', valor: '500,00', situacao: 'A Pagar' },
    { vencimento: '19/02/2027', valor: '500,00', situacao: 'A Pagar' }
  ]

  const colunas = ['Vencimento', 'Valor R$', 'Situação']

  return (
    <>
      <header className="page-header">
        <h1>Meus Boletos</h1>
        <h2>Histórico de Pagamentos</h2>
      </header>
      
      <Tabela colunas={colunas} dados={boletos} />
    </>
  )
}

export default Boletos
