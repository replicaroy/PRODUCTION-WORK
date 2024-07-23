import React from "react";
import {
  PersonDeatails,
  formfieldsarray,
  formfieldsarray2,
  optionsList,
} from "./Formfields";
import Input from "./Input";
console.log(PersonDeatails, formfieldsarray, formfieldsarray2, optionsList);

const Form = () => {
  const HandleChange = (e) => {
    const {name, value} = e.target
    console.log(name, value);
  };

  return (
    <>
      <div className=" grid place-items-center mt-2 p-4 ">
        <h1 className=" text-2xl rounded-lg p-1 px-4 bg-indigo-900 text-white ">पासपोर्ट सत्यापन अनुरोध</h1>
      </div>
      <div className="form-div w-full  m-auto p-2 border rounded-md ">
      <form  className="flex flex-wrap gap-10  justify-center rounded-md ">
        <div className="form-one ">
        {formfieldsarray.map((field) => (
          <Input
            key={field.name}
            field={field}
            name={field.name}
            value={PersonDeatails?.[field.name] ?? ""}
            onChange={HandleChange}
            options={optionsList?.(field) ?? null}
          />
        ))}
        </div>
        <div className="form-one">
        {formfieldsarray2.map((field) => (
          <Input
            key={field.name}
            field={field}
            name={field.name}
            value={PersonDeatails?.[field.name] ?? ""}
            onChange={HandleChange}
          />
        ))}      
          </div> 
      </form>
      </div>      
    </>
  );
};

export default Form;
