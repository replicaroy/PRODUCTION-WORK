import React, { useState } from 'react'
import {formVal, RecogniseMarks, sex, colourTypes, bodyTypes, hairTypes, eyeTypes, recogniseMarks, languages  } from './Formfields';
import Input from './Input';

const Form = () => {
  const [formData, setFormData] = useState(formVal)
  const [data, setData] = useState([])

  return (
    <>
    <Input
      // RecogniseMarks= {RecogniseMarks}
      sex={sex}
      colourTypes={colourTypes}
      bodyTypes={bodyTypes}
      hairTypes={hairTypes}
      eyeTypes={eyeTypes}
      recogniseMarks={recogniseMarks}
      languages={languages}   
    />   
    </>
  )
}

export default Form
