import { useEffect, useState } from 'react'

const Form = ({ btnText, task = null, addTask, handleUpdate }) => {
  const [id, setId] = useState(0)
  const [title, setTitle] = useState('')
  const [dificuldade, setDificuldade] = useState(0)
  const [date, setDate] = useState('')
  const [completionDate, setCompletionDate] = useState('')

  useEffect(() => {
    if (task) {
      setId(task.id || 0)
      setTitle(task.title || '')
      setDificuldade(task.dificuldade || 0)
      setDate(task.date || '')
      setCompletionDate(task.completionDate || '')
    } else {
      setId(0)
      setTitle('')
      setDificuldade(0)
      setDate('')
      setCompletionDate('')
    }
  }, [task])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (handleUpdate && task) {
      handleUpdate(id, title, dificuldade, date, completionDate)
    } else if (addTask) {
      const newTask = {
        id: Math.floor(Math.random() * 100000),
        title,
        dificuldade: Number(dificuldade),
        date,
        completionDate
      }
      addTask(newTask)
      setTitle('')
      setDificuldade(0)
      setDate('')
      setCompletionDate('')
    }
    const modal = document.querySelector('#modal')
    if (modal) modal.classList.add('hide')
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="input_container">
        <label htmlFor="title">Título:</label>
        <input type="text" name="title" placeholder="Título da tarefa" onChange={(e)=>setTitle(e.target.value)} value={title} required />
      </div>

      <div className="input_container">
        <label htmlFor="dificuldade">Dificuldade:</label>
        <input type="number" name="dificuldade" placeholder="0 a 10" onChange={(e)=>setDificuldade(e.target.value)} value={dificuldade} min="0" max="10" required />
      </div>

      <div className="input_container">
        <label htmlFor="date">Data:</label>
        <input type="date" name="date" onChange={(e)=>setDate(e.target.value)} value={date} required />
      </div>

      <div className="input_container">
        <label htmlFor="completionDate">Data de Conclusão:</label>
        <input type="date" name="completionDate" onChange={(e)=>setCompletionDate(e.target.value)} value={completionDate} />
      </div>

      <input type="submit" value={btnText} />
    </form>
  )
}

export default Form
