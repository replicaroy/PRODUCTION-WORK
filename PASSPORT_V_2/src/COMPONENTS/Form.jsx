// import React, { useState } from "react";
// import Input from "./Input";
// import {
//   personDeatails,
//   genderField,
//   formfieldsarray,
//   formfieldsarray2,
//   optionsList,
//   tenure
// } from "./Data";

// const formfields = [...formfieldsarray, ...formfieldsarray2];

// const Form = () => {
//   const [formvalue, setFormvalue] = useState(personDeatails);
//   const [data, setData] = useState([]);
  
//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormvalue((prev) => ({ ...prev, [name]: value }));
//   // };
  

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === "checkbox") {
//       setFormvalue((prevData) => {
//         if (checked) {
//           return {
//             ...prevData,
//             [name]: checked,
//           };
//         } else {
//           return {
//             ...prevData,
//             [name]: (prevData[name] || []).filter((v) => v !== value),
//           };
//         }
//       });
//     } else {
//       setFormvalue((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setData([...data, formvalue]);
//     console.log(data);
//   };

//   const getData =(field, tbody) => {
//     if(tbody.type === 'dropdown'){
//       return field?.[tbody.name]
//     }
//     else if(tbody.type === 'date'){
//       return `${field?.[tbody.name]}`
//     }
//     else{
//      return field?.[tbody.name]
//     }
//   }

//   return (
//     <>
//       <div className="px-5 sm:px-10 md:px-20 "  >
//         <form action="" onSubmit={handleSubmit} className="border" >
//           <div className=" grid  lg:grid-cols-2   py-10  w-full "   >
//             <div className="form-one w-full ">
//             {formfieldsarray.map((field) => (
//               <Input
//                 key={field.name}
//                 field={field}
//                 name={field.name}
//                 value={formvalue[field.name] || ""}
//                 onChange={handleChange}
//                 gender={genderField}
//                 options={optionsList(field)}
//                 tenure={tenure}
//               />
//             ))}
//             </div>

//             <div className="form-one w-full ">
//             {formfieldsarray2.map((field) => (
//               <Input
//                 key={field.name}
//                 field={field}
//                 name={field.name}
//                 value={formvalue[field.name] || ""}
//                 onChange={handleChange}
//                 gender={genderField}
//                 options={optionsList(field)}
//                 tenure={tenure}

//               />
//             ))}
//             </div>
//           </div>
//           <div className="button text-center ">
//             <button className="btn py-2 px-10 bg-green-600  hover:bg-green-700 rounded-md   text-white font-semibold ">Submit</button>
//           </div>
//         </form>
//       </div>
//       <div className="showdata mt-4  ">
//         <table className="mx-auto" >
//           <thead>
//             <tr>
//             {formfields.map((thead)=> (
//               <th className="text-sm p-1 bg-indigo-900 text-white"  >{thead.name}</th>
//             ))}
//             </tr>
//           </thead>          
//           <tbody>
//          {data.map((field,index)=> (
//           <tr style={{background: `${index%2 ===0 ? '#eee' : 'white'}`}}  >
//            {formfields.map((tbody, i)=> (
//             <td className="py-2 px-2 text-sm">{getData(field,tbody)}</td>
//            ))} 
//           </tr>
//          ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default Form;


import React, { useState } from "react";
import Input from "./Input";
import {
  personDeatails,
  genderField,
  formfieldsarray,
  formfieldsarray2,
  optionsList,
  tenure
} from "./Data";

const formfields = [...formfieldsarray, ...formfieldsarray2];

const Form = () => {
  const [formvalue, setFormvalue] = useState(personDeatails);
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      setFormvalue((prev) => {
        const updatedValues = checked
          ? [...(prev[name] || []), value]
          : (prev[name] || []).filter((v) => v !== value);
        return { ...prev, [name]: updatedValues };
      });
    } else {
      setFormvalue((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, formvalue]);
    console.log(data);
  };

  const getData = (field, tbody) => {
    if (tbody.type === 'dropdown') {
      return field?.[tbody.name];
    } else if (tbody.type === 'date') {
      return `${field?.[tbody.name]}`;
    } else {
      return field?.[tbody.name];
    }
  }

  return (
    <>
      <div className="px-5 sm:px-10 md:px-20">
        <form action="" onSubmit={handleSubmit} className="border">
          <div className="grid lg:grid-cols-2 py-10 w-full">
            <div className="form-one w-full">
              {formfieldsarray.map((field) => (
                <Input
                  key={field.name}
                  field={field}
                  name={field.name}
                  value={formvalue[field.name] || ""}
                  onChange={handleChange}
                  gender={genderField}
                  options={optionsList(field)}
                  tenure={tenure}
                  // checkfields={checkfields}
                />
              ))}
            </div>

            <div className="form-one w-full">
              {formfieldsarray2.map((field) => (
                <Input
                  key={field.name}
                  field={field}
                  name={field.name}
                  value={formvalue[field.name] || ""}
                  onChange={handleChange}
                  gender={genderField}
                  options={optionsList(field)}
                  tenure={tenure}
                  // checkfields={checkfields}
                />
              ))}
            </div>
          </div>
          <div className="button text-center">
            <button className="btn py-2 px-10 bg-green-600 hover:bg-green-700 rounded-md text-white font-semibold">Submit</button>
          </div>
        </form>
      </div>
      <div className="showdata mt-4">
        <table className="mx-auto">
          <thead>
            <tr>
              {formfields.map((thead) => (
                <th key={thead.name} className="text-sm p-1 bg-indigo-900 text-white">{thead.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((field, index) => (
              <tr key={index} style={{ background: `${index % 2 === 0 ? '#eee' : 'white'}` }}>
                {formfields.map((tbody) => (
                  <td key={tbody.name} className="py-2 px-2 text-sm">{getData(field, tbody)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Form;
