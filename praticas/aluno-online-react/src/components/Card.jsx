import './Card.css'

function Card({ title, children, className = '' }) {
  return (
    <article className={`card ${className}`}>
      {title && (
        <header className="card-header">
          <h2>{title}</h2>
        </header>
      )}
      <section className="card-content">
        {children}
      </section>
    </article>
  )
}

export default Card
