import { I18nProvider } from './I18nProvider'
import { getInitialLang } from './../getInitialLang'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
import './globals.css'
import { Providers } from './providers'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const initialLang = await getInitialLang()

  return (
    <Providers>
      <I18nProvider initialLang={initialLang}>
        <Navbar />
        {children}
        <Footer />
      </I18nProvider>
    </Providers>
  )
}
