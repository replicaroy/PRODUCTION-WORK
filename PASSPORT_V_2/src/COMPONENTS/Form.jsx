import React, { useState } from "react";
import Input from "./Input";
import {
  personDeatails,
  genderField,
  formfieldsarray,
  formfieldsarray2,
  optionsList,
} from "./Data";

// const formfields = [...formfieldsarray, ...formfieldsarray2];

const Form = () => {
  const [formvalue, setFormvalue] = useState(personDeatails);
  const [data, setData] = useState([]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, formvalue]);
    console.log(data);
  };

  return (
    <>
      <div className="px-5 sm:px-10 md:px-20 "  >
        <form action="" onSubmit={handleSubmit} className="border" >
          <div className=" grid  lg:grid-cols-2   py-10  w-full "   >
            <div className="form-one w-full ">
            {formfieldsarray.map((field) => (
              <Input
                key={field.name}
                field={field}
                name={field.name}
                value={formvalue[field.name] || ""}
                onChange={handleChange}
                gender={genderField}
                options={optionsList(field)}
              />
            ))}
            </div>

            <div className="form-one w-full ">

            {formfieldsarray2.map((field) => (
              <Input
                key={field.name}
                field={field}
                name={field.name}
                value={formvalue[field.name] || ""}
                onChange={handleChange}
                gender={genderField}
                options={optionsList(field)}
              />
            ))}
            </div>
          </div>
          <div className="button   text-center ">
            <button className="btn py-2 px-10 bg-green-600  hover:bg-green-700 rounded-md   text-white font-semibold ">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
