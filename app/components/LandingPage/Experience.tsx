import { useTranslation } from 'next-i18next'

const ExperienceCard = () => {
  const { t } = useTranslation()
  const experience = t('experience', { returnObjects: true })

  return (
    <section
      className='w-full pl-44 pr-44 max-h-96 overflow-y-auto'
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
          <div className='p-4 text-white flex' key={index}>
            <p className='mr-24 whitespace-nowrap font-fiolaregular text-primary'>
              {item.period}
            </p>
            <div className='flex flex-col'>
              <p className='font-fiolaregular text-secondary'>{item.title}</p>
              <p className='mt-2 text-primary font-grotesk'>
                {item.description}
              </p>
              <div className='flex flex-row flex-wrap'>
                {item.technologies.map((tech: string, techIndex: number) => (
                  <button
                    key={techIndex}
                    className='m-1 bg-primary text-foreground rounded-3xl p-2 font-fiolaregular w-20 h-7 text-xs'
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
