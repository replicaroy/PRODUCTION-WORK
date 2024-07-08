import React from 'react'
import Label from './Label'
import { InputText } from 'primereact/inputtext';
import { InputText } from 'primereact/inputtext';



const Input = (field, onChange,) => {
  return (
    <div>
      <Label field= {field}  />
      {
        field.type === 'text' ? <InputText value={value}  />
      }
      
      <Label/>
    </div>
  )
}

export default Input
