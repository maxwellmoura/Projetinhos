import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Modal from './components/Modal'
import Form from './components/Form'
import Lista from './components/Lista'
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([])
  const [taskToUpdate, setTaskToUpdate] = useState(null)

  const deleteTask = (id) => setTasks((prev) => prev.filter((t) => t.id !== id))
  const addTask = (task) => setTasks((prev) => [...prev, task])

  const editTask = (task) => {
    setTaskToUpdate(task)
    const modal = document.querySelector('#modal')
    if (modal) modal.classList.remove('hide')
  }

  const updateTask = (id, title, dificuldade, date, completionDate) => {
    const updated = { id, title, dificuldade, date, completionDate }
    setTasks((prev) => prev.map((t) => (t.id === id ? updated : t)))
  }

const completeTask = (id) => {
  setTasks((prev) =>
    prev.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    )
  )
}
  const showModal = () => {
    setTaskToUpdate(null)
    const modal = document.querySelector('#modal')
    if (modal) modal.classList.remove('hide')
  }

  useEffect(() => {
    setTaskToUpdate(null)
  }, [tasks])

  return (
    <div>
      <Header />
      <main className="main">
        <h2>O que você vai fazer?</h2>
        <button className="btnNovaTarefa" onClick={showModal}>Nova Tarefa</button>

        <Modal>
          <Form
            btnText={taskToUpdate ? 'Editar Tarefa' : 'Criar Tarefa'}
            task={taskToUpdate}
            addTask={addTask}
            handleUpdate={updateTask}
          />
        </Modal>

        <div>
          <h2>Suas tarefas:</h2>
          <Lista taskList={tasks} handleDelete={deleteTask} handleEdit={editTask} handleComplete={completeTask} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
