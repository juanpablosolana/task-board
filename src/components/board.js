import List from './list'
import Card from './card'
import { todoData } from '@/constants/data'

function Board () {
  const handleDrop = (e) => {
    console.log(e)
  }
  return (
    <div className='flex flex-col flex-1 gap-4 p-4 '>
      <div>
        <h1 className='text-2xl font-bold'>
          Development
        </h1>
      </div>
      <main className='flex flex-1 gap-6'>
        <List title='Todo' handleDrop={handleDrop}>
          {
            todoData.map((item) => {
              if (item.status === 'todo') {
                return (
                  <Card
                    {...item}
                    key={item.id}
                  />
                )
              }
              return null
            })
        }
        </List>
        <List title='In Progress' handleDrop={handleDrop}>
          {
            todoData.map((item) => {
              if (item.status === 'doing') {
                return (
                  <Card
                    {...item}
                    key={item.id}
                  />
                )
              }
              return null
            })
          }
        </List>
        <List title='Done' handleDrop={handleDrop}>
          {
            todoData.map((item) => {
              if (item.status === 'done') {
                return (
                  <Card
                    {...item}
                    key={item.id}
                  />
                )
              }
              return null
            })
          }
        </List>
      </main>
    </div>
  )
}

export default Board
