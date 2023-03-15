import Image from 'next/image'

function Card ({ title }) {
  return (
    <div className='text-gray-900 bg-white p-2 rounded-sm flex gap-4 flex-col'>
      <div className='flex justify-between'>
        <p>
          {title}
        </p>
        <span>
          <Image src='/edit.svg' alt='emoji' width={20} height={20} />
        </span>
      </div>
      <div className='flex justify-between'>
        <span>
          <Image src='/comment.svg' alt='emoji' width={20} height={20} />
        </span>
        <span>
          <Image src='/avatar.png' alt='emoji' width={20} height={20} />
        </span>
      </div>
    </div>
  )
}

export default Card
