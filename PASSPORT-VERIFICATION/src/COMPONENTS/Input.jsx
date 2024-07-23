import React from "react";
import Label from "./Label";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputNumber } from "primereact/inputnumber";
import { FileUpload } from 'primereact/fileupload';

const classObject = {
  // button: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
  // card: 'max-w-sm rounded overflow-hidden shadow-lg',
  // container: 'mx-auto px-4',
  // Add more classes as needed
};

const Input = ({ key, field, name, value, onChange, options }) => {
  return (
    <div className={`${classObject}`}>
    {/* //  <div className=" ">  */}
      <Label field={field}  >
        {field.type === "text" ? (
          <InputText
            // style={{ marginTop: 10, padding: "5px 0 5px 10px" }}
            className="border border-gray-400 w-full h-10"
            value={value}
            onChange={onChange}
            name={field.name}
          />
        ) : null}

        {field.type === "date" ? (
          <Calendar
          className="border border-gray-400 w-full rounded-md h-10"
            // style={{ marginTop: 10,  }}
        
            name={field.name}
            onChange={onChange}
            value={value}
          />
        ) : null}
        {["वर्ण प्रकार", "संबंध प्रकार", "लिंग"].includes(field.name) ? (
          <Dropdown
            placeholder="-----चयन-----"
            className="border border-gray-400 w-full h-10 flex items-center text-center" 
            // style={{ marginTop: 10, }}
            optionLabel="name"
            optionValue="name"
            onChange={onChange}
            options={options}
            value={value}
          />
        ) : null}
        {field.type === "number" ? (
          <InputNumber
            className="border border-gray-400 w-full rounded-md h-10 "
            // style={{ marginTop: 10, }}
            optionLabel="name"
            optionValue="name"
            onChange={onChange}
            // options={options}
            value={value}
          />
        ) : null}
        {field.type === "file" ? (
          <FileUpload
          className=" border-gray-400 w-full h-9 text-right mr-4 "
          // style={{ marginTop: 5,}}

            mode="basic"
              name="demo[]"
              url="/api/upload"
              accept="image/*"
              maxFileSize={1000000}
          />
          // <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" maxFileSize={1000000}  />
        ) : null}
      </Label>
    </div>
  );
};

export default Input;
