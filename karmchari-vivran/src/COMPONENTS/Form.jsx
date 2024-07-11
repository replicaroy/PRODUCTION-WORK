import React, { useState } from "react";
import { formVal, formfieldsarray, formfieldsarray2, optionsList, recogniseMarks, sex, colourTypes, bodyTypes, hairTypes, eyeTypes, languages } from "./Formfields";
import Input from "./Input";
import Showdata from "./Showdata";

const Form = () => {
  const [formData, setFormData] = useState(formVal);
  const [data, setData] = useState([]);

  const handleChange = (e) => {
  const {name, value} = e.target
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    console.log(data);
    e.preventDefault();
    alert()
    setData([...data, formData]);
    setFormData(formVal);
  };

  return (
    <>
      <div className="container"> 
        <div className="form-one  py-2 mb-2 text-center">
      <h1 className="text-danger">SERVENT-VERIFICATION-FORM</h1>
          <form onSubmit={handleSubmit} className="" style={{padding: '20px 50px', }}>
          <div className="form-control d-flex gap-5 text-center">
            <div className="form-fields w-50">
              {formfieldsarray.map((field) => (
                <Input
                  key={field.name}
                  field={field}
                  name={field.name}
                  title={field.title}
                  onChange={handleChange}
                  value={formData}
                  options={optionsList(field)}
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
                  value={formData}
                  options={optionsList(field)}
                />
              ))}
            </div>
            </div>
            <div className="btn-div text-center" style={{margin: '20px 0 0 0 '}}>   
             <button type="submit" className=" btn m-auto px-5 py-2 text-white " style={{background:'#8883FD'}} >
             Submit
             </button>
            </div>
          </form>
        </div>

        <div className="form-one">
          <Showdata data={data} />
        </div>
      </div>
    </>
  );
};

export default Form;
