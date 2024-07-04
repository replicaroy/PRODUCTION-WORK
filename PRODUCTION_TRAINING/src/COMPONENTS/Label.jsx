
import React from 'react'

const Label = ({children,name,title}) => {
  return (
      <div>
          <div className="py-2 d-flex align-items-center  ">
              <label className='label_name mx-2' style={{ width: "200px" }} htmlFor={name}>
                  {title}
              </label>
              {children}
          </div>
      </div>
  );
}

export default Label
