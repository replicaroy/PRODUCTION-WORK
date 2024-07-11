import React from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Checkbox } from "primereact/checkbox";
import Label from "./Label";

const Input = ({ field, onChange, value, options, checked }) => {
  const handleChange = (e) => {
    onChange(e, field.name);
  };

  return (
    <div className="">
      <Label field={field}>
        {[
          "यूआईडी",
          "प्रथम नाम",
          "मध्य नाम",
          "अंतिम नाम",
          "जन्म - स्थान",
          "आयु (वर्ष/महीना)",
          "लंबाई (सेमी)",
          "जन्म का वर्ष",
          "आयु सीमा (से - तक)",
        ].includes(field.name) ? (
          <InputText
            value={value?.[field.name]}
            onChange={handleChange}
            name={field.name}
            className=""
            style={{ width: "300px", marginTop: 10, padding: "5px 0 5px 10px" }}
          />
        ) : null}
        {[
          "गठन",
          "लिंग",
          "वर्ण",
          "बालों का प्रकार",
          "आँखों के प्रकार",
          "पहचान चिन्ह",
          "ज्ञात भाषाएँ",
        ].includes(field.name) ? (
          <Dropdown
            className=""
            style={{ width: "300px", marginTop: 10, padding: "5px 0 5px 10px" }}
            optionLabel="name"
            optionValue="name"
            options={options}
            name={field.name}
            onChange={handleChange}
            value={value?.[field.name]}
          />
        ) : null}
        {field.type === "date" ? (
          <Calendar
            className=""
            style={{ width: "300px", marginTop: 10, padding: "5px 0 5px 10px" }}
            name={field.name}
            onChange={handleChange}
            value={value?.[field.name]}
          />
        ) : null}
       
        {field.type === "check" ? (
        <div>
          <Checkbox
            inputId="work1"
            name="work"
            value='Food'            
            onChange={onChange}
            checked={checked}
          />
          <label htmlFor="ingredient1" className="ml-2">
            Food
          </label>
        </div>
      ) : null}

      {field.type === "check" ? (
        <div>
          <Checkbox
            inputId="work2"
            name="work"
            value='Cleaning'
            onChange={onChange}
            checked={checked}
          />
          <label htmlFor="ingredient2" className="ml-2">
            Cleaning
          </label>
        </div>
      ) : null}

      {field.type === "check" ? (
        <div>
          <Checkbox
            inputId="work3"
            name="work"
            value='Driving'
            onChange={onChange}
            checked={checked}
          />
          <label htmlFor="ingredient3" className="ml-2">
            Driving
          </label>
        </div>
      ) : null}

       
      </Label>
    </div>
  );
};

export default Input;
