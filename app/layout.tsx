import { getInitialLang } from './../getInitialLang'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
import './globals.css'
import { Providers } from './providers'

export const metadata = {
  title: 'Daniela Estrada | Full Stack Developer',
  description:
    'Full Stack Developer with a passion for creating beautiful and functional applications.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const initialLang = await getInitialLang()

  return (
    <html lang={initialLang}>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body>
        <Providers language={initialLang}>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
