import Image from 'next/image'

const Header = () => {
  return (
    <div className='bg-background h-[32rem] flex flex-row items-center justify-center text-white'>
      <div>
        <h1 className='font-grotesk text-2xl mb-4'>Mi nombre es</h1>
        <p className='text-secondary font-fiolaregular text-7xl'>Daniela</p>
      </div>
      <div className='image-container'>
        <Image
          src='/assets/memoji_daniela.png'
          width={291}
          height={327}
          alt='Picture of the author'
          className='animated-image'
        />
      </div>
      <div>
        <h1 className='font-grotesk text-2xl mb-4'>Soy desarrolladora</h1>
        <p className='text-secondary font-fiolaregular text-7xl'>Full Stack</p>
      </div>
    </div>
  )
}

export default Header
