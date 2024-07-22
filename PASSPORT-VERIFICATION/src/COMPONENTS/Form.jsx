import React from 'react'
import {PersonDeatails,formfieldsarray, formfieldsarray2, sex, colourTypes, } from './Formfields'

import { Input } from 'postcss';
console.log(PersonDeatails,formfieldsarray, formfieldsarray2, sex, colourTypes,);





const Form = () => {

const onChange = (e)=> {
  alert()
}





  return (
    <>
    <div className=' grid place-items-center mt-10 ' >
      <h1 className=' text-4xl'>पासपोर्ट सत्यापन अनुरोध</h1>
    </div>
    <div className="fields">
      {formfieldsarray.map((field)=>(

        <Input        
        key={field.name}
        field={field}
        name={field.name}
        value={PersonDeatails?.[field.name] ?? ''}
        onChange={onChange}    

        />
                
      ))}
    </div>
    </>
  )
}

export default Form
