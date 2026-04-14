import './Tabela.css'

function Tabela({ titulo, colunas, dados }) {
  return (
    <article className="tabela-card">
      {titulo && (
        <header className="tabela-header">
          <h3>{titulo}</h3>
        </header>
      )}
      <section className="tabela-container">
        <table className="tabela">
          <thead>
            <tr>
              {colunas.map((coluna, index) => (
                <th key={index}>{coluna}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dados.map((linha, index) => (
              <tr key={index}>
                {Object.values(linha).map((valor, i) => (
                  <td key={i}>{valor}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </article>
  )
}

export default Tabela
