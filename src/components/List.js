
function List ({ title, children, handleDrop, id, setTaskHistory }) {
  const handleDragOver = (e) => {
    e.preventDefault()
  }
  const handleUpdate = () => {
    fetch('/api/taskGenerator', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: document.getElementById(id).value, status: id })
    })
      .then((res) => res.json())
      .then((data) => setTaskHistory(data), document.getElementById(id).value = '')
      .catch((err) => console.log(err))
  }
  return (
    <div data-id={id} className='relative flex-1' onDrop={handleDrop} onDragOver={handleDragOver}>
      <div className='absolute inset-0 flex flex-col flex-1 p-4 text-gray-900 rounded bg-slate-300'>
        <h2 className='font-bold '>{title}</h2>
        <div className='flex flex-col flex-1 gap-4 overflow-auto'>
          {children}
        </div>
        <details className='flex flex-row '>
          <summary className='text-gray-700 cursor-pointer'>Añada otra tarjeta</summary>
          <input type='text' name='newTask' id={id} className='p-2 border border-gray-300 rounded' />
          <button onClick={handleUpdate} className='p-2 my-2 rounded-lg bg-sky-500 text-cyan-50'>
            Añada otra tarjeta
          </button>
        </details>
      </div>
    </div>
  )
}

export default List
