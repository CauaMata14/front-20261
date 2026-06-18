import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Tabela from '../components/Tabela'
import { listarRequerimentos } from '../services/requerimentosService'
import './Requerimentos.css'

function Requerimentos() {
  const [requerimentos, setRequerimentos] = useState([])
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(true)

  const colunas = ['Tipo de Requerimento', 'Data de Solicitação', 'Situação']
  const dadosTabela = requerimentos.map((requerimento) => ({
    tipo: requerimento.tipo,
    data: new Date(`${requerimento.data}T00:00:00`).toLocaleDateString('pt-BR'),
    situacao: requerimento.situacao
  }))

  useEffect(() => {
    let paginaAtiva = true

    async function carregarRequerimentos() {
      try {
        const dados = await listarRequerimentos()
        if (paginaAtiva) {
          setRequerimentos(dados)
          setErro('')
        }
      } catch (error) {
        if (paginaAtiva && error.status !== 401) {
          setErro(error.message)
        }
      } finally {
        if (paginaAtiva) {
          setCarregando(false)
        }
      }
    }

    carregarRequerimentos()

    return () => {
      paginaAtiva = false
    }
  }, [])

  return (
    <>
      <header className="page-header">
        <h1>Meus Requerimentos</h1>
        <h2>Faça solicitações online para a secretaria</h2>
      </header>

      <section className="requerimentos-actions">
        <Link to="/requerimentos/novo" className="novo-requerimento-link">
          Novo Requerimento
        </Link>
      </section>

      {carregando && <p>Carregando requerimentos...</p>}
      {erro && <p className="requerimentos-error">{erro}</p>}
      {!carregando && !erro && <Tabela colunas={colunas} dados={dadosTabela} />}
    </>
  )
}

export default Requerimentos
