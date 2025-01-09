import { useTranslation } from 'next-i18next'

const ExperienceCard = () => {
  const { t } = useTranslation()
  const experience: {
    period: string
    title: string
    description: string
    technologies: string[]
  }[] = t('experience', { returnObjects: true }) as {
    period: string
    title: string
    description: string
    technologies: string[]
  }[]

  return (
    <section
      className='w-full px-4 md:px-44 max-h-96 overflow-y-auto'
      style={{ scrollbarWidth: 'thin', scrollbarColor: '#A3A3A3 #1A1A1A' }} // Personaliza el scrollbar para navegadores compatibles
    >
      {experience.map(
        (
          item: {
            period: string
            title: string
            description: string
            technologies: string[]
          },
          index: number
        ) => (
          <div className='p-4 text-white flex flex-col md:flex-row' key={index}>
            <p
              suppressHydrationWarning
              className='mb-2 md:mb-0 md:mr-24 whitespace-nowrap font-fiolaregular text-primary'
            >
              {item.period}
            </p>
            <div className='flex flex-col'>
              <p className='font-fiolaregular text-secondary'>{item.title}</p>
              <p
                suppressHydrationWarning
                className='mt-2 text-primary font-grotesk'
              >
                {item.description}
              </p>
              <div suppressHydrationWarning className='flex flex-row flex-wrap'>
                {item.technologies.map((tech: string, techIndex: number) => (
                  <button
                    suppressHydrationWarning
                    key={techIndex}
                    className='m-1 bg-primary text-foreground rounded-3xl p-2 font-fiolaregular w-15 md:w-20 h-7 text-xs cursor-default'
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )
      )}
    </section>
  )
}

export default ExperienceCard
