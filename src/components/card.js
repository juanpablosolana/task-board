import Image from 'next/image'

function Card ({ title, user, comments = [] }) {
  const handlerDragStart = (e) => {
    console.log(e)
  }
  return (
    <div draggable onDragStart={handlerDragStart} className='flex flex-col gap-4 p-2 text-gray-900 bg-white rounded-sm'>
      <div className='flex justify-between'>
        <p>
          {title}
        </p>
        <span>
          <Image src='/edit.svg' alt='emoji' width={20} height={20} />
        </span>
      </div>
      <div className='flex justify-between'>
        <span className='flex gap-1'>
          <Image src='/comment.svg' alt='emoji' width={20} height={20} />
          {comments.length > 0 ? comments.length : null}
        </span>
        <span>
          <Image src={user.avatar} alt='emoji' width={20} height={20} />
        </span>
      </div>
    </div>
  )
}

export default Card
