import React from "react";

const Label = ({ fields, children }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <label className=" bg-indigo-100 px-4 pt-2 " htmlFor={fields.label} style={{minWidth: '200px'}} >
        {fields.label} <span className="text-red-700">{fields.required ? "*" : null}</span> 
      </label>
      {children}
    </div>
  );
};
export default Label;
