import mongoose from 'mongoose'

const tasksSchema = new mongoose.Schema({
  title: String,
  user: {
    name: String,
    avatar: String
  },
  comments: [
    {
      text: String,
      user: {
        name: String,
        avatar: String
      }
    }
  ],
  status: String
})

export default mongoose.models.tasks || mongoose.model('tasks', tasksSchema)
