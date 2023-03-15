import List from './list'
import Card from './card'

function Board () {
  return (
    <div className=' flex-1 flex flex-col p-4 gap-4'>
      <div>
        <h1 className='text-2xl font-bold'>
          Development
        </h1>
      </div>
      <main className='flex flex-1 gap-6'>
        <List title='Todo'>
          <Card title='implementar el modal' />
          <Card title='implementar el modal' />
          <Card title='implementar el modal' />
          <Card title='implementar el modal' />
          <Card title='implementar el modal' />
          <Card title='implementar el modal' />
          <Card title='implementar el modal' />
          <Card title='implementar el modal' />
          <Card title='implementar el modal' />
          <Card title='implementar el modal' />
          <Card title='implementar el modal' />
          <Card title='implementar el modal' />
          <Card title='implementar el modal' />
          <Card title='implementar el modal' />
          <Card title='implementar el modal' />
        </List>
        <List />
        <List />
      </main>
    </div>
  )
}

export default Board
