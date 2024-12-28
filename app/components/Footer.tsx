import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <footer className='bg-foreground py-6'>
        <div className='container mx-auto text-center'>
          <p className='text-primary mb-4 text-sm'>Connect with me:</p>
          <div className='flex justify-center space-x-6'>
            <Link href='https://www.linkedin.com/in/daniela-estrada-ibarra/'>
              <Image
                src='/assets/linked_in_icon.png'
                alt='Linked in icon'
                width={30}
                height={30}
              />
            </Link>
            <Link href='https://github.com/D-aniela'>
              <Image
                src='/assets/github_icon.png'
                alt='Github icon'
                width={30}
                height={30}
              />
            </Link>
          </div>
          <p className='mt-4 text-xs text-gray-400'>
            {/* &copy; {new Date().getFullYear()} */}
            Daniela.
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
