import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export interface MobileMenuProps {
  isOpen: boolean
}

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  const { t } = useTranslation()

  return (
    <>
      {isOpen && (
        <div className='md:hidden bg-foreground'>
          <div className='flex flex-col items-center space-y-4 py-4'>
            <Link
              suppressHydrationWarning
              className='hover:text-gray-400'
              href='/inicio'
            >
              {t('about')}
            </Link>
            <Link
              suppressHydrationWarning
              className='hover:text-gray-400'
              href='/nosotros'
            >
              {t('projects')}
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default MobileMenu
