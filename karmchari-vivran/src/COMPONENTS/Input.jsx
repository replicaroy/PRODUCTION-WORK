import React from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from 'primereact/calendar';
import Label from "./Label";

const Input = ({ field, onChange, value, options }) => {
  const handleChange = (e) => {
    onChange(e, field.name);
  };



  return (
    <div className="">
    <Label field={field}  >    
      {["यूआईडी", "प्रथम नाम", "मध्य नाम", "अंतिम नाम", "जन्म - स्थान", "आयु (वर्ष/महीना)", "लंबाई (सेमी)", "जन्म का वर्ष", "आयु सीमा (से - तक)"].includes(field.name) ? (
        <InputText value={value?.[field.name]} onChange={handleChange} name={field.name} className="" style={{width: '300px', marginTop: 20}}   />
      ) : null}
     

      {["गठन", "लिंग", "वर्ण", "बालों का प्रकार", "आँखों के प्रकार", "पहचान चिन्ह", "ज्ञात भाषाएँ"].includes(field.name) ? (
        <Dropdown
          className=""
          style={{width: '300px' , marginTop: 20}}
          optionLabel="name"
           optionValue="name"
          options={options}
          name={field.name}
          onChange={handleChange}
          value={value?.[field.name]} 
        />
      ) : null}
      {field.type ==='date' ? (        
        <Calendar 
        className=""
          style={{width: '300px' , marginTop: 20}}       
          name={field.name}
          onChange={handleChange}
          value={value?.[field.name]} 
        />
      ) : null}
    </Label>
    </div>
  );
};

export default Input;
