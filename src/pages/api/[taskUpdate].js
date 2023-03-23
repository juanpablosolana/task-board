import dbConnect from '@/lib/db'
import Task from '@/models/task'

export default async function handler (req, res) {
  if (req.method !== 'GET') return res.status(403).send()

  await dbConnect()
  try {
    const mutations = await Task.find()
    res.status(200).json(mutations)
  } catch (error) {
    res.status(400).json(error)
  }
}
