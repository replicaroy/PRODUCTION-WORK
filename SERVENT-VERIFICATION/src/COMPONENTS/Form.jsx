import React, { useState } from 'react';
import Input from './Input';
import { ToastContainer, toast } from 'react-toastify';

const formInputs = {
    name: '',
    email: '',
    password: '',
    date: '', 
    state: '',
    district: '',
    tehsil: '',
    village: '',
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
console.log('formVal', formVal)
    const handleSubmit = (e) => {
        // e.preventDefault();
        if( !formVal.name||!formVal.email||!formVal.password||!formVal.date||!formVal.city){
            toast.error('All fields required')
            return            
        }
        else{
            setData(prev => [...prev, formVal]);
            setFormVal({...formInputs});
            console.log(data);
            toast.success('Submitted successfully')

        }
    };

    const formFields = [
        { name: 'name', type: 'text', title: 'Name *' },
        { name: 'email', type: 'text', title: 'Email *' },
        { name: 'password', type: 'password', title: 'Password *' },
        { name: 'date', type: 'date', title: 'Date *' },
        { name: 'state', type: 'state', optionLabel: "name", title: 'States *' },
        { name: 'city', type: 'district', optionLabel: "name", title: 'District *' },
        { name: 'tehsil', type: 'tehsil', optionLabel: "name", title: 'Tehsil *' },
        { name: 'village', type: 'village', optionLabel: "name", title: 'Village *' },
    ];

    // const cities = [
    //     { name: 'Jaipur' },
    //     { name: 'Udaipur' },
    //     { name: 'Ajmer' },
    //     { name: 'Bikaner' },
    //     { name: 'Kota' },
    // ];
    const indianStates = [
        { name: 'Maharashtra',  },
        { name: 'Tamil Nadu', },
        { name: 'Karnataka',  },
        { name: 'Gujarat', },
        { name: 'Rajasthan',  },
        { name: 'Uttar Pradesh',  },
        { name: 'Madhya Pradesh',  },
        { name: 'West Bengal',  },
        { name: 'Bihar',  },
        { name: 'Andhra Pradesh',  }
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
    

      const getOptionList = (field) => {
        // if (field.name === 'district') {
        //     return rajasthanDistricts;
        // } 
        if (field.name === 'tehsil') {
            return tehsil;
        } 
        if (field.name === 'village') {
            return village;
        } 
        if (field.name === 'city') {
            return cities;
        }   
        if (field.name === 'state') {
            return indianStates;
        }   
        else{
            return [];
        }  
    };
  

    return (
        <>
            <div className='data-pass-field d-flex flex-column border rounded '>
                {formFields.map((field) => (
                    <Input 
                        key={field.name}
                        field={field}
                        onChange={handleChange}
                        value={formVal}
                        options={getOptionList(field)}

                    />
                ))}
                <button className="btn text-white bg-success w-50 m-auto my-4 "  onClick={handleSubmit}>
                    Submit
                </button>
            </div>

            <div className="showData">
                <div className=' item-box w-100 border  rounded my-4 '>
                    {data.map((item, i) => (
                     <div key={i} className="items w-100 d-flex gap-5">
                     <div className="name"><b>Name:  &nbsp; &nbsp; </b>{item.name}</div>
                     <div className="email"><b>Email:  &nbsp; &nbsp; </b>{item.email}</div>
                     <div className="password"><b>Password:  &nbsp; &nbsp; </b>{item.password}</div>
                     <div className="date"><b>Date:  &nbsp; &nbsp; </b>{item.date ? new Date(item.date).toLocaleDateString() : ""}</div>
                     <div className="city"><b>City:  &nbsp; &nbsp; </b>{item.city?.name}</div>
                     <div className="city"><b>State:  &nbsp; &nbsp; </b>{item.state?.name}</div>
                     <div className="city"><b>Village:  &nbsp; &nbsp; </b>{item.village?.name}</div>
                     <div className="city"><b>Tehsil:  &nbsp; &nbsp; </b>{item.tehsil?.name}</div>
                     {/* <div className="city"><b>City:  &nbsp; &nbsp; </b>{item.state?.name}</div> */}
                 </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Form;
