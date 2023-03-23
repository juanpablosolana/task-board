import dbConnect from '@/lib/db'
import Task from '@/models/task'

const taskUpdate = async (id, status) => {
  await dbConnect()
  const update = await Task.findOneAndUpdate({ _id: id }, { status })
  return update.save()
}

export default taskUpdate
