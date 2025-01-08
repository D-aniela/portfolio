import { useTranslation } from 'react-i18next'

export interface Props {
  activeTab: string
  handleTabChange: (tab: string) => void
  tab: string
  borders?: boolean
}

const AboutButton = ({ activeTab, handleTabChange, tab, borders }: Props) => {
  const { t } = useTranslation()
  return (
    <>
      <button
        className={`px-4 py-2 font-semibold transition-all duration-300 text-sm md:text-3xl ${
          borders ? 'rounded-r-full' : 'rounded-l-full'
        } h-10 md:h-20 md:w-64 border border-gray-700 ${
          activeTab === tab
            ? 'bg-graybg text-foreground font-fiolaregular' // Estilo para el botón activo
            : 'bg-graybg text-foreground hover:bg-gray-300 font-fiolalisa'
        }`}
        onClick={() => handleTabChange(tab)}
        suppressHydrationWarning
      >
        {t(tab)}
      </button>
    </>
  )
}

export default AboutButton
