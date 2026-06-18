import { obterToken } from './authService'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

function criarErroNaoAutorizado() {
  const erro = new Error('Sessao expirada. Faca login novamente.')
  erro.status = 401
  return erro
}

function notificarSessaoExpirada() {
  window.dispatchEvent(new CustomEvent('auth:unauthorized'))
}

function obterHeadersAutenticados() {
  const token = obterToken()

  if (!token) {
    notificarSessaoExpirada()
    throw criarErroNaoAutorizado()
  }

  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }
}

async function tratarResposta(resposta) {
  if (resposta.status === 401) {
    notificarSessaoExpirada()
    throw criarErroNaoAutorizado()
  }

  if (!resposta.ok) {
    throw new Error('Nao foi possivel carregar os requerimentos.')
  }

  return resposta.json()
}

export async function listarRequerimentos() {
  const resposta = await fetch(`${API_URL}/requerimentos`, {
    headers: obterHeadersAutenticados()
  })

  return tratarResposta(resposta)
}

export async function cadastrarRequerimento(requerimento) {
  const resposta = await fetch(`${API_URL}/requerimentos`, {
    method: 'POST',
    headers: obterHeadersAutenticados(),
    body: JSON.stringify({
      ...requerimento,
      situacao: 'Em analise'
    })
  })

  return tratarResposta(resposta)
}
