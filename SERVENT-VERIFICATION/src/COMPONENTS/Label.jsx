import React, { Children } from 'react'

const Label = ({field, Children}) => {
  return (
    <div>
        <label htmlFor={field.name}>{field.title}</label>
        {Children}
    </div>
  )
}

export default Label
