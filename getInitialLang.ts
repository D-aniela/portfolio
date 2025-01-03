import { cookies } from 'next/headers'

export async function getInitialLang(): Promise<string> {
  const langCookie = (await cookies()).get('NEXT_LOCALE')?.value
  return langCookie || 'en' // Idioma por defecto
}
