import taskUpdate from '@/services/taskupdater'

async function taskUpdaer (req, res) {
  if (req.method !== 'POST') return res.status(403).send()
  const { id, status } = req.body
  const result = await taskUpdate(id, status)
  res.status(200).json(result)
}

export default taskUpdaer
