import React from 'react';
import "./Showdata.css";


const Showdata = ({ data, field}) => {
  return (
    <table className='tbl border w-100 mt-5 text-center'>
      <thead className='border'>
        <tr className=' py-5  ' >
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Date</th>
          <th>Other Details</th>
          <th>State</th>
          <th>District</th>
          <th>Tehsil</th>
          <th>Village</th>
          <th>Gender</th>
          <th>File</th>
        </tr>
      </thead>
      <tbody >
        {data.map((item, index) => (
          <tr key={index} className='trs' style={{background: index%2 ===0 ? 'white': '#eee'}} >
            <td >{item.name}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
            <td>{item.date ? new Date(item.date).toLocaleDateString() : ''}</td>
            <td>{item['other details']}</td>
            <td>{item.state?.name}</td>
            <td>{item.city?.name}</td>
            <td>{item.tehsil?.name}</td>
            <td>{item.village?.name}</td>
            <td>{item.gender}</td>
            <td>{item.upload}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Showdata;
