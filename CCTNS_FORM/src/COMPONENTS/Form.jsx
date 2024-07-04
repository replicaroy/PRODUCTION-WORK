import React, { useState } from "react";
import '../App.css'
import Input from "./Input";
// import Swal from 'sweetalert2';
import Label from "./Label";


export default function Form() {
    const formObj = {
        username: '',
        password: '',
        city: '',
        date: '',
    }
    const [formvalue, setFormvalue] = useState(formObj)
    const [data, setData] = useState([])

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    
    const formFields = [
      { name: 'username', title: 'Username', type: 'text', placeholder: 'Username' },
      { name: 'password', title: 'Password', type: 'password', placeholder: 'Password' },
      { name: 'date', title: 'DOB', placeholder: 'DOB', type: "date" },
      { name: 'city', title: 'City', placeholder: 'Select a City', optionLabel: 'name', type: "dropdown" },
  ]
    const handleForm = (e) =>{

        const name = e.target.name
        const value = e.target.value
        setFormvalue((prev)=> (
            {...prev, [name]:value }
        ))
     
    }

    const handleSubmit = (e) =>{
        e.preventDefault()   
        if(!formvalue.username || !formvalue.password || !formvalue.city || !formvalue.date  ){

          alert('every field filling is mandatory')  
               
         return;
        }

       setData([...data, formvalue])
       console.log(data);
       setFormvalue(formObj)
    //    Swal.fire({
    //     title: 'Success!',
    //     text: 'Your action was successful.',
    //     icon: 'success',
    //     confirmButtonText: 'Cool'
    //   });  
       
    }

  return (
    <div className="container">
    <form action="" onSubmit={handleSubmit}>
      <div className="form-control">
        {formFields.map((field)=> <Input field={field} onChange={handleForm} formvalue={formvalue}  /> )}
       
        <Label  >       
            <button className="sub-btn">Submit</button>    
        </Label>


      </div>
    </form>

<div className="showdata">
    {
            data.map((item, index)=>(
                <div className="itembox" key={index}>
                    <h5>Id: {index+1}</h5>
                    <h5>UserName: {item.username}</h5>
                    <h5>Password: {item.password}</h5>
                    <h5>City: {item.city?.name}</h5>
                    <h5>Date: {`${item.date}`}</h5>           
                </div>
            ))
    }
</div>
    </div>

  );
}