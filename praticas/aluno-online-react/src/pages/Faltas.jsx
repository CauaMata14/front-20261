import Layout from '../components/Layout'
import Tabela from '../components/Tabela'

function Faltas() {
  const semestre20261 = [
    { disciplina: 'BI e Data Warehousing', faltas: 0, presenca: '100%' },
    { disciplina: 'Construção de Frontend', faltas: 0, presenca: '100%' },
    { disciplina: 'Manutenção de Software e Devops', faltas: 0, presenca: '100%' }
  ]

  const semestre20252 = [
    { disciplina: 'Construção de Backend', faltas: 27, presenca: '87.5%' },
    { disciplina: 'Estrutura de Dados', faltas: 9, presenca: '85%' },
    { disciplina: 'Gerenciamento de Projetos', faltas: 10.5, presenca: '82.5%' }
  ]

  const semestre20251 = [
    { disciplina: 'Algoritmos e Programação', faltas: 5, presenca: '92%' },
    { disciplina: 'Banco de Dados', faltas: 2, presenca: '96%' }
  ]

  const colunas = ['Disciplina', 'Total de Faltas', '% de Presença']

  return (
    <Layout titulo="Minhas Faltas" subtitulo="Histórico de Faltas por Semestre">
      <Tabela titulo="2026.1" colunas={colunas} dados={semestre20261} />
      <Tabela titulo="2025.2" colunas={colunas} dados={semestre20252} />
      <Tabela titulo="2025.1" colunas={colunas} dados={semestre20251} />
    </Layout>
  )
}

export default Faltas
