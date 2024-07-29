import React from 'react';
import Input from './Input';
import { formFields1, formFields2,  optionsList } from './Data';
// console.log(formFields, optionsList);

const Form = () => {
  return (
    <div className='border grid items-center m-10 '>
    <div className='flex justify-center h-screen gap-20 pt-20'>
        <div className="form-one">
        {formFields1.map((fields)=> (
            <Input     
                key={fields.name}
                fields={fields}   
                options={optionsList(fields)}            
            />
          
        ))}
        </div>
        <div className="form-one">
        {formFields2.map((fields)=> (
            <Input     
                key={fields.name}
                fields={fields}   
                options={optionsList(fields)}            
            />
          
        ))}
        </div>
       
    </div>
    </div>
  )
}

export default Form
