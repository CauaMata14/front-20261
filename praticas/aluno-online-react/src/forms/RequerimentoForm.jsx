import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { cadastrarRequerimento } from '../services/requerimentoService'
import './RequerimentoForm.css'

function formatarData(data) {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(`${data}T00:00:00`))
}

function RequerimentoForm() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      tipo: '',
      descricao: '',
      data: new Date().toISOString().slice(0, 10)
    }
  })

  const salvarRequerimento = async (dados) => {
    await cadastrarRequerimento({
      tipo: dados.tipo,
      descricao: dados.descricao.trim(),
      data: formatarData(dados.data),
      situacao: 'Em analise'
    })

    reset()
    navigate('/requerimentos')
  }

  return (
    <>
      <header className="page-header">
        <h1>Meus Requerimentos</h1>
        <h2>Novo Requerimento</h2>
      </header>

      <form className="requerimento-form" onSubmit={handleSubmit(salvarRequerimento)} noValidate>
        <div className="form-field">
          <label htmlFor="tipo">Tipo de Requerimento</label>
          <select
            id="tipo"
            {...register('tipo', {
              required: 'Tipo é obrigatório'
            })}
          >
            <option value="">Selecione um tipo...</option>
            <option value="Revisão de Menção">Revisão de Menção</option>
            <option value="Dispensa de Disciplina">Dispensa de Disciplina</option>
            <option value="Trancamento de Matrícula">Trancamento de Matrícula</option>
            <option value="Mudança de Turno">Mudança de Turno</option>
            <option value="Renovação de Matrícula">Renovação de Matrícula</option>
          </select>
          {errors.tipo && <span className="form-error">{errors.tipo.message}</span>}
        </div>

        <div className="form-field">
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            rows="6"
            {...register('descricao', {
              required: 'Descrição é obrigatório',
              minLength: {
                value: 10,
                message: 'Descrição deve ter no mínimo 10 caracteres'
              }
            })}
          />
          {errors.descricao && <span className="form-error">{errors.descricao.message}</span>}
        </div>

        <div className="form-field form-field-inline">
          <label htmlFor="data">Data do Requerimento</label>
          <input id="data" type="date" {...register('data')} />
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-secondary" onClick={() => navigate('/requerimentos')}>
            Cancelar
          </button>
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Salvando...' : 'Salvar'}
          </button>
        </div>
      </form>
    </>
  )
}

export default RequerimentoForm
