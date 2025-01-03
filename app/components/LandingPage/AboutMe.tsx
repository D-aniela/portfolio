import Image from 'next/image'
import { useTranslation } from 'react-i18next'

const AboutMe = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className='flex flex-row w-full justify-center mt-4'>
        <div className='w-4/12'>
          <p className='text-primary text-left font-grotesk text-2xl'>
            {t('aboutMe')}
          </p>
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
      </div>
    </>
  )
}

export default AboutMe
