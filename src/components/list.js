
function List ({ title, children }) {
  return (
    <div className='relative flex-1'>
      <div className='absolute inset-0 flex flex-col flex-1 rounded p-4 bg-slate-300 text-gray-900'>
        <h2 className='font-bold '>{title}</h2>
        <div className='flex flex-col gap-4 overflow-auto'>
          {children}
        </div>
        <div>
          añadir otra tarjeta
        </div>
      </div>
    </div>
  )
}

export default List
