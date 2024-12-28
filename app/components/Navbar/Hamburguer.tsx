export interface HamburgerProps {
  setIsOpen: (value: boolean) => void
  isOpen: boolean
}

const Hamburger = ({ setIsOpen, isOpen }: HamburgerProps) => {
  return (
    <div className='md:hidden'>
      <button onClick={() => setIsOpen(!isOpen)} className='focus:outline-none'>
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          {isOpen ? (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'
            />
          ) : (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          )}
        </svg>
      </button>
    </div>
  )
}

export default Hamburger
