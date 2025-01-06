import Image from 'next/image'
import { useTranslation } from 'next-i18next'

const Header = () => {
  const { t } = useTranslation()

  return (
    <div className='bg-background h-[32rem] flex flex-row items-center justify-center text-white'>
      <div>
        <h1 className='font-grotesk text-2xl mb-4'>{t('name')}</h1>
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
        <h1 className='font-grotesk text-2xl mb-4'>{t('i am a')}</h1>
        <p className='text-secondary font-fiolaregular text-7xl'>
          {t('developer')}
        </p>
      </div>
    </div>
  )
}

export default Header
