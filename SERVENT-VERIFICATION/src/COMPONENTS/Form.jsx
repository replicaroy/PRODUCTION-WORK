import React, { useState } from 'react'
import Input from './Input';

const FormInputs = {
    name: '',
    email: '',
    password: '',
    date: '',
    city: '',
}

const Form = () => {
    const [formVal, setFormVal] = useState(FormInputs);
    const [data, setData] = useState([])

    const HandleChange = (e)=>{  
        name =  e.target.name;
        value =  e.target.value;
        setFormVal((prev)=> ({
            ...prev, data
        }))}

    
    const HandleSubmit = (e)=>{
        e.preventDefault()
        name =  e.target.name;
        value =  e.target.value;
    }

    const formFields = [
        {name: 'name', type: 'name', title: 'Name', },
        {name: 'email', type: 'email', title: 'Email', },
        {name: 'password', type: 'password', title: 'Password', },
        {name: 'date', type: 'date', title: 'Date', },
        {name: 'city', type: 'city', title: 'City', },
    ]

    const cities = {
        name: 'Jaipur',
        name: 'Udaiupur',
        name: 'Ajmer',
        name: 'Bikaner',
        name: 'Kota',
    }

  return (
    <>
    <div className='data-pass-field'>
        {
            formFields.map((field)=>(
                <Input field={field} onchange={HandleChange} vlaue = {formVal} />
            ))
        }
      
    </div>

    <div className="shwodata">
        <div>
            {data.map((item, i)=> (
                <div className="items">
                    <div className="name">{item.name}</div>
                    <div className="email">{item.email}</div>
                    <div className="password">{item.password}</div>
                    <div className="date">{item.date}</div>
                    <div className="city">{item.city}</div>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default Form
