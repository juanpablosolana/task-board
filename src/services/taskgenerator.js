import dbConnect from '@/lib/db'
import Task from '@/models/task'

const taskUpdate = async (title, status, user) => {
  await dbConnect()
  const update = await Task.create({ title, status, user })

  return update
}

export default taskUpdate
