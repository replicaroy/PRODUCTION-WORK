
import React from 'react'

const Label = ({children,name,title}) => {
  return (
      <div>
          <div className="py-2 d-flex align-items-center flex gap-4 ">
              <label className='' style={{ width: "200px", minWidth: "200px", background: '#E0E6FF', padding:'5px' }} htmlFor={name}>
                  {title}
              </label>
              <div className="inputbox w-100" style={{width: '400px'}}>
                  {children }
                  </div>
            
          </div>
      </div>
  );
}

export default Label
