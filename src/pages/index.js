import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Board from '@/components/Board'
import { useEffect, useState } from 'react'

export default function Home () {
  const [todoData, setTodoData] = useState([])
  const [taskIdToUpdate, setTaskIdToUpdate] = useState('')
  const [taskStatusToUpdate, setTaskStatusToUpdate] = useState('')
  const [taskHistory, setTaskHistory] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState({ title: 'Prueba', id: '', coments: [] })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    fetch('/api/tasks')
      .then((res) => res.json())
      .then((data) => setTodoData(data))
      .finally(() => setIsLoading(false))
  }, [taskHistory])

  useEffect(() => {
    if (taskIdToUpdate !== '' && taskStatusToUpdate !== '') {
      setIsLoading(true)
      fetch('/api/taskUpdater', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: taskIdToUpdate, status: taskStatusToUpdate })
      })
        .then((res) => res.json())
        .then((data) => setTaskHistory(data))
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false))
    }
  }, [taskIdToUpdate, taskStatusToUpdate])

  return (
    <Layout>
      <Header />
      <Board
        todoData={todoData}
        taskIdToUpdate={taskIdToUpdate}
        setTaskIdToUpdate={setTaskIdToUpdate}
        taskStatusToUpdate={taskStatusToUpdate}
        setTaskStatusToUpdate={setTaskStatusToUpdate}
        showModal={showModal}
        setShowModal={setShowModal}
        modalData={modalData}
        setModalData={setModalData}
        setTaskHistory={setTaskHistory}
        isLoading={isLoading}
      />
    </Layout>
  )
}
