import newTask from '@/services/taskgenerator'

async function taskGenerator (req, res) {
  if (req.method !== 'POST') return res.status(403).send()

  const user = {
    name: 'Jhon Doe',
    avatar: '/avatar.png'
  }
  const { title, status } = req.body
  const result = await newTask(title, status, user)
  res.status(200).json(result)
}

export default taskGenerator
