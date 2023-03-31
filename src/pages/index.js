import Layout from '@/components/layout'
import Header from '@/components/header'
import Board from '@/components/board'
import { useEffect, useState } from 'react'

export default function Home () {
  const [todoData, setTodoData] = useState([])
  const [taskIdToUpdate, setTaskIdToUpdate] = useState('')
  const [taskStatusToUpdate, setTaskStatusToUpdate] = useState('')
  const [taskHistory, setTaskHistory] = useState([])

  useEffect(() => {
    fetch('/api/tasks')
      .then((res) => res.json())
      .then((data) => setTodoData(data))
  }, [taskHistory])

  useEffect(() => {
    if (taskIdToUpdate !== '' && taskStatusToUpdate !== '') {
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
      />
    </Layout>
  )
}
