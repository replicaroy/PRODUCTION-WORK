import React from 'react'
import './Form.css' 

import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';


const Form = () => {

const Beat = ['मावली जं.', 'नाथद्वारा','कांकरोली','कुंवारिया','लावा सरदार गढ','चारभूजा रोड','कुआथल','देवगढ मदारिया','खामली घाट','गौरमघाट']


  return (
    <>
    <div className='main border rounded' >
      <div className="form-container ">
      <div className="form-data">
      <div className="form-values">
      <label htmlFor="" >अपराध की घटना की तिथि / समय <span>*</span></label>
      <Calendar className='inputs' />
      </div>
      <div className="form-values">
      <label htmlFor=""> सूचना प्राप्त करने की तिथि / समय <span>*</span></label>
      <Calendar className='inputs' />
      </div>
      <div className="form-values">
      <label htmlFor=""> एनसीआर दर्ज की है जो अधिकारी का नाम</label>
      <InputText className='inputs' />
      </div>
      <div className="form-values">
      <label htmlFor="">एनसीआर का संक्षिप्त विवरण <span>*</span></label>
      {/* <InputText  /> */}
      </div>
      <div className="form-values">
      <InputTextarea className='inputs textarea' rows={5} cols={60} />
      </div>
      </div>

      <div className="form-data">
      <div className="form-values">
      <label htmlFor="">डी / एसडी / डीडी संख्या <span>*</span></label>
      <InputText className='inputs' />

      </div>
      <div className="form-values">
      <label htmlFor=""> बीट सं.</label>
      <Dropdown   options={Beat}  placeholder='Select Beat'
    className='inputs beat'/>
      </div>
      <div className="form-values">
      <label htmlFor=""> 	रैंक और अधिकारी की संख्या जो एनसीआर दर्ज किया था</label>
      <InputText className='inputs' />
      </div>   
  
      </div>    
      
      </div>
      <div className="btn-div">
        <button className="btn">रिक्त करें</button>
      </div>
    </div>
    </>
  )
}

export default Form
