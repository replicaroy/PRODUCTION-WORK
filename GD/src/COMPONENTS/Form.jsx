import React, { useState, useEffect } from "react";
import Input from "./Input";
import { formFields1, formFields2, optionsList, formObj } from "./Data";
const allfields = [...formFields1, ...formFields2];
console.log(allfields);

const Form = () => {
  const [formval, setFormval] = useState(formObj);
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormval((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (const key in formval) {
        if (formval[key] === "") {
          alert(" all fields required");
          return;
        }
      }
    setData([...data, formval]);
    console.log(data);
    setFormval(formObj)
  };

  return (
    <>
      <div className="border rounded-md border-gray-400 grid items-center mt-10 mb-10 w-3/4 m-auto  ">
        <form action="" onSubmit={handleSubmit}>
          <div className="  lg:flex justify-center gap-20 py-5 px-10">
            <div className="form-one">
              {formFields1.map((fields) => (
                <Input
                  key={fields.name}
                  fields={fields}
                  options={optionsList(fields)}
                  onChange={handleChange}
                  value={formval?.[fields.label]}
                />
              ))}
            </div>
            <div className="form-two flex flex-col">
              {formFields2.map((fields) => (
                
                <Input
                  key={fields.name}
                  fields={fields}
                  options={optionsList(fields)}
                  onChange={handleChange}
                  value={formval?.[fields.label]}
                />
              ))}
            </div>
          </div>
          <div className="btn-div text-center">
            <button className="btn bg-green-600 hover:bg-green-700 text-white py-2 px-10 rounded mb-4 ">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="showdata m-auto text-center">
        <table className="w-3/4 border m-auto bg-rose-400 text-white text-sm ">
          <thead>
            <tr key={data.name}>
              {allfields.map((theads, i) => (
                <td className="py-2" >{theads.label}</td>
              ))}
            </tr>
          </thead>
          {data.map((item, i) => (
            <tbody>
              <tr style={{background : i%2 === 0 ? 'white': '#eee'}}>
                {allfields.map((ele, i) => (
                  <td className="py-2 text-black"  >{item[ele.label]}</td>
                ))}
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default Form;
