import dbConnect from '@/lib/db'
import Task from '@/models/task'

const taskUpdate = async (id, status, title) => {
  await dbConnect()
  const update = status
    ? await Task.findOneAndUpdate({ _id: id }, { status })
    : await Task.findOneAndUpdate({ _id: id }, { title })
  return update.save()
}

export default taskUpdate
