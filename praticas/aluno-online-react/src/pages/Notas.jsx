import Layout from '../components/Layout'
import Tabela from '../components/Tabela'

function Notas() {
  const semestre20261 = [
    { disciplina: 'BI e Data Warehousing', a1: '', a2: '', a3: '', mencao: 'SR' },
    { disciplina: 'Construção de Frontend', a1: '', a2: '', a3: '', mencao: 'SR' },
    { disciplina: 'Manutenção de Software e Devops', a1: '', a2: '', a3: '', mencao: 'SR' }
  ]

  const semestre20252 = [
    { disciplina: 'Construção de Backend', a1: '5.4', a2: '6.2', a3: '', mencao: 'MM' },
    { disciplina: 'Estrutura de Dados', a1: '6.3', a2: '6.1', a3: '', mencao: 'MM' },
    { disciplina: 'Gerenciamento de Projetos', a1: '7.4', a2: '7.1', a3: '', mencao: 'MS' }
  ]

  const semestre20251 = [
    { disciplina: 'Algoritmos e Programação', a1: '7.0', a2: '8.5', a3: '', mencao: 'MS' },
    { disciplina: 'Banco de Dados', a1: '8.0', a2: '8.0', a3: '', mencao: 'MS' }
  ]

  const colunas = ['Disciplina', 'A1', 'A2', 'A3', 'Menção']

  return (
    <Layout titulo="Minhas Notas" subtitulo="Histórico de Notas por Semestre">
      <Tabela titulo="2026.1" colunas={colunas} dados={semestre20261} />
      <Tabela titulo="2025.2" colunas={colunas} dados={semestre20252} />
      <Tabela titulo="2025.1" colunas={colunas} dados={semestre20251} />
    </Layout>
  )
}

export default Notas
