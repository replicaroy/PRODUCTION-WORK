import React from 'react'
import Form from './Form'

const Label = ({title, children, name}) => {
    return (
      <div className="form-value">
      <label htmlFor={name}>{title}</label>
      {children}    
    </div>
    
    )
  }
  
  export default Label
  