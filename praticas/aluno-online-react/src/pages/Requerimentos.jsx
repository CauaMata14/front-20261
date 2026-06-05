import { useEffect, useState } from 'react'
import Tabela from '../components/Tabela'
import RequerimentoForm from '../components/RequerimentoForm'
import {
  cadastrarRequerimento,
  listarRequerimentos,
} from '../services/requerimentoService'
import './Requerimentos.css'

function Requerimentos() {
  const [requerimentos, setRequerimentos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

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
        if (paginaAtiva) {
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

  async function handleCadastrarRequerimento(requerimento) {
    try {
      const requerimentoCadastrado = await cadastrarRequerimento(requerimento)
      setRequerimentos((listaAtual) => [requerimentoCadastrado, ...listaAtual])
      setErro('')
    } catch (error) {
      setErro(error.message)
      throw error
    }
  }

  const colunas = ['Tipo de Requerimento', 'Data de Solicitacao', 'Situacao']
  const dadosTabela = requerimentos.map(({ tipo, data, situacao }) => ({
    tipo,
    data,
    situacao,
  }))

  return (
    <>
      <header className="page-header">
        <h1>Meus Requerimentos</h1>
        <h2>Faca solicitacoes online para a secretaria</h2>
      </header>

      <section className="requerimentos-layout">
        <RequerimentoForm onCadastrar={handleCadastrarRequerimento} />

        <div className="requerimentos-lista">
          {erro && <p className="requerimentos-alerta">{erro}</p>}

          {carregando ? (
            <p className="requerimentos-status">Carregando requerimentos...</p>
          ) : (
            <Tabela titulo="Solicitacoes cadastradas" colunas={colunas} dados={dadosTabela} />
          )}
        </div>
      </section>
    </>
  )
}

export default Requerimentos
