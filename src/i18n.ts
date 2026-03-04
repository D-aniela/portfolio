import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          about: {
            title: 'About Me',
            part1:
              'I’m a fullstack developer with a stronger focus on backend and application architecture.',
            part2:
              'I have a background in Digital Design and Software Engineering, which allows me to understand both system logic and user experience.',
            part3:
              'I focus on building scalable solutions, writing clean code, and developing stable, well-structured applications.',
          },
          timeline: {
            text1:
              'Graduated with a Bachelor’s Degree in Digital Design and Animation, building a solid foundation in creativity, visual experience, and strategic thinking.',
            text2:
              'Completed the Web Development program at Codellege, strengthening my skills in modern frontend and backend development.',
            text3:
              'Worked as a Freelance Web Designer & Developer for Evie Blue, creating digital solutions focused on visual identity and conversion.',
            text4:
              'Fullstack Developer at Softtek. Involved in developing scalable enterprise solutions, performance optimization, and continuous improvement of internal processes using modern technologies.',
            text5:
              'Completed a Software Development Engineering degree, consolidating knowledge in architecture, databases, and systems development.',
            text6:
              'Web Developer at Crowneo, developing user-centered digital experiences.',
            text7:
              'Web Developer at DIJO, participating in the end-to-end development of the website and its core functionalities.',
            text8:
              'Constant focus on technological upskilling, specializing in Fullstack development with a strong emphasis on Backend architecture, 3D experiences, and system optimization.',
          },
          options: {
            home: 'Home',
            about: 'About',
            portfolio: 'Portfolio',
            contact: 'Contact',
          },
        },
      },
      es: {
        translation: {
          about: {
            title: 'Acerca de Mí',
            part1:
              'Soy desarrolladora fullstack con enfoque en backend y arquitectura de aplicaciones.',
            part2:
              'Cuento con formación en Diseño y Animación Digital e Ingeniería en Desarrollo de Software.',
            part3:
              'Me enfoco en construir soluciones escalables, mantener código limpio y desarrollar aplicaciones estables y bien estructuradas.',
          },
          timeline: {
            text1:
              'Finalicé la Licenciatura en Diseño y Animación Digital, desarrollando bases sólidas en creatividad, experiencia visual y pensamiento estratégico.',
            text2:
              'Completé el programa de Desarrollo Web en Codellege, fortaleciendo mis habilidades en frontend y backend moderno.',
            text3:
              'Me desempeñé como Web Designer & Developer freelance para Evie Blue, creando soluciones digitales enfocadas en identidad visual y conversión.',
            text4:
              'Fullstack Developer en Softtek. Participé en el desarrollo de soluciones empresariales escalables, optimización de rendimiento y mejora continua de procesos internos mediante tecnologías modernas.',
            text5:
              'Concluí la Ingeniería en Desarrollo de Software, consolidando conocimientos en arquitectura, bases de datos y desarrollo de sistemas.',
            text6:
              'Desarrollador Web en Crowneo, desarrollando experiencias digitales centradas en el usuario.',
            text7:
              'Web Developer en DIJO, participando en el desarrollo completo del sitio web y sus funcionalidades.',
            text8:
              'Enfoque constante en actualización tecnológica, especialización en desarrollo Fullstack con fuerte énfasis en arquitectura Backend, experiencias 3D y optimización de sistemas',
          },
          options: {
            home: 'Inicio',
            about: 'Acerca',
            portfolio: 'Portfolio',
            contact: 'Contacto',
          },
        },
      },
    },
  })

export default i18n
