import React, { useState } from 'react';
import './Form.css';

import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import Input from './Input';

const formObj = {
  incidentDate: null,
  infomDate: null, 
  ncrOfficer: '',
  ncrBrief: '',
  // dsdNo: '',
  // beatNo: '',
  // officerRank: ''
};

const formFields = [
  { name: 'incidentDate', 
    title: `अपराध की घटना की तिथि / समय ${ <span className='star'>*</span>}`,
     type: 'text', 
    type: 'date' },
  { name: 'infomDate',
    title: `सूचना प्राप्त करने की तिथि / समय ${<span className='star'>*</span>}`,
    type: 'text',
  type:'date' },

  { name: 'ncrOfficer',
     title: 'एनसीआर दर्ज की है जो अधिकारी का नाम',
      type: "text" },
  { name: 'ncrBrief',
     title: 'एनसीआर का संक्षिप्त विवरण', 
     optionLabel: 'name', 
     type: "textarea" },
     { name: 'dsdNo',
      title: `डी / एसडी / डीडी संख्या ${<span className='star'>*</span>}`, 
      optionLabel: 'name', 
      type: "text" },
     { name: 'dsdNo',
      title: `बीट सं.`, 
      optionLabel: 'name', 
      type: "dropdown" },
];

const Beats = ['मावली जं.', 'नाथद्वारा','कांकरोली','कुंवारिया','लावा सरदार गढ','चारभूजा रोड','कुआथल','देवगढ मदारिया','खामली घाट','गौरमघाट'];

const Form = () => {
  const [formData, setFormData] = useState(formObj);
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleCalendarChange = (e, name) => {
    setFormData(prevState => ({ ...prevState, [name]: e.value }));
  };

  const handleDropdownChange = (e) => {
    setFormData(prevState => ({ ...prevState, beatNo: e.value }));
  };

  const handleSubmit = () => {
    setData([...data, formData]);
    console.log(data);
    setFormData(formObj); // Reset the form
  };

  return (
    <>
      <div className='main border rounded'>
        <div className="form-container">
          <div className="form-data">
         { formFields.map((field)=> 
         <Input  field={field}                   
          onchangecb={handleChange}
          formvalue={formData} /> )}            
          </div>
        </div>
        <div className="btn-div">
          <button className="btn" onClick={handleSubmit}>जमा करें</button>
        </div>
      </div>
    </>
  );
};

export default Form;
