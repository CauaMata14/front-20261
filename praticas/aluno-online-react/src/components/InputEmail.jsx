import './InputEmail.css'

function InputEmail({ label, value, onChange, error, placeholder = 'Digite seu e-mail' }) {
  return (
    <fieldset className="input-group">
      <label htmlFor="email">{label}</label>
      <input
        type="email"
        id="email"
        name="email"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={error ? 'input-error' : ''}
      />
      {error && <small className="error-message">{error}</small>}
    </fieldset>
  )
}

export default InputEmail
