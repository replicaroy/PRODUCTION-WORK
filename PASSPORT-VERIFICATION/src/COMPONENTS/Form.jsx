import React, { useState } from "react";
import {
  personDeatails,
  formfieldsarray,
  formfieldsarray2,
  optionsList,
  genderField
} from "./Formfields";
import Input from "./Input";

const Form = () => {
  const [formval, setFormval] = useState(personDeatails);
  const [data, setData] = useState([]);



  
  const HandleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormval((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormval((prev) => ({ ...prev, [name]: value }));
    }
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    setData((prevData) => [...prevData, formval]);
    console.log("Submitted Data:", data);
    setFormval('')
  };

  return (
    <>
      <div className="grid place-items-center mt-2 p-4">
        <h1 className="text-2xl rounded-lg p-1 px-4 bg-indigo-900 text-white">
          पासपोर्ट सत्यापन अनुरोध
        </h1>
      </div>
      <div className="form-div w-full m-auto p-2 border rounded-md">
        <form onSubmit={HandleSubmit} className="">
          <div className="fomfields flex flex-wrap gap-10 justify-center rounded-md ">
          <div className="form-one">
            {formfieldsarray.map((field) => (
              <Input
                key={field.name}
                field={field}
                name={field.name}
                value={formval[field.name] || ''}
                onChange={HandleChange}
                options={optionsList(field)}
                gender={genderField}
              />
            ))}
       </div>
          <div className="form-one">
            {formfieldsarray2.map((field) => (
              <Input
                key={field.name}
                field={field}
                name={field.name}
                value={formval[field.name] || ''}
                onChange={HandleChange}
                options={optionsList(field)}
                gender={genderField}

              />
            ))}
          </div>
          </div>
          <div className="btn-div text-center ">
            <button className="btn px-10 py-2 rounded-lg mt-10  bg-green-600">Submit</button>
          </div>
        </form>
      </div>
        <div>
          {data.map((val, index) => (
            <div key={index}>
              <p>UID: {val["यूआईडी"]}</p>
              <p>Gender: {val["लिंग"]}</p>
              <p>Birth Date: {val['जन्म तिथि'] ? new Date(val['जन्म तिथि']).toLocaleDateString() : ''}</p>
              {val["आवेदक का फोटो"] && (
                <img
                  src={URL.createObjectURL(val["आवेदक का फोटो"])}
                  alt="Uploaded"
                  width="100"
                  height="100"
                />
              )}
            </div>
          ))}
        </div>
    </>
  );
};

export default Form;







// import React, { useState } from "react";
// import {
//   PersonDeatails,
//   formfieldsarray,
//   formfieldsarray2,
//   optionsList,
// } from "./Formfields";
// import Input from "./Input";

// const Form = () => {
//   const [formval, setFormval] = useState(PersonDeatails);
//   const [data, setData] = useState([]);

//   const HandleChange = (e) => {
//     const { name, value } = e.target;
//     setFormval((prev) => ({ ...prev, [name]: value }));
//     // console.log(name, value);
//   };

//   const HandleSubmit = (e) => {
//     e.preventDefault();
//     setData([...data, formval]);
//     console.log("Submitted Data:", data);
//   };

//   return (
//     <>
//       <div className="grid place-items-center mt-2 p-4">
//         <h1 className="text-2xl rounded-lg p-1 px-4 bg-indigo-900 text-white">
//           पासपोर्ट सत्यापन अनुरोध
//         </h1>
//       </div>
//       <div className="form-div w-full m-auto p-2 border rounded-md">
//         <form onSubmit={HandleSubmit} className="flex flex-wrap gap-10 justify-center rounded-md">
//           <div className="form-one">
//             {formfieldsarray.map((field) => (
//               <Input
//                 key={field.name}
//                 field={field}
//                 name={field.name}
//                 value={formval?.[field.name] || ''}
//                 onChange={HandleChange}
//                 options={optionsList?.(field) ?? null}
//               />
//             ))}
//           </div>
//           <div className="form-one">
//             {formfieldsarray2.map((field) => (
//               <Input
//                 key={field.name}
//                 field={field}
//                 name={field.name}
//                 value={formval?.[field.name] || ''}
//                 onChange={HandleChange}
//                 options={optionsList?.(field) ?? null}
//               />
//             ))}
//           </div>
//           <div className="btn-div">
//             <button className="btn">Submit</button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Form;
