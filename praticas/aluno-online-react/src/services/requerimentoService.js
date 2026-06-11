const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000'
const REQUERIMENTOS_URL = `${BASE_URL}/requerimentos`

async function listarRequerimentos() {
  const resposta = await fetch(REQUERIMENTOS_URL)

  if (!resposta.ok) {
    throw new Error('Nao foi possivel carregar os requerimentos.')
  }

  return resposta.json()
}

async function cadastrarRequerimento(requerimento) {
  const resposta = await fetch(REQUERIMENTOS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requerimento),
  })

  if (!resposta.ok) {
    throw new Error('Nao foi possivel cadastrar o requerimento.')
  }

  return resposta.json()
}

export { listarRequerimentos, cadastrarRequerimento }
