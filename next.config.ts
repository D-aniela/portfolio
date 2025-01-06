import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  reactStrictMode: true,
}

export default nextConfig
