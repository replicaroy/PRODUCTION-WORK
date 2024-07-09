import React from 'react';

const Label = ({ name, title, children }) => {
    return (
        <div className="form-group " style={{color:'blue'}}>
            <label htmlFor={name} style={{width: '200px', marginBottom: '5px'}} >{title}</label>
            {children}
        </div>
    );
};

export default Label;
