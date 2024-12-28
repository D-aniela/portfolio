import Image from 'next/image'

const AboutMe = () => {
  return (
    <section
      id='about'
      className='bg-foreground h-[32rem] flex flex-row items-center justify-center text-white'
    >
      <div className='w-4/12'>
        <p className='text-primary font-grotesk text-2xl'>
          Apasionada por convertir ideas en realidad a través del código. Me
          encanta crear soluciones que combinen funcionalidad y diseño. Cuando
          no estoy programando, disfruto mantenerme activa, ya sea haciendo
          ejercicio o explorando nuevas formas de aprender y crecer.
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
    </section>
  )
}

export default AboutMe
