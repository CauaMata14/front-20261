import './InputSenha.css'

function InputSenha({ value, onChange, erro }) {
  return (
    <>
      <label htmlFor="senha">Senha</label>
      <input
        type="password"
        id="senha"
        name="senha"
        value={value}
        onChange={onChange}
      />
      <p>{erro}</p>
    </>
  )
}

export default InputSenha
