import List from './list'
import Card from './card'
import Modal from './modal'

function Board ({
  todoData,
  setTaskIdToUpdate,
  setTaskStatusToUpdate,
  showModal,
  setShowModal,
  modalData,
  setModalData
}) {
  const handleDrop = (e) => {
    setTaskStatusToUpdate(e.target.closest('[data-id]').dataset.id)
  }

  return (
    <div className='flex flex-col flex-1 gap-4 p-4 '>
      <div>
        <h1 className='text-2xl font-bold'>
          Development
        </h1>
      </div>
      <main className='flex flex-1 gap-6'>
        <List id='todo' title='Todo' handleDrop={handleDrop}>
          {
            todoData.map((item) => {
              if (item.status === 'todo') {
                return (
                  <Card
                    {...item}
                    key={item._id}
                    setTaskIdToUpdate={setTaskIdToUpdate}
                    setModalData={setModalData}
                    setShowModal={setShowModal}
                  />
                )
              }
              return null
            })
        }
        </List>
        <List id='doing' title='In Progress' handleDrop={handleDrop}>
          {
            todoData.map((item) => {
              if (item.status === 'doing') {
                return (
                  <Card
                    {...item}
                    key={item._id}
                    setTaskIdToUpdate={setTaskIdToUpdate}
                    setModalData={setModalData}
                    setShowModal={setShowModal}
                  />
                )
              }
              return null
            })
          }
        </List>
        <List id='done' title='Done' handleDrop={handleDrop}>
          {
            todoData.map((item) => {
              if (item.status === 'done') {
                return (
                  <Card
                    {...item}
                    key={item._id}
                    setTaskIdToUpdate={setTaskIdToUpdate}
                    setModalData={setModalData}
                    setShowModal={setShowModal}
                  />
                )
              }
              return null
            })
          }
        </List>
        {showModal &&
          <Modal
            modalData={modalData}
            setShowModal={setShowModal}
          />}
      </main>
    </div>
  )
}

export default Board
