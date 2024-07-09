[4:50 PM, 7/3/2024] Sunil Kumawat: inputgroup
[4:50 PM, 7/3/2024] Sunil Kumawat: import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import React from 'react'
import Reusable from './Reusable';
const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]


const Inputgroup = ({ field, onChangeCb, formData }) => {

    return (
        <Reusable name={field.name} title={field.title}>
            {field.type === 'date' ? <Calendar className='w-100' onChange={onChangeCb} name={field.name} value={formData?.[field.name]} placeholder={field.placeholder} /> : null}
            {['text', 'password', 'email']?.includes(field.type) ? <InputText type={field.type} onChange={onChangeCb} name={field.name} value={formData?.[field.name] ?? ""} placeholder={field.placeholder} className="w-100" /> : null}
            {field.type === 'dropdown' ? <Dropdown options={cities} optionLabel="name"
                placeholder={field.placeholder} className="w-100" onChange={onChangeCb} name={field.name} value={formData?.[field.name]} /> : null}
        </Reusable>
    )
}

export default Inputgroup
[4:51 PM, 7/3/2024] Sunil Kumawat: form.js
[4:51 PM, 7/3/2024] Sunil Kumawat: import React, { useState } from 'react'
import { Message } from 'primereact/message';
import { InputText } from 'primereact/inputtext';
import Reusable from './Reusable';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Inputgroup from './Inputgroup';



const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]
const intialvalue = {
    username: "",
    password: "",
    dob: "",
    city: ""
}

const formFields = [
    { name: 'Username', title: 'Username', type: 'text', placeholder: 'Username' },
    { name: 'password', title: 'Password', type: 'password', placeholder: 'Password' },
    { name: 'dob', title: 'DOB', placeholder: 'DOB', type: "date" },
    { name: 'city', title: 'City', placeholder: 'Select a City', optionLabel: 'name', type: "dropdown" },
];
const Form = () => {
    const [value1, setValue] = useState(intialvalue);
    const [data, setData] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue((pre) => ({
            ...pre, [name]: value
        }))

    }
    console.log(value1);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (value1.username === "" || value1.email === "" || value1.password === "" || value1.city === "") {
            toast.warn("Please Fill Up All Input Boxes Values", {
                position: "top-right",
                autoClose: 5000,
                theme: "colored",
            });
            return
        }

        else {
            setData((prev) => [...prev, value1])
            setValue(intialvalue)
            toast.success("Successfully Submitted", {
                position: "top-right",
                autoClose: 5000,
                theme: "colored",
            });
        }

        // console.log(data);
    }

    return (
        <div>
            <ToastContainer />
            <div className='rounded-4 shadow-lg px-5 py-4  main_div mx-auto mt-5'>


                <h1 className='text-center py-1 text-primary  '>User Form </h1>
                <div className="d-flex flex-column  text-left  textSize ">
                    {formFields?.map(field => <Inputgroup field={field} onChangeCb={handleChange} formData={value1} />)}

                    <Reusable>
                        <button onClick={handleSubmit} type="button" className="w-100 btn btn-success">Success</button>
                    </Reusable>
                </div>
            </div>
            <div className="container d-flex p-2 mt-5 flex-wrap mx-auto justify-content-center ">
                {data.map((ele, idx) => {
                    return (
                        <div key={idx} className='text-left border p-4 mx-2  my-2 rounded-3 shadow-lg'>
                            <p>Username : {ele.username}</p>
                            <p>password: <a href="{ele.email}">{ele.password} </a></p>
                            <p>DOB : {${ele.dob}}</p>
                            <p>City :  {ele.city?.name ?? ""}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Form