import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from "primereact/inputtextarea";
import React from "react";
import Label from "./Label";
import { Dropdown } from "primereact/dropdown";



const Input = ({ field, onchangecb, formvalue, options=[] }) => {
  return (
    <div className="main">
    <div className="" style={{}}>
      <Label name={field.name} title={field.title}>
        {field.type === "date" ? (
          <Calendar
          className="w-100"
            name={field.name}
            type={field.type}
            onChange={onchangecb}
            value={formvalue?.[field.name] ?? ""}
          />
        ) : null}

        {field.type === "text" ? (
          <InputText
            name={field.name}
          className="w-100"
            type={field.type}
            onChange={onchangecb}
            value={formvalue?.[field.name] ?? ""}
          />
        ) : null}
        {field.type === "textarea" ? (
          <InputTextarea
            name={field.name}
            type={field.type}
          className="w-100"
            onChange={onchangecb}
            value={formvalue?.[field.name] ?? ""}
          />
        ) : null}
        {field.type === "dropdown" ? 
          <Dropdown    
            options={options}      
            onChange={onchangecb}
            optionLabel='name'
            optionValue="name"
          className="w-100"

            value={formvalue?.[field.name] ?? ""}
            name={field.name}
          />:null
        }
      </Label>
    </div>
    
    </div>
  );
};

export default Input;

