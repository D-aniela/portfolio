import Link from 'next/link'

export interface MobileMenuProps {
  isOpen: boolean
}

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  return (
    <>
      {isOpen && (
        <div className='md:hidden bg-foreground'>
          <div className='flex flex-col items-center space-y-4 py-4'>
            <Link className='hover:text-gray-400' href='/inicio'>
              Sobre mi
            </Link>
            <Link className='hover:text-gray-400' href='/nosotros'>
              Proyectos
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default MobileMenu
