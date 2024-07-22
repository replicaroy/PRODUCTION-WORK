import React from 'react'
import Label from './Label'

const Input = (key, field, name, value, onChange) => {
  return (
    <div>
        <Label name={field.name} title={field.title} >
            {field.type === 'text' ?
             <input type="text" name={field.name} value={value} onChange={onChange} /> 
              : null ?? ''}
            
        

        </Label>
  
    </div>
  )
}

export default Input
