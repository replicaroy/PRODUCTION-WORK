import React, { useEffect, useState } from "react";
import Label from "./Label";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from "primereact/radiobutton";

const radioSelect = [
  { name: "एक", value: "एक" },
  { name: "विभिन्न", value: "विभिन्न" },
];

const Input = ({ fields, options, onChange, value }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mt-2">
      <Label fields={fields}>
        {fields.type === "date" && (
          <label htmlFor="">
            {fields.label}: {currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}
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
            className="border h-10 w-full"
            options={options}
            optionLabel="name"
            optionValue="value"
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
            {/* {fields.type === "textarea" && (
          <InputTextarea
            className="border w-full min-w-0"
            onChange={onChange}
            value={value}
            name={fields.label} // Ensure the name attribute is set
            rows={6}
            cols={50}
          />
        )} */}

        {fields.type === "radio" && (
          <>
            <div className="flex mr-5">
              {radioSelect.map((select) => (
                <div className="flex mr-6" key={select.value}>
                  <RadioButton
                    className="mr-2"
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
      </Label>
    </div>
  );
};

export default Input;
