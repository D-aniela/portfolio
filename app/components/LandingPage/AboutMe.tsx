import Image from 'next/image'
import { useTranslation } from 'react-i18next'

const AboutMe = () => {
  const { t } = useTranslation()

  return (
    <section
      id='about'
      className='bg-foreground h-[32rem] flex flex-row items-center justify-center text-white'
    >
      <div className='w-4/12'>
        <p className='text-primary font-grotesk text-2xl'>{t('aboutMe')}</p>
      </div>
      <div>
        <div className='image-container'>
          <Image
            src='/assets/code_snippet.png'
            alt='Profile Picture'
            width={367}
            height={367}
            className='animated-image'
          />
        </div>
      </div>
    </section>
  )
}

export default AboutMe
