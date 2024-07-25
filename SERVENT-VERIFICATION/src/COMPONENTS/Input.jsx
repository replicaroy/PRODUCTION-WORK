import React from "react";
import "./Input.css";
import Label from "./Label";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { Password } from "primereact/password";
import { RadioButton } from "primereact/radiobutton";
import { InputTextarea } from "primereact/inputtextarea";
import { FileUpload } from "primereact/fileupload";

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
          {["state", "city", "tehsil", "village"].includes(field.name) && (
            <Dropdown
              className="w-100"
              optionLabel="name"
              options={options}
              optionValue="name"
              name={field.name}
              onChange={onChange}
              value={value?.[field.name]}
            />
          )}

          {field.type === "details" && (
            <InputTextarea
              className="w-100"
              name={field.name}
              type={field.type}
              onChange={onChange}
              value={value?.[field.name]}
              rows={3}
              cols={10}
            />
          )}

          {field.name === "gender" && (
            <div style={{ display: "flex", gap: "10px" }}>
              <RadioButton
                inputId="gender1"
                name="gender"
                value="Male"
                onChange={onChange}
                checked={value?.gender === "Male"}
              />
              <label htmlFor="gender1" className="p-radiobutton-label">
                Male
              </label>
              <RadioButton
                inputId="gender2"
                name="gender"
                value="Female"
                onChange={onChange}
                checked={value?.gender === "Female"}
              />
              <label htmlFor="gender2" className="p-radiobutton-label">
                Female
              </label>
              <RadioButton
                inputId="gender3"
                name="gender"
                value="Other"
                onChange={onChange}
                checked={value?.gender === "Other"}
              />
              <label htmlFor="gender3" className="p-radiobutton-label">
                Other
              </label>
            </div>
          )}
          {field.type === "file" && (
            <FileUpload
              mode="basic"
              name="demo[]"
              url="/api/upload"
              accept="image/*"
              maxFileSize={1000000}
              // onUpload={onUpload}
            />
          )}
        </Label>
      </div>
    </div>
  );
};

export default Input;
