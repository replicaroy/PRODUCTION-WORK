import React from "react";
import "./Input.css";
import Label from "./Label";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { Password } from "primereact/password";

const Input = ({ field, onChange, value, options }) => {
  return (
    <div>
      <div className="main-div">
        <Label name={field.name} title={field.title}>
          {field.type === "text" && (
            <InputText
              className="w-100"
              name={field.name}
              type={field.type}
              onChange={onChange}
              value={value?.[field.name]}
            />
          )}
          {field.type === "password" && (
            <InputText
              className="w-100"
              name={field.name}
              type={field.type}
              onChange={onChange}
              value={value?.[field.name]}
            />
          )}
          {field.type === "date" && (
            <Calendar
              className="w-100"
              name={field.name}
              type={field.type}
              onChange={onChange}
              value={value?.[field.name]}
            />
          )}
          {['state','city','tehsil', 'village'].includes(field.name) &&(
            <Dropdown  
            className="w-100"
            optionLabel="name"
            options={options}
            optionValue='name'
            name={field.name}
            onChange={onChange}
            value={value?.[field.name]}
            />
          )}
            {/* {field.type === "indianStates" && (
            <Dropdown  
            className="w-100"
            optionLabel="indianStates"
            options={options}
            optionValue='indianStates'
            name={field.name}
            onChange={onChange}
            value={value?.[field.name]}
            />
          )} */}
        </Label>
      </div>
    </div>
  );
};

export default Input;
