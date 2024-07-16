import React from 'react'

const Label = ({children, name, title}) => {
  return (
    <div>
        <label htmlFor={name}>{title}</label>
        {children}
    </div>
  )
}

export default Label
