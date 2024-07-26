import React, { useState } from "react";
import {
  formVal,
  formfieldsarray,
  formfieldsarray2,
  optionsList,
} from "./Formfields";
import Input from "./Input";
import Showdata from "./Showdata";

const Form = () => {
  const [formData, setFormData] = useState(formVal);
  const [data, setData] = useState([]);
  

  const workPreferences = [
    { id: 1, name: "workp", value: "Day" },
    { id: 2, name: "workp", value: "Night" },
    { id: 3, name: "workp", value: "Day-Night" },
  ];



  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => {
        if (checked) {
          return {
            ...prevData,
            [name]: checked,
          };
        } else {
          return {
            ...prevData,
            [name]: (prevData[name] || []).filter((v) => v !== value),
          };
        }
      });
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formVal.name) {
      alert();
      return;
    } else {
      setData([...data, formData]);
      setFormData(formVal);
      console.log(data);
    }
  };

  return (
    <div className="container">
      <div className="form-one border rounded shadow mb-4 mt-4 text-center">
        <h1 className="mt-2" style={{ color: "indigo" }}>
          SERVENT-VERIFICATION-FORM
        </h1>
        <form onSubmit={handleSubmit} style={{ padding: "20px 30px" }}>
          <div className="form-controls d-flex gap-5 text-center">
            <div className="form-fields w-50">
              {formfieldsarray.map((field) => (
                <Input
                  key={field.name}
                  field={field}
                  name={field.name}
                  title={field.title}
                  onChange={handleChange}
                  value={formData[field.name] || ""}
                  options={optionsList(field)}
                  workPreferences={workPreferences}
                />
              ))}
            </div>
            <div className="form-fields w-50">
              {formfieldsarray2.map((field) => (
                <Input
                  key={field.name}
                  field={field}
                  name={field.name}
                  title={field.title}
                  onChange={handleChange}
                  value={formData[field.name] || ""}
                  options={optionsList(field)}
                  workPreferences={workPreferences}
                />
              ))}
            </div>
          </div>
          <div
            className="btn-div text-center"
            style={{ margin: "20px 0 0 0 " }}
          >
            <button
              type="submit"
              className="btn m-auto px-5 py-2 text-white"
              style={{ background: "#8883FD" }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="form-one">
        <Showdata
          data={data}
          formfieldsarray={formfieldsarray}
          formfieldsarray2={formfieldsarray2}
        />
      </div>
    </div>
  );
};

export default Form;

// import React, { useState } from "react";
// import { formVal, formfieldsarray, formfieldsarray2, optionsList,  } from "./Formfields";
// import Input from "./Input";
// import Showdata from "./Showdata";

// const Form = () => {
//   const [formData, setFormData] = useState(formVal);
//   const [data, setData] = useState([]);
//   const [checkVal, setCheckVal] = useState([]);
//   const [workPreference, setworkPreference] = useState()

//   // radiobutton
//   const workPreferences = [
//     {id: 1, name: "workp",  value: 'Day'},
//     {id: 2, name: "workp",  value: 'Night'},
//     {id: 3 ,name: "workp",  value: 'Day-Night'},
//   ]
//   const workingTime = (e)=> {
//     setworkPreference(e.target.value)
//   }

// // checkbox
//    const checkfields = [
//     {id: 1, name: "works",  value: 'Cooking'},
//     {id: 2, name: "works",  value: 'Cleaning'},
//     {id: 3 ,name: "works",  value: 'Driving'},
//   ]
//   const handleCheck = (e) => {
//     const value = e.target.value;
//     const checked = e.target.checked;

//     if (checked) {
//       setCheckVal([
//         ...checkVal, value
//       ]);
//     } else {
//       setCheckVal(checkVal.filter((checked) => checked !== value));
//     }
//   };

//   // handleform
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   //handlesubmit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if(formVal.name){
//       alert()
//       return;
//     }
//     else{
//       setData([...data, { ...formData, checkVal, workPreference }]);
//       setFormData(formVal);
//       setCheckVal([]);
//       setworkPreference('');
//     }
//   };

//   return (
//     <>
//       <div className="container">
//         <div className="form-one border rounded shadow mb-4 mt-4 text-center">
//           <h1 className="mt-2" style={{ color: 'indigo' }}>SERVENT-VERIFICATION-FORM</h1>
//           <form
//             onSubmit={handleSubmit}
//             className=""
//             style={{ padding: "20px 30px" }}
//           >
//             <div className="form-controls d-flex gap-5 text-center">
//               <div className="form-fields w-50">
//                 {formfieldsarray.map((field) => (
//                   <Input
//                     key={field.name}
//                     field={field}
//                     name={field.name}
//                     title={field.title}
//                     onChange={handleChange}
//                     value={formData}
//                     options={optionsList(field)}
//                     checked={checkVal}
//                     checkfields={checkfields}
//                     handleCheck={handleCheck}
//                     workingTime={workingTime}
//                     workPreferences={workPreferences}
//                     workPreference={workPreference}
//                   />
//                 ))}
//               </div>
//               <div className="form-fields w-50">
//                 {formfieldsarray2.map((field) => (
//                   <Input
//                     key={field.name}
//                     field={field}
//                     name={field.name}
//                     title={field.title}
//                     onChange={handleChange}
//                     value={formData}
//                     options={optionsList(field)}
//                     checked={checkVal}
//                     checkfields={checkfields}
//                     handleCheck={handleCheck}
//                   />
//                 ))}
//               </div>
//             </div>
//             <div className="btn-div text-center" style={{ margin: "20px 0 0 0 " }}>
//               <button
//                 type="submit"
//                 className="btn m-auto px-5 py-2 text-white"
//                 style={{ background: "#8883FD" }}
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>

//         <div className="form-one">
//           <Showdata data={data} formfieldsarray={formfieldsarray} formfieldsarray2={formfieldsarray2} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Form;
