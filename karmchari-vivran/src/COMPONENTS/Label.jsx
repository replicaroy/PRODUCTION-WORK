import React from "react";

const Label = ({ field, children }) => {
  return (
    <div className="form-group">
      <label htmlFor={field.name} className="" style={{minWidth: '140px', textAlign:' left', 
      background: '#8fbfd8', marginRight: '40px', padding: '5px 0 5px 10px', fontSize: '14px'  }}>
        {field.title}
      </label>
      {children}
    </div>
  );
};

export default Label;
