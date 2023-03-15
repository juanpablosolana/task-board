import Link from 'next/link'
import Image from 'next/image'

function Header () {
  return (
    <header className='bg-black/40'>
      <p className='logo'>
        <Image src='/logo.png' alt='Leonidas Esteban' width={40} height={40} />
        <Link href='https://leonidasesteban.com' className='uppercase logo text-white'>LeonidasEsteba.com</Link>
      </p>
    </header>
  )
}

export default Header
