import React from 'react'

const Label = ({children, field}) => {
  return (
    <div className='sm:flex gap-5 justify-between items-center '>
    <label  htmlFor={field.name} className=' min-w-40 bg-indigo-200 h-9 grid items-center pl-2 text-center sm:text-left mb-2 sm:mb-0' >{field.title}</label>
      {children}
    </div>
  )
}

export default Label;
