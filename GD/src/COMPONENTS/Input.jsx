import React, { useEffect, useState } from "react";
import Label from "./Label";
import { InputText } from "primereact/inputtext";
import { FileUpload } from "primereact/fileupload";
import { Dropdown } from "primereact/dropdown";
// import { Calendar } from "primereact/calendar";
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';

const radioSelect = [
    {name: 'एक' , value: 'एक' },
    {name: 'विभिन्न' , value: 'विभिन्न' },
    
]
const times = new Date();
console.log(times.toLocaleTimeString(), times.toLocaleDateString());

const Input = ({ fields, options }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mt-2">
      <Label fields={fields} >
        {fields.type === "date" && (
          <label htmlFor="">            
            {currentTime.toLocaleDateString()}{" "}
            {currentTime.toLocaleTimeString()}{" "}
          </label>
        )}

        {fields.type === "text" && 
        <InputText
         className="border h-10 w-full"
        //  name={}
          />}

        {fields.type === "dropdown" && (
          <Dropdown
            className="border h-10 w-full"
            options={options}
            optionLabel="name"
            optionValue="value"
            placeholder={fields.placeholder}
            name={fields.label}
          />
        )}

        {fields.type === "textarea" && (
          <InputTextarea
          className="border w-full" 
           rows={6} cols={50} />
        )}

        {fields.type === "radio" && (
          radioSelect.map((select) => (
            <RadioButton
            // inputId={select.value}
            name={fields.name}
            // value={option.value}
            // onChange={onChange}
            // checked={value === select.value}  
            />
          ))
        )}
      </Label>
    </div>
  );
};

export default Input;
