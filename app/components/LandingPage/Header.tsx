import Image from 'next/image'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t } = useTranslation()

  return (
    <div className='bg-background h-[40rem] md:h-[32rem] flex flex-col md:flex-row items-center justify-center text-white'>
      {/* Sección de "name" y "Daniela" */}
      <div className='text-center md:text-left'>
        <h1 suppressHydrationWarning className='font-grotesk text-2xl mb-2'>
          {t('name')}
        </h1>
        <p className='text-secondary font-fiolaregular text-4xl md:text-7xl'>
          Daniela
        </p>
      </div>

      {/* Imagen */}
      <div className='image-container mb-4 md:mb-0 md:mx-8'>
        <Image
          src='/assets/memoji_daniela.png'
          width={291}
          height={327}
          alt='Picture of the author'
          className='animated-image'
        />
      </div>

      {/* Sección de "I am a developer" */}
      <div className='text-center md:text-left'>
        <h1 suppressHydrationWarning className='font-grotesk text-2xl mb-2'>
          {t('i am a')}
        </h1>
        <p
          className='text-secondary font-fiolaregular text-4xl md:text-7xl'
          suppressHydrationWarning
        >
          {t('developer')}
        </p>
      </div>
    </div>
  )
}

export default Header
