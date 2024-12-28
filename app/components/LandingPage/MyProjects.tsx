// pages/index.js
import Image from 'next/image'
import Link from 'next/link'

export default function MyProjects() {
  const works = [
    {
      title: 'CROWNEO',
      tool: 'React.js, Firebase',
      image: '/assets/crowneo_icon.png',
      link: 'https://www.crowneo.com',
    },
    {
      title: 'URL Shortener',
      tool: 'UI-UX',
      image: '/assets/memoji_daniela.png',
    },
  ]

  return (
    <section id='myprojects' className='bg-background text-white'>
      <main className='container mx-auto p-8'>
        <h1 className='text-4xl text-center mb-8 font-fiolaregular'>
          My <span className='text-yellow-400 font-fiolaregular'>Projects</span>
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {works.map((work, index) => (
            <Link href={work.link ? work.link : '/404'} key={index}>
              <div
                key={index}
                className='bg-yellow-500 rounded-lg overflow-hidden shadow-lg'
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  width={300}
                  height={200}
                  className='w-full h-48 object-cover'
                />
                <div className='p-4'>
                  <h2 className='text-lg font-bold text-purple-900'>
                    {work.title}
                  </h2>
                  <p className='text-sm font-medium text-purple-700'>
                    → {work.tool}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </section>
  )
}
