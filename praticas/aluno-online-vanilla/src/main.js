import './style.css'

/**
 * Validação do formulário de login
 * Implementação sem uso de alert() ou atributos HTML required
 */

// Seleciona elementos do DOM
const loginForm = document.getElementById('login-form')
const errorMessagesContainer = document.getElementById('error-messages')

/**
 * Exibe mensagens de erro na interface
 * @param {string[]} errors - Array de mensagens de erro
 */
function displayErrors(errors) {
  // Limpa mensagens anteriores
  errorMessagesContainer.innerHTML = ''

  if (errors.length === 0) {
    errorMessagesContainer.classList.remove('has-errors')
    return
  }

  // Cria lista de erros
  const ul = document.createElement('ul')
  errors.forEach((error) => {
    const li = document.createElement('li')
    li.textContent = error
    ul.appendChild(li)
  })

  errorMessagesContainer.appendChild(ul)
  errorMessagesContainer.classList.add('has-errors')
}

/**
 * Valida os campos do formulário
 * @param {string} email - Valor do campo email
 * @param {string} senha - Valor do campo senha
 * @returns {string[]} - Array de mensagens de erro
 */
function validateForm(email, senha) {
  const errors = []

  if (!email || email.trim() === '') {
    errors.push('O campo email é obrigatório')
  }

  if (!senha || senha.trim() === '') {
    errors.push('O campo senha é obrigatório')
  }

  return errors
}

/**
 * Manipula o envio do formulário
 * @param {Event} event - Evento de submit
 */
function handleSubmit(event) {
  // Previne o comportamento padrão (recarregar página)
  event.preventDefault()

  // Obtém valores dos campos
  const emailInput = document.getElementById('email')
  const senhaInput = document.getElementById('senha')

  const email = emailInput.value
  const senha = senhaInput.value

  // Valida os campos
  const errors = validateForm(email, senha)

  // Exibe erros ou prossegue
  if (errors.length > 0) {
    displayErrors(errors)
  } else {
    // Limpa mensagens de erro
    displayErrors([])

    // Redireciona para a Dashboard
    window.location.href = '/'
  }
}

// Adiciona listener de evento se o formulário existir na página
if (loginForm) {
  loginForm.addEventListener('submit', handleSubmit)

  // Limpa mensagens de erro quando o usuário começa a digitar
  const inputs = loginForm.querySelectorAll('input')
  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      displayErrors([])
    })
  })
}
