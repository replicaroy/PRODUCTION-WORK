import React from "react";

const Label = ({ fields, children }) => {
  return (
    <div className="flex">
      <label className="  " htmlFor={fields.label} style={{minWidth: '200px'}} >
        {fields.label}
      </label>
      {children}
    </div>
  );
};

export default Label;
