import React, { useState } from "react";
import "./Form.css";
import Input from "./Input";

const formObj = {
  incidentDate: "",
  infomDate: "",
  ncrOfficer: "",
  ncrBrief: "",
  dsdNo: "",
  beatNo: "",
  officerRank: "",
};

const formFields1 = [
  {
    name: "incidentDate",
    title: `अपराध की घटना की तिथि / समय `,
    type: "text",
    type: "date",
  },
  {
    name: "infomDate",
    title: `सूचना प्राप्त करने की तिथि / समय `,
    type: "text",
    type: "date",
  },
  {
    name: "ncrOfficer",
    title: "एनसीआर दर्ज की है जो अधिकारी का नाम",
    type: "text",
  },
  {
    name: "ncrBrief",
    title: "एनसीआर का संक्षिप्त विवरण",
    optionLabel: "name",
    type: "textarea",
  },

]

const formFields2 = [

  {
    name: "dsdNo",
    title: `डी / एसडी / डीडी संख्या`,
    optionLabel: "name",
    type: "text",
  },
  { name: "beat", title: `बीट सं.`, optionLabel: "name", type: "dropdown" },
  {
    name: "officerRank",
    title: `रैंक और अधिकारी की संख्या जो एनसीआर दर्ज किया था`,
    optionLabel: "name",
    type: "text",
  },
];

const Beats = [
  {name: "मावली जं."},
  {name: "नाथद्वारा"},
  {name: "कांकरोली"},
  {name: "कुंवारिया"},
  {name: "लावा सरदार गढ"},
  {name: "चारभूजा रोड"},
  {name: "कुआथल"},
  {name: "देवगढ मदारिया"},
  {name: "खामली घाट"},
  {name: "गौरमघाट"},
];

const Form = () => {
  const [formData, setFormData] = useState(formObj);
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e)
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.incidentDate) {
      alert("all field mandatory");
      return;
    } else {
      setData([...data, formData]);
      console.log(data);
      setFormData(formObj);
      alert("submitted");
    }
  };

  const getOptionList = (field) => {
    if(field.name === 'beat'){
      return Beats
    }
  }

  return (
    <>
      <div className="main border rounded">
        <div className="form-container">
          <div className="form-data">
            {formFields1.map((field) => (
              <Input 
                field={field}
                onchangecb={handleChange}
                formvalue={formData}
                options={getOptionList(field)}
              />
            ))}
          </div>

          <div className="form-data">
            {formFields2.map((field) => (
              <Input 
                field={field}
                onchangecb={handleChange}
                formvalue={formData}
                options={getOptionList(field)}
              />
            ))}
          </div>

        </div>
        <div className="btn-div">
          <button className="btn" onClick={handleSubmit}>
            जमा करें
          </button>
        </div>
      </div>

      <div
        className="showData "
        style={{ display: "flex", gap: "20px", padding: "20px" }}
      >
        {data.map((item, index) => {
          return (
            <div className="main border" style={{ display: "flex", gap: "20px", padding: "20px" }} >
              <div key={index} className="data-item ">
                <p>{item.incidentDate ? new Date(item.incidentDate).toLocaleDateString(): ""}
                </p>
                <p>
                  {item.infomDate
                    ? new Date(item.infomDate).toLocaleDateString()
                    : ""}
                </p>
                <p>{item.ncrOfficer}</p>
                <p>{item.ncrBrief}</p>
                <p>{item.dsdNo}</p>
                <p>{item.beatNo?.name}</p>
                <p>{item.officerRank}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Form;
