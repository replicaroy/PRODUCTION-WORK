import React, { useState } from 'react'
import {formVal, formfieldsarray, RecogniseMarks, sex, colourTypes, bodyTypes, hairTypes, eyeTypes, recogniseMarks, languages  } from './Formfields';
import Input from './Input';

const Form = () => {
  const [formData, setFormData] = useState(formVal)
  const [data, setData] = useState([])
  // const formfieldsarray = [
  //   { name: "यूआईडी", type: 'name', title: 'name', optionlabel: 'name' },
  //   { name:'प्रथम नाम', type: 'name', title: 'name', optionlabel: 'name' },
  //   {name:  'मध्य नाम' , type: 'name', title: 'name', optionlabel: 'name' },
  //   {name:  "अंतिम नाम" , type: 'name', title: 'name', optionlabel: 'name' },
  //   {name:  "लिंग", type: 'name', title: 'name', optionlabel: 'name' },
  //   {name: "वर्ण", type: 'name', title: 'name', optionlabel: 'name' },
  //   {name: "जन्म - स्थान", type: 'name', title: 'name', optionlabel: 'name' },
  //   {name: "जन्म तिथि" , type: 'name', title: 'name', optionlabel: 'name' },
  //   {name: "आयु (वर्ष/महीना)", type: 'name', title: 'name', optionlabel: 'name' },
  //   {name: "जन्म का वर्ष", type: 'name', title: 'name', optionlabel: 'name'  },
  //   {name:   "आयु सीमा(से - तक)", type: 'name', title: 'name', optionlabel: 'name' },
  //   {name: "यूआईडी", type: 'name', title: 'name', optionlabel: 'name' },
  //   {name: "लंबाई (सेमी)", type: 'name', title: 'name', optionlabel: 'name' },
  //   {name: "गठन", type: 'name', title: 'name', optionlabel: 'name' },
  //   {name: "बालों का प्रकार", type: 'name', title: 'name', optionlabel: 'name' },
  //   {name: "आँखों के प्रकार", type: 'name', title: 'name', optionlabel: 'name' },
  //   {name: "पहचान चिन्ह", type: 'name', title: 'name', optionlabel: 'name' },
  //   {name: "ज्ञात भाषाएँ", type: 'name', title: 'name', optionlabel: 'name' },
  // ]



  return (
    <> 
    {
      formfieldsarray((field)=>(
    <Input
     field={field}
     name={formfieldsarray.name}

    />   
      ))
    }   
    </>
  )
}

export default Form
