const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'
const TOKEN_KEY = 'alunoOnline.token'
const USUARIO_KEY = 'alunoOnline.usuario'

function gerarToken(usuario) {
  const aleatorio = crypto.randomUUID ? crypto.randomUUID() : String(Date.now())
  return btoa(`${usuario.id}:${usuario.email}:${aleatorio}`)
}

function usuarioSemSenha(usuario) {
  const { senha: _senha, ...dadosSeguros } = usuario
  return dadosSeguros
}

export function obterToken() {
  return localStorage.getItem(TOKEN_KEY)
}

export function obterSessaoSalva() {
  const token = obterToken()
  const usuarioSalvo = localStorage.getItem(USUARIO_KEY)

  if (!token || !usuarioSalvo) {
    return null
  }

  try {
    return {
      token,
      usuario: JSON.parse(usuarioSalvo)
    }
  } catch {
    limparSessao()
    return null
  }
}

export function salvarSessao({ usuario, token }) {
  localStorage.setItem(TOKEN_KEY, token)
  localStorage.setItem(USUARIO_KEY, JSON.stringify(usuario))
}

export function limparSessao() {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USUARIO_KEY)
}

export async function autenticar(email, senha) {
  let resposta

  try {
    resposta = await fetch(`${API_URL}/usuarios?email=${encodeURIComponent(email)}`)
  } catch {
    throw new Error('Servidor de autenticacao indisponivel. Inicie a API e tente novamente.')
  }

  if (!resposta.ok) {
    throw new Error('Nao foi possivel conectar ao servidor de autenticacao.')
  }

  const usuarios = await resposta.json()
  const usuarioEncontrado = usuarios.find(
    (usuario) => usuario.email === email && usuario.senha === senha
  )

  if (!usuarioEncontrado) {
    throw new Error('E-mail ou senha invalidos.')
  }

  const usuario = usuarioSemSenha(usuarioEncontrado)
  const token = gerarToken(usuario)
  const sessao = { usuario, token }

  salvarSessao(sessao)

  return sessao
}
