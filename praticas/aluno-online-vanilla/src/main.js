import './style.css'

/**
 * Validação do formulário de login
 * Implementação sem uso de alert() ou atributos HTML required
 */

// Seleciona elementos do DOM
const loginForm = document.getElementById('login-form')
const emailInput = document.getElementById('email')
const senhaInput = document.getElementById('senha')
const emailError = document.getElementById('email-error')
const senhaError = document.getElementById('senha-error')

/**
 * Exibe mensagem de erro para um campo específico
 * @param {HTMLElement} errorElement - Elemento span de erro
 * @param {string} message - Mensagem de erro
 */
function showFieldError(errorElement, message) {
  errorElement.textContent = message
  errorElement.classList.add('has-error')
}

/**
 * Limpa mensagem de erro de um campo
 * @param {HTMLElement} errorElement - Elemento span de erro
 */
function clearFieldError(errorElement) {
  errorElement.textContent = ''
  errorElement.classList.remove('has-error')
}

/**
 * Limpa todas as mensagens de erro
 */
function clearAllErrors() {
  clearFieldError(emailError)
  clearFieldError(senhaError)
}

/**
 * Valida o formulário e retorna se é válido
 * @returns {boolean} - True se o formulário é válido
 */
function validateForm() {
  let isValid = true
  const email = emailInput.value.trim()
  const senha = senhaInput.value.trim()

  // Valida email
  if (email === '') {
    showFieldError(emailError, 'O campo de email é obrigatório.')
    isValid = false
  }

  // Valida senha
  if (senha === '') {
    showFieldError(senhaError, 'O campo de senha é obrigatório.')
    isValid = false
  }

  return isValid
}

/**
 * Manipula o envio do formulário
 * @param {Event} event - Evento de submit
 */
function handleSubmit(event) {
  // Previne o comportamento padrão (recarregar página)
  event.preventDefault()

  // Limpa erros anteriores
  clearAllErrors()

  // Valida e prossegue se válido
  if (validateForm()) {
    // Redireciona para a Dashboard
    window.location.href = '/'
  }
}

// Adiciona listener de evento se o formulário existir na página
if (loginForm) {
  loginForm.addEventListener('submit', handleSubmit)

  // Limpa mensagens de erro quando o usuário começa a digitar
  emailInput.addEventListener('input', () => {
    clearFieldError(emailError)
  })

  senhaInput.addEventListener('input', () => {
    clearFieldError(senhaError)
  })
}
