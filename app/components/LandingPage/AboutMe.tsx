import Image from 'next/image'
import { useTranslation } from 'next-i18next'

const AboutMe = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className='flex flex-col md:flex-row w-full justify-center items-center mt-4 space-y-4 md:space-y-0 md:space-x-4'>
        {/* Párrafo */}
        <div className='w-full md:w-4/12 text-center md:text-left'>
          <p
            suppressHydrationWarning
            className='text-primary font-grotesk text-sm md:text-2xl p-5 md:p-0'
          >
            {t('aboutMe')}
          </p>
        </div>

        {/* Imagen */}
        <div className='flex justify-center w-full md:w-auto'>
          <div className='image-container'>
            <Image
              src='/assets/code_snippet.png'
              alt='Profile Picture'
              width={367}
              height={367}
              className='animated-image w-full h-auto max-w-[200px] md:max-w-[300px] lg:max-w-[367px]'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe
