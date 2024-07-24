import React from "react";

const Label = ({ field, children }) => {
  return (
    <div className="flex flex-wrap md:flex-nowrap   items-center gap-6 p-2 ">
      <label htmlFor={field.name} className=" w-full md:w-60 bg-indigo-100 py-2  pl-2  " >{field.title}</label>
  
      {children}
   
    </div>
  );
};

export default Label;





// import React from 'react';

// const Label = ({ field, children }) => (
//   <label className="block mb-2 text-sm font-medium text-gray-700">
//     {field.title}
//     {children}
//   </label>
// );

// export default Label;

