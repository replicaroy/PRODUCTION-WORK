import React, { useState } from "react";
import { formVal, formfieldsarray, formfieldsarray2, optionsList, checkfields } from "./Formfields";
import Input from "./Input";
import Showdata from "./Showdata";

const Form = () => {
  const [formData, setFormData] = useState(formVal);
  const [data, setData] = useState([]);
  const [checkVal, setCheckVal] = useState([]);

  const handleCheck = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    
    if (checked) {
      setCheckVal([
        ...checkVal, value
      ]);
    } else {
      setCheckVal(checkVal.filter((checked) => checked !== value));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, { ...formData, checkVal }]);
    setFormData(formVal);
    setCheckVal([]); // Reset checkboxes after submit
  };

  return (
    <>
      <div className="container">
        <div className="form-one border rounded shadow mb-4 mt-4 text-center">
          <h1 className="mt-2" style={{ color: 'indigo' }}>SERVENT-VERIFICATION-FORM</h1>
          <form
            onSubmit={handleSubmit}
            className=""
            style={{ padding: "20px 30px" }}
          >
            <div className="form-controls d-flex gap-5 text-center">
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
                    checked={checkVal}
                    checkfields={checkfields}
                    handleCheck={handleCheck}
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
                    checked={checkVal}
                    checkfields={checkfields}
                    handleCheck={handleCheck}
                  />
                ))}
              </div>
            </div>
            <div className="btn-div text-center" style={{ margin: "20px 0 0 0 " }}>
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
          <Showdata data={data} />
        </div>
      </div>
    </>
  );
};

export default Form;
