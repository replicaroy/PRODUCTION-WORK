import React from "react";
import Label from "./Label";
import { RadioButton } from "primereact/radiobutton";
import { Checkbox } from "primereact/checkbox";

const Input = ({ field, onchange, value }) => {
  return (
    <div>
      <Label name={field.name} title={field.title}>
        {field.type === "radio" ? (
          <div>
            {field.gender.map((gen) => (
              <div>
                <RadioButton
                  inputId={gen.value}
                  name={field.name}
                  value={gen.value}
                  onChange={onchange}
                  checked={value?.[field.name] === gen.value}
                />
                <label htmlFor={gen.value} className="ml-2">
                  {gen.title}
                </label>
              </div>
            ))}
          </div>
        ) : null}

        {field.type === "checkbox" ? (
          <div>
            {field.educataion.map((edu) => (
              <div>
                <Checkbox
                  inputId={edu.key}
                  name={field.name}
                  value={edu.value}
                  onChange={onchange}
                  checked={edu?.[field.name]?.some(
                    (item) => item === edu.value
                  )}
                />
                <label htmlFor={edu.key} className="ml-2">
                  {edu.value}
                </label>
              </div>
            ))}
          </div>
        ) : null}
      </Label>
    </div>
  );
};

export default Input;
