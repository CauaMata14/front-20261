import './InputEmail.css'

function InputEmail({ value, onChange, erro }) {
  return (
    <>
      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        id="email"
        name="email"
        value={value}
        onChange={onChange}
      />
      <p>{erro}</p>
    </>
  )
}

export default InputEmail
