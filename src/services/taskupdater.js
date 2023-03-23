import dbConnect from '@/lib/db'
import Task from '@/models/task'

const taskUpdate = async (id) => {
  await dbConnect()
  const update = await Task.findOneAndUpdate({ _id: id })
  return update.save()
}

export default taskUpdate
