const Input = ({
  type = 'text',
  placeholder = '',
  label = '',
  name,
  onChange,
  value,
  helpText = ''
}) => {
  return (
    <>
      <label
        htmlFor={name}
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      />
      {helpText && (
        <p
          id='helper-text-explanation'
          className='mt-2 text-sm text-gray-500 dark:text-gray-400'
        >
          {helpText}
        </p>
      )}
    </>
  )
}

export default Input
