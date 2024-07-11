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
    setData([...data, formData]);
    setFormData(formVal);
  };

  return (
    <>
      <div className="container"> 
        <div className="form-one border rounded py-2">
          <form onSubmit={handleSubmit} className="d-flex gap-5" style={{padding: '50px 120px'}}>
            <div className="form-fields w-50">
              {formfieldsarray.map((field) => (
                <Input
                  key={field.name}
                  field={field}
                  name={field.name}
                  title={field.title}
                  onChange={(e) => handleChange(e, field.name)}
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
                  onChange={(e) => handleChange(e, field.name)}
                  value={formData}
                  options={optionsList(field)}
                />
              ))}
            </div>
          </form>
            <div className="btn-div text-center mt- -5">
              <button type="submit" className=" btn m-auto px-5 py-2 text-white bg-success">Submit</button>
            </div>
        </div>

        <div className="form-one">
          <Showdata data={data} />
        </div>
      </div>
    </>
  );
};

export default Form;
