import Link from 'next/link'

const Button = ({ children, className = '', type }) => {
  return (
    <button
      type={type}
      className={
        'px-5 py-3 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ' +
        className
      }
    >
      {children}
    </button>
  )
}

const ButtonLink = ({ children, href }) => {
  return (
    <Link
      href={href}
      className='px-5 py-3 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
    >
      {children}
    </Link>
  )
}

const ButtonOutline = ({ children, href }) => {
  return (
    <Link
      className='text-blue-800 hover:text-white border border-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'
      href={href}
    >
      {children}
    </Link>
  )
}

Button.Outline = ButtonOutline
Button.Link = ButtonLink

export default Button
