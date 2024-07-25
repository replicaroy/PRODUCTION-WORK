import React from "react";
import Label from "./Label";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputNumber } from "primereact/inputnumber";
import { RadioButton } from "primereact/radiobutton";

const classObject = {
  container: "w-full mt-4   ",
};

const Input = ({ field, name, value, onChange, options, gender, }) => {
  return (
    <div className={classObject.container}>
      <Label field={field}>
        {field.type === "text" && (
          <InputText
            className="border border-gray-400 rounded-md w-full h-10"
            value={value}
            onChange={onChange}
            name={field.name}
          />
        )}

        {field.type === "date" && (
          <Calendar
            className="border border-gray-400 w-full rounded-md h-10"
            name={field.name}
            onChange={onChange}
            value={value}
          />
        )}

{["वर्ण प्रकार", "संबंध प्रकार"].includes(field.name) && (
  <Dropdown
    placeholder="-----चयन-----"
    className="border border-gray-400 w-full h-10 flex rounded-md items-center text-center"
    optionLabel="name"
    optionValue="value"
    onChange={onChange}
    options={options}
    value={value}
  />
)}

        {field.type === "number" && (
          <InputNumber
            className="border border-gray-400 w-full rounded-md h-10"
            onChange={onChange}
            value={value}
          />
        )}

        {field.type === "file" && (
          <input
            className="w-full h-9 rounded-md text-right mr-4"
            type="file"
            name={field.name}
            onChange={onChange}
            accept="image/*"
          />
        )}
    {field.type === "radio" && (
          <div className="w-full flex gap-2">
            {gender.map((option) => (
              <div key={option.value} 
              className="flex rounded-md items-center">
                <input type= 'radio'                
                  inputId={option.value}
                  name={field.name}
                  value={option.value}
                  onChange={onChange}
                  checked={value === option.value}                  
                />
                <label htmlFor={option.value} className="ml-2">
                  {option.name}
                </label>
              </div>
            ))}
          </div>
        )}
      </Label>
    </div>
  );
};

export default Input;

// import React from "react";
// import Label from "./Label";
// import { InputText } from "primereact/inputtext";
// import { Dropdown } from "primereact/dropdown";
// import { Calendar } from "primereact/calendar";
// import { InputNumber } from "primereact/inputnumber";
// import { FileUpload } from "primereact/fileupload";

// const classObject = {
//   container: 'w-full mt-4',
// };

// const Input = ({ field, name, value, onChange, options }) => {
//   return (
//     <div className={classObject.container}>
//       <Label field={field}>
//         {field.type === "text" && (
//           <InputText
//             className="border border-gray-400 w-full h-10"
//             value={value}
//             onChange={onChange}
//             name={field.name}
//           />
//         )}

//         {field.type === "date" && (
//           <Calendar
//             className="border border-gray-400 w-full rounded-md h-10"
//             name={field.name}
//             onChange={onChange}
//             value={value}
//           />
//         )}

//         {["वर्ण प्रकार", "संबंध प्रकार", "लिंग"].includes(field.name) && (
//           <Dropdown
//               placeholder={field.placeholder}
//               className="border border-gray-400 w-full h-10 flex rounded-md items-center text-center"
//               optionLabel="name"
//               name={field.name}
//               optionValue="name"
//               onChange={onChange}
//               options={options}
//               value={value}
//             />
//         )}

//         {field.type === "number" && (
//           <InputNumber
//             className="border border-gray-400 w-full rounded-md h-10"
//             onChange={onChange}
//             value={value}
//             name={field.name}
//           />
//         )}

//         {field.type === "file" && (
//           <FileUpload
//             className="border-gray-400 w-full h-9 text-right mr-4"
//             mode="basic"
//             name="demo[]"
//             url="/api/upload"
//             accept="image/*"
//             maxFileSize={1000000}
//           />
//         )}
//       </Label>
//     </div>
//   );
// };

// export default Input;
