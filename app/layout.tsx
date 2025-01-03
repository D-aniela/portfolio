import { I18nProvider } from './I18nProvider'
import { getInitialLang } from './../getInitialLang'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
import './globals.css'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const initialLang = await getInitialLang()

  return (
    <I18nProvider initialLang={initialLang}>
      <Navbar />
      {children}
      <Footer />
    </I18nProvider>
  )
}
