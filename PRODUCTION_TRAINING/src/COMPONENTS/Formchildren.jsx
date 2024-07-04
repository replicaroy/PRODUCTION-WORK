import React from 'react'
import '../App.css'


const Formchildren = ({title, children, name}) => {
  return (
    <div className="form-value">
    <label htmlFor={name}>{title}</label>
    {children}    
  </div>
  
  )
}

export default Formchildren
