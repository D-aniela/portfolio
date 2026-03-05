export const techIcons: Record<string, string> = {
  docker: '/svg/icons/docker.svg',
  firebase: '/svg/icons/firebase.svg',
  js: '/svg/icons/js.svg',
  mongo: '/svg/icons/mongo.svg',
  mysql: '/svg/icons/mysql.svg',
  nestjs: '/svg/icons/nestjs.svg',
  nextjs: '/svg/icons/nextjs.svg',
  react: '/svg/icons/react.svg',
  sql: '/svg/icons/sql.svg',
  ts: '/svg/icons/ts.svg',
  node: '/svg/icons/node.svg',
}

export const contactIcons: Record<string, { img: string; link: string }> = {
  email: {
    img: '/svg/icons/email.svg',
    link: 'mailto:lauraestradaib@gmail.com',
  },
  github: { img: '/svg/icons/github.svg', link: 'https://github.com/D-aniela' },
  linkedin: {
    img: '/svg/icons/linkedin.svg',
    link: 'https://www.linkedin.com/in/daniela-estrada-ibarra/',
  },
}

export type NavItem = {
  id: number
  label: string
}

export const items: { id: number; label: string }[] = [
  { id: 1, label: 'options.home' },
  { id: 2, label: 'options.about' },
  { id: 3, label: 'options.portfolio' },
  { id: 4, label: 'options.contact' },
]

export function getTranslatedItems(t: (k: string) => string): NavItem[] {
  return items.map((it) => ({
    ...it,
    label: t(it.label),
  }))
}
