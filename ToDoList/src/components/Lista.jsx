const formatDateToBrazilian = (date) => {
  if (!date) return ''
  if (date.includes('-')) {
    const [year, month, day] = date.split('-')
    return `${day}/${month}/${year}`
  }
  return date
}

const Lista = ({ taskList, handleDelete, handleEdit, handleComplete }) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className="task">
            <div className="detalhes">
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.dificuldade}</p>
              <p>Data de Criação: {formatDateToBrazilian(task.date)}</p>
              <p>Status: {task.completed ? '✅ Concluída' : '⏳ Em andamento'}</p>

            </div>
            <div className="acao">
              <button onClick={() => handleEdit(task)} aria-label="Editar">✏️</button>
              <button onClick={() => handleDelete(task.id)} aria-label="Excluir">🗑️</button>
              <button onClick={() => handleComplete(task.id)} aria-label="Concluir">✅</button>
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas!</p>
      )}
    </>
  )
}

export default Lista
