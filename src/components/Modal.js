import Image from 'next/image'

function Modal ({ setShowModal, modalData }) {
  const { title, comments = [], _id: id } = modalData

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm'>
      <div className='relative flex flex-col w-3/4 p-4 rounded bg-slate-100'>
        <div className='flex justify-between'>
          <h2 className='text-xl font-bold'>{title}</h2>
          <span className='text-gray-400' onClick={() => setShowModal(false)}>X</span>
        </div>
        <div className='flex flex-col gap-4 mt-4'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='title'>Editar Título</label>
            <input type='text' name='title' id='title' className='p-2 border border-gray-300 rounded' />
            <button>
              Actualizar
            </button>
          </div>
          {comments?.length > 0 &&
            <div className='flex flex-col gap-2'>
              <label htmlFor='comments'>Comentarios</label>
              {comments.map((item) => {
                return (
                  <div key={id}>
                    <div className='flex items-center gap-2 p-3'>
                      <Image src={item.user.avatar} alt='emoji' width={30} height={30} />
                      <p className='font-bold'>{item.user.name}</p>
                      <p className='text-xs text-gray-300'> hace 5 horas</p>
                    </div>
                    <div className='px-3 py-3 mx-12 bg-white'>
                      <p>{item.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>}
        </div>
      </div>
    </div>
  )
}

export default Modal
