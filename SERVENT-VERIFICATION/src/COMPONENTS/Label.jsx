import React from 'react';

const Label = ({ name, title, children }) => {
    return (
        <div className="form-group d-flex " style={{color:'blue'}}>
            <label htmlFor={name} style={{width: '150px', marginBottom: '5px'}} >{title}</label>
            {children}
        </div>
    );
};

export default Label;
