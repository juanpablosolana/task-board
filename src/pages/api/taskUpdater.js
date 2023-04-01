import taskUpdate from '@/services/taskupdater'

async function taskUpdaer (req, res) {
  if (req.method !== 'PUT') return res.status(403).send()
  const { id, status, title } = req.body
  const result = await taskUpdate(id, status, title)
  res.status(200).json(result)
}

export default taskUpdaer
