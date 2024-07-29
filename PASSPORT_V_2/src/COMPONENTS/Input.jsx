// import React from "react";
// import Label from "./Label";
// import { Dropdown } from "primereact/dropdown";
// import { InputText } from "primereact/inputtext";
// import { Checkbox } from "primereact/checkbox";
// import { RadioButton } from "primereact/radiobutton";
// import { InputTextarea } from "primereact/inputtextarea";
// import { Calendar } from "primereact/calendar";
// import { InputNumber } from "primereact/inputnumber";

// import { FileUpload } from "primereact/fileupload";

// const Input = ({ field, onChange, gender, value, options, tenure }) => {
//   return (
//     <div className=" p-4 w-full " style={{}}>
//       <Label field={field}>
//         {field.type === "text" && (
//           <InputText
//             className="border border-gray-400 w-full h-10 min-w-56 "
//             value={value?.[field.name]}
//             onChange={onChange}
//             name={field.name}
//           />
//         )}
//         {field.type === "dropdown" && (
//           <Dropdown
//             className="border border-gray-400 w-full h-10  flex place-items-center text-center min-w-56"
//             options={options}
//             onChange={onChange}
//             optionLabel="name"
//             optionValue="value"
//             value={value}
//             placeholder={field.placeholder}
//             name={field.name}
//           />
//         )}
//         {field.type === "number" && (
//           <InputNumber
//             className="border border-gray-400 w-full h-10 min-w-56 "
//             onChange={(e) => setValue1(e.value)}
//             value={value}
//           />
//         )}
//         {field.type === "date" && (
//           <Calendar
//             className="border border-gray-400 w-full h-10 my-3 rounded-md min-w-56  "
//             name={field.name}
//             onChange={onChange}
//             value={value}
//           />
//         )}
//         {field.type === "file" && (
//           <input
//             type="file"
//             name={field.name}
//             onChange={onChange}
//             className=" w-full pl-2"
//           />
//         )}

//         {field.type === "radio" && (
//           <div className="w-full flex gap-2">
//             {gender.map((option) => (
//               <div key={option.value} className="flex rounded-md items-center ">
//                 <RadioButton
//                   type="radio"
//                   inputId={option.value}
//                   name={field.name}
//                   value={option.value}
//                   onChange={onChange}
//                   checked={value === option.value}
//                 />
//                 <label htmlFor={option.value} className="ml-2">
//                   {option.name}
//                 </label>
//               </div>
//             ))}
//           </div>
//         )}

//         {field.type === "check" && (
//           <div className="flex gap-5 py-3 justify-left text-sm w-full px-1 md:px-4 rounded  border-gray-400 ">
//             {tenure.map((ten) => (
//               <div className="flex gap-1">
//                 {ten.name}
//                 <Checkbox
//                   name={field.name}
//                   value={ten.value}
//                   onChange={onChange}
//                   checked={value?.includes(ten.value)}
//                 >
                 
//                 </Checkbox>
//               </div>
//             ))}
//           </div>
//         )}
//       </Label>
//     </div>
//   );
// };

// export default Input;

// {
//   /* <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
// placeholder="Select a City" className="w-full md:w-14rem" />

// <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>

// <RadioButton inputId="ingredient1" name="pizza" value="Cheese" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Cheese'} />
//     <label htmlFor="ingredient1" className="ml-2">Cheese</label>

//     <Calendar value={date} onChange={(e) => setDate(e.value)} />

//     <InputTextarea autoResize value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} /> */
// }



import React from "react";
import Label from "./Label";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { RadioButton } from "primereact/radiobutton";
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from "primereact/calendar";
import { InputNumber } from "primereact/inputnumber";

const Input = ({ field, onChange, gender, value, options, tenure }) => {
  return (
    <div className="p-4 w-full">
      <Label field={field}>
        {field.type === "text" && (
          <InputText
            className="border border-gray-400 w-full h-10 min-w-56"
            value={value?.[field.name]}
            onChange={onChange}
            name={field.name}
          />
        )}
        {field.type === "dropdown" && (
          <Dropdown
            className="border border-gray-400 w-full h-10 flex items-center text-center min-w-56"
            options={options}
            onChange={onChange}
            optionLabel="name"
            optionValue="value"
            value={value}
            placeholder={field.placeholder}
            name={field.name}
          />
        )}
        {field.type === "number" && (
          <InputNumber
            className="border border-gray-400 w-full h-10 min-w-56"
            onChange={(e) => onChange({ target: { name: field.name, value: e.value } })}
            value={value}
          />
        )}
        {field.type === "date" && (
          <Calendar
            className="border border-gray-400 w-full h-10 my-3 rounded-md min-w-56"
            name={field.name}
            onChange={onChange}
            value={value}
          />
        )}
          {field.type === "file" && (
          <input
            type="file"
            name={field.name}
            onChange={onChange}
            className=" w-full pl-2"
          />
        )}
        {field.type === "radio" && (
          <div className="w-full flex gap-2">
            {gender.map((option) => (
              <div key={option.value} className="flex rounded-md items-center">
                <input
                  type="radio"
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

{field.type === "check" && (
          <div className="flex gap-5 py-3 justify-left text-sm w-full px-1 md:px-4 rounded  border-gray-400 ">
            {tenure.map((ten) => (
              <div className="flex gap-1">
                {ten.name}
                <Checkbox
                  name={field.name}
                  value={ten.value}
                  onChange={onChange}
                  checked={value?.includes(ten.value)}
                >
                 
                </Checkbox>
              </div>
            ))}
          </div>
        )}       
      </Label>
    </div>
  );
};

export default Input;
