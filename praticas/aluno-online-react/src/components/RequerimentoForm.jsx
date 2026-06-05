import { useForm } from 'react-hook-form'
import Button from './Button'
import './RequerimentoForm.css'

const tiposRequerimento = [
  'Revisao de Mencao',
  'Dispensa de Disciplina',
  'Trancamento de Matricula',
  'Mudanca de Turno',
  'Renovacao de Matricula',
]

function formatarDataAtual() {
  return new Intl.DateTimeFormat('pt-BR').format(new Date())
}

function RequerimentoForm({ onCadastrar }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      tipo: '',
      descricao: '',
    },
  })

  async function enviarFormulario(dados) {
    await onCadastrar({
      tipo: dados.tipo,
      data: formatarDataAtual(),
      situacao: 'Em analise',
      descricao: dados.descricao.trim(),
    })

    reset()
  }

  return (
    <article className="requerimento-form-card">
      <header className="requerimento-form-header">
        <h3>Novo requerimento</h3>
      </header>

      <form className="requerimento-form" onSubmit={handleSubmit(enviarFormulario)}>
        <label htmlFor="tipo">
          Tipo de requerimento
          <select
            id="tipo"
            {...register('tipo', { required: 'Selecione um tipo de requerimento.' })}
          >
            <option value="">Selecione</option>
            {tiposRequerimento.map((tipo) => (
              <option key={tipo} value={tipo}>
                {tipo}
              </option>
            ))}
          </select>
        </label>
        {errors.tipo && <span className="requerimento-form-erro">{errors.tipo.message}</span>}

        <label htmlFor="descricao">
          Justificativa
          <textarea
            id="descricao"
            rows="4"
            {...register('descricao', {
              required: 'Informe a justificativa.',
              minLength: {
                value: 10,
                message: 'A justificativa deve ter pelo menos 10 caracteres.',
              },
            })}
          />
        </label>
        {errors.descricao && (
          <span className="requerimento-form-erro">{errors.descricao.message}</span>
        )}

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Cadastrar requerimento'}
        </Button>
      </form>
    </article>
  )
}

export default RequerimentoForm
