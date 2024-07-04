import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from "primereact/inputtextarea";
import React from "react";
import Label from "./Label";
import { Dropdown } from "primereact/dropdown";

const Beats = [
  "मावली जं.",
  "नाथद्वारा",
  "कांकरोली",
  "कुंवारिया",
  "लावा सरदार गढ",
  "चारभूजा रोड",
  "कुआथल",
  "देवगढ मदारिया",
  "खामली घाट",
  "गौरमघाट",
];

const Input = ({ field, onchangecb, formvalue }) => {
  return (
    <div>
      <Label name={field.name} title={field.title}>
        {field.type === "date" ? (
          <Calendar
            name={field.name}
            type={field.type}
            onChange={onchangecb}
            value={formvalue?.[field.name] ?? ""}
          />
        ) : null}

        {field.type === "text" ? (
          <InputText
            name={field.name}
            type={field.type}
            onChange={onchangecb}
            value={formvalue?.[field.name] ?? ""}
          />
        ) : null}
        {field.type === "textarea" ? (
          <InputTextarea
            name={field.name}
            type={field.type}
            onChange={onchangecb}
            value={formvalue?.[field.name] ?? ""}
          />
        ) : null}
        {field.type === "dropdown" ? 
          <Dropdown
          className="w-100"
            options={Beats}
            // optionLabel="label"
            onChange={onchangecb}
            value={formvalue?.[field.name] ?? ""}
          />:null
        }
      </Label>
    </div>
  );
};

export default Input;
