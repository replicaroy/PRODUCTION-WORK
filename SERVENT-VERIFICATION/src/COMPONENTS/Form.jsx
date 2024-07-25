import React, { useState } from 'react';
import Input from './Input';
import { ToastContainer, toast } from 'react-toastify';
import Showdata from './Showdata';

const formInputs = {
    name: '',
    email: '',
    password: '',
    date: '', 
    state: '',
    district: '',
    tehsil: '',
    village: '',
    gender: '',
    'other details': '',
    file : ''
};

const Form = () => {
    const [formVal, setFormVal] = useState(formInputs);
    const [data, setData] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormVal((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formVal.name || !formVal.email || !formVal.password || !formVal.date || !formVal.city || !formVal.gender){
            toast.error('All fields required');
            return;
        } else {
            setData(prev => [...prev, formVal]);
            setFormVal({...formInputs});
            toast.success('Submitted successfully');
            console.log(data);
        }
    };

    const formFields = [
        { name: 'name', type: 'text', title: 'Name *' },
        { name: 'email', type: 'text', title: 'Email *' },
        { name: 'password', type: 'password', title: 'Password *' },
        { name: 'date', type: 'date', title: 'Date *' },   
        { name: 'other details', type: 'details', optionLabel: "name", title: 'Other details *' },
    ];

    const formFields2 = [
        { name: 'state', type: 'dropdown', optionLabel: "name", title: 'States *' },
        { name: 'city', type: 'dropdown', optionLabel: "name", title: 'District *' },
        { name: 'tehsil', type: 'dropdown', optionLabel: "name", title: 'Tehsil *' },
        { name: 'village', type: 'dropdown', optionLabel: "name", title: 'Village *' },
        { name: 'gender', type: 'radio', optionLabel: "name", title: 'Gender *' },
        { name: 'file', type: 'file', optionLabel: "file", title: 'Upload File *' },
    ];

    const indianStates = [
        { name: 'Maharashtra' },
        { name: 'Tamil Nadu' },
        { name: 'Karnataka' },
        { name: 'Gujarat' },
        { name: 'Rajasthan' },
        { name: 'Uttar Pradesh' },
        { name: 'Madhya Pradesh' },
        { name: 'West Bengal' },
        { name: 'Bihar' },
        { name: 'Andhra Pradesh' }
    ];
    const cities = [
        { name: 'Jaipur' },
        { name: 'Udaipur' },
        { name: 'Jodhpur' },
        { name: 'Kota' },
        { name: 'Ajmer' },
        { name: 'Bikaner' },
        { name: 'Alwar' },
        { name: 'Bhilwara' },
        { name: 'Pali' },
        { name: 'Bharatpur' }
    ];
    const tehsil = [
        { name: 'Mandrayal' },
        { name: 'Sapotra' },
        { name: 'Hindaun' },
        { name: 'Nadouti' },
        { name: 'Todabhim' },
        { name: 'Masalpur' },
        { name: 'Karauli' },
        { name: 'Jatwada' },
        { name: 'Suroth' },
        { name: 'Mandrail' }
    ];
    const village = [
        { name: 'Alipur' },
        { name: 'Bharja' },
        { name: 'Dehri' },
        { name: 'Gadarpura' },
        { name: 'Jhareda' },
        { name: 'Kaithwara' },
        { name: 'Khohra' },
        { name: 'Khurd' },
        { name: 'Lakhnauti' },
        { name: 'Pipalkheda' }
    ];   
    const selectGender = [
        {name: 'Male', value: 'Male'},
        {name: 'Female', value: 'Female'},
        {name: 'Other', value: 'Other'}
    ];

    const getOptionList = (field) => {
        switch (field.name) {
            case 'tehsil': return tehsil;
            case 'village': return village;
            case 'city': return cities;
            case 'state': return indianStates;
            case 'gender': return selectGender;
            default: return [];
        }
    };

    return (
        <>
        <div className="main border rounded">
            <div className='data-pass-field d-flex'>
                <div className="formfield">
                    {formFields.map((field) => (
                        <Input 
                            key={field.name}
                            field={field}
                            onChange={handleChange}
                            value={formVal}
                            options={getOptionList(field)}
                        />
                    ))}
                </div>

                <div className="formfield">
                    {formFields2.map((field) => (
                        <Input 
                            key={field.name}
                            field={field}
                            onChange={handleChange}
                            value={formVal}
                            options={getOptionList(field)}
                        />
                    ))}
                </div>
            </div>
            <div className="btn-div text-center">
                <button className="btn text-white bg-success w-50 m-auto my-4" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>

        <div className="showData">
            <Showdata data={data} />
        </div>
        </>
    );
};

export default Form;
