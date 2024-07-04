import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import Label from "./Label";


const Input = ({ field, onChange, formvalue }) => {
  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];

  return (
    <div>
      <Label name={field.name} title={field.title}>
        {["text", "email", "password"]?.includes(field.type) ? <InputText type="text" name={field.name} onChange={onChange}  value={formvalue?.[field.name] ?? ""} /> : null} 

        {field.type==="dropdown" ? <Dropdown name={field.name} options={cities} optionLabel="name" onChange={onChange} value={formvalue?.[field.name] ?? ""} />:null }
        {field.type === "date" ? <Calendar name={field.name} onChange={onChange} value={formvalue?.[field.name] ?? ""} /> :null  }
      </Label>
    </div>
  ); };

  export default Input;