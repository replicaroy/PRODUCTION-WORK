import React from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Checkbox } from "primereact/checkbox";
import { RadioButton } from "primereact/radiobutton";
import Label from "./Label";

const Input = ({
  field,
  onChange,
  value,
  options,
  checkfields,
  workPreferences,
}) => {
  return (
    <div>
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
            value={value}
            onChange={onChange}
            name={field.name}
            style={{ width: "300px", marginTop: 10, padding: "5px 0 5px 10px" }}
          />
        ): null}
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
            style={{ width: "300px", marginTop: 10, padding: "5px 0 5px 10px" }}
            optionLabel="name"
            optionValue="name"
            options={options}
            name={field.name}
            onChange={onChange}
            value={value}
          />
        ) : null}
        {field.type === "date"? (
          <Calendar
            style={{ width: "300px", marginTop: 10, padding: "5px 0 5px 10px" }}
            name={field.name}
            onChange={onChange}
            value={value}
          />
        ): null}
        {field.type === "check" ? (
          <div
            className="w-50"
            style={{
              display: "inline-flex",
              marginTop: 15,
              gap: "10px",
              width: "100%",
            }}
          >
            {checkfields.map((chk) => (
              <label key={chk.value} htmlFor={chk.name} style={{display: 'inline-flex', gap: 10}}>
                {chk.value}
                <Checkbox
                  name={field.name}
                  value={chk.value}
                  onChange={onChange}
                  checked={value.includes(chk.value)}
                />
              </label>
            ))}
          </div>
        ): null}
        {field.type === "radio" ?
          workPreferences.map((wp) => (
            <label
              key={wp.id}
              htmlFor={wp.name}
              style={{ marginTop: 15,display: "inline-flex", marginLeft: 20,  gap: 10 }}
            >
              {wp.value}
              <RadioButton
                inputId={wp.id}
                name={field.name}
                value={wp.value}
                onChange={onChange}
                checked={value === wp.value}
              />
            </label>
          )): null }
      </Label>
    </div>
  );
};

export default Input;

// import React from "react";
// import { InputText } from "primereact/inputtext";
// import { Dropdown } from "primereact/dropdown";
// import { Calendar } from "primereact/calendar";
// import { Checkbox } from "primereact/checkbox";
// import Label from "./Label";
// import { RadioButton } from "primereact/radiobutton";

// const Input = ({
//   field,
//   onChange,
//   value,
//   options,
//   checked,
//   checkfields,
//   handleCheck,
//   workingTime,
//   workPreferences,
//   workPreference,
// }) => {
//   return (
//     <div className="">
//       <Label field={field}>
//         {[
//           "यूआईडी",
//           "प्रथम नाम",
//           "मध्य नाम",
//           "अंतिम नाम",
//           "जन्म - स्थान",
//           "आयु (वर्ष/महीना)",
//           "लंबाई (सेमी)",
//           "जन्म का वर्ष",
//           "आयु सीमा (से - तक)",
//         ].includes(field.name) ? (
//           <InputText
//             value={value?.[field.name]}
//             onChange={onChange}
//             name={field.name}
//             className=""
//             style={{ width: "300px", marginTop: 10, padding: "5px 0 5px 10px" }}
//           />
//         ) : null}
//         {[
//           "गठन",
//           "लिंग",
//           "वर्ण",
//           "बालों का प्रकार",
//           "आँखों के प्रकार",
//           "पहचान चिन्ह",
//           "ज्ञात भाषाएँ",
//         ].includes(field.name) ? (
//           <Dropdown
//             className=""
//             style={{ width: "300px", marginTop: 10, padding: "5px 0 5px 10px" }}
//             optionLabel="name"
//             optionValue="name"
//             options={options}
//             name={field.name}
//             onChange={onChange}
//             value={value?.[field.name]}
//           />
//         ) : null}
//         {field.type === "date" ? (
//           <Calendar
//             className=""
//             style={{ width: "300px", marginTop: 10, padding: "5px 0 5px 10px" }}
//             name={field.name}
//             onChange={onChange}
//             value={value?.[field.name]?? ''}
//           />
//         ) : null}

//         {field.type === "check" ? (
//           <div
//             className="w-50 "
//             style={{ display: "inline-flex",marginTop: 10,  gap: "20px", width: "100%" }}
//           >
//             {checkfields.map((chk) => (
//               <label htmlFor={chk.name}>
//                 {chk.value}
//                 <Checkbox
//                   key={chk.value}
//                   onChange={handleCheck}
//                   name={chk.name}
//                   value={chk.value}
//                   checked={checked.includes(chk.value)}
//                 />
//               </label>
//             ))}
//           </div>
//         ) : null}

//         {field.type === "radio"
//           ? workPreferences.map((wp) => (
//               <label htmlFor={wp.name}
//             style={{ display: "inline-flex", marginLeft: 10, gap: 10 }}

//               >

//                 {wp.value}
//                 <RadioButton
//                   inputId={wp.id}
//                   name={wp.name}
//                   value={wp.value}
//                   onChange={workingTime}
//                   checked={workPreference === wp.value}
//                 />
//               </label>
//             ))
//           : null}
//       </Label>
//     </div>
//   );
// };

// export default Input;
