import Tabela from '../components/Tabela'

function Requerimentos() {
  const requerimentos = [
    { tipo: 'Revisão de Menção', data: '15/12/2025', situacao: 'Indeferido' },
    { tipo: 'Dispensa de Disciplina', data: '12/06/2025', situacao: 'Indeferido' },
    { tipo: 'Trancamento de Matrícula', data: '05/01/2024', situacao: 'Deferido' },
    { tipo: 'Mudança de Turno', data: '10/10/2023', situacao: 'Deferido' },
    { tipo: 'Renovação de Matrícula', data: '20/02/2023', situacao: 'Deferido' }
  ]

  const colunas = ['Tipo de Requerimento', 'Data de Solicitação', 'Situação']

  return (
    <>
      <header className="page-header">
        <h1>Meus Requerimentos</h1>
        <h2>Faça solicitações online para a secretaria</h2>
      </header>
      
      <Tabela colunas={colunas} dados={requerimentos} />
    </>
  )
}

export default Requerimentos
