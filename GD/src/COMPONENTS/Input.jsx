import React, { useEffect, useState } from "react";
import Label from "./Label";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from "primereact/radiobutton";
import { InputNumber } from "primereact/inputnumber";
import { Checkbox } from "primereact/checkbox";

const radioSelect = [
  { name: "एक", value: "एक" },
  { name: "विभिन्न", value: "विभिन्न" },
];

const checkFields = [
  { name: "one", value: "one" },
  { name: "two", value: "two" },
  { name: "three", value: "three" },
];

const Input = ({ fields, options, onChange, value }) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      onChange({target: {value: new Date(), name:"दिनांक / समय"}});
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mt-2 text-sm">
      <Label fields={fields}>
        {fields.type === "date" && (
          <label htmlFor="">
            {fields.label}: { value ? value?.toLocaleDateString() +" "+  value?.toLocaleTimeString() : null}
          </label>
        )}

        {fields.type === "text" && (
          <InputText
            className="border h-10 w-full"
            onChange={onChange}
            value={value}
            name={fields.label}
          />
        )}

        {fields.type === "dropdown" && (
          <Dropdown
            className="border h-10 w-full text-center "
            options={options}
            optionLabel="name"           
            placeholder={fields.placeholder}
            name={fields.label}
            onChange={onChange}
            value={value}
          />
        )}

        {fields.type === "textarea" && (
          <InputTextarea
            className="border w-full min-w-0"
            onChange={onChange}
            name={fields.label}
            value={value}
            rows={6}
            cols={50}
          />
        )}

        {fields.type === "file" && (
          <input type="file" 
          placeholder={'upload photo'} 
          onChange={onChange} 
          className="h-10 w-full"
          name={fields.label}
           />
        )}

        {fields.type === "checkbox" && (
          <div className="flex gap-4 text-sm">
            {checkFields.map((check) => (
              <div key={check.value} className="flex gap-1">
                <Checkbox
                 className="h-10 w-full"
                  onChange={onChange}
                  value={check.value}
                  name={fields.label}
                  checked={value?.includes(check.value)}
                />
                <label htmlFor={check.value}>{check.name}</label>
              </div>
            ))}
          </div>
        )}

        {fields.type === "radio" && (
          <>
            <div className="flex mr-5">
              {radioSelect.map((select) => (
                <div className="flex mr-6" key={select.value}>
                  <RadioButton
                    className="mr-2 h-10 w-full"
                    inputId={select.value}
                    name={fields.label}
                    onChange={onChange}
                    checked={value === select.value}
                    value={select.value}
                  />
                  <label htmlFor={select.value}>{select.value}</label>
                </div>
              ))}
            </div>
          </>
        )}

        {fields.type === "number" && (
          <InputNumber
          className="h-10 w-full"
            value={value}
            onValueChange={onChange}
            useGrouping={false}
            name={fields.label}
          />
        )}
      </Label>
    </div>
  );
};

export default Input;
