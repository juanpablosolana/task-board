import List from './List'
import Card from './Card'
import Modal from './Modal'
import Loading from './Loading'

function Board ({
  todoData,
  setTaskIdToUpdate,
  setTaskStatusToUpdate,
  showModal,
  setShowModal,
  modalData,
  setModalData,
  setTaskHistory,
  isLoading
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
          {isLoading
            ? <Loading />
            : todoData.map((item) => {
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
            })}
        </List>
        <List id='doing' title='In Progress' handleDrop={handleDrop}>
          {isLoading
            ? <Loading />
            : todoData.map((item) => {
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
            })}
        </List>
        <List id='done' title='Done' handleDrop={handleDrop}>
          {isLoading
            ? <Loading />
            : todoData.map((item) => {
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
            })}
        </List>
        {showModal &&
          <Modal
            modalData={modalData}
            setShowModal={setShowModal}
            setTaskHistory={setTaskHistory}
          />}
      </main>
    </div>
  )
}

export default Board
