import React from "react";

const Label = ({ field, children }) => {
  return (
    <div className="form-group">
      <label htmlFor={field.name} className="" style={{minWidth: '140px' }}>
        {field.title}
      </label>
      {children}
    </div>
  );
};

export default Label;
