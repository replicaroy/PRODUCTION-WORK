import React from "react";
import "./Showdata.css";
import moment from "moment";

const Showdata = ({ data, formfieldsarray, formfieldsarray2 }) => {
  const combinedFormfields = [ ...formfieldsarray, ...formfieldsarray2]
  console.log(data);
  return (
    <table className="tables border">
      <thead className="">
        <tr className="" >
          {combinedFormfields.map((heading) => (
            <th>{heading.name}</th>
          ))}    
        </tr>
      </thead>
      <tbody className="bg-dark">
        {data.map((item, index) => (
          <tr
            key={index}
            style={{ background: index % 2 === 0 ? "white" : "#eee" }}>            
            <td>{item.यूआईडी}</td>
            <td>{item["प्रथम नाम"]}</td>
            <td>{item["मध्य नाम"]}</td>
            <td>{item["अंतिम नाम"]}</td>
            <td>{item.लिंग}</td>
            <td>{item.वर्ण}</td>
            <td>{item["जन्म - स्थान"]}</td>
            <td>{moment(item["जन्म तिथि"]).format("DD/MM/YYYY")}</td>
            <td>{item['Known works'].join(", ")}</td>
            <td>{item['work prefrence']}</td>
            <td>{item["आयु (वर्ष/महीना)"]}</td>
            <td>{item["आयु सीमा (से - तक)"]}</td>
            <td>{item["जन्म का वर्ष"]}</td>
            <td>{item["लंबाई (सेमी)"]}</td>
            <td>{item.गठन}</td>
            <td>{item["बालों का प्रकार"]}</td>
            <td>{item["आँखों के प्रकार"]}</td>
            <td>{item["पहचान चिन्ह"]}</td>
            <td>{item["ज्ञात भाषाएँ"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Showdata;

// import React from "react";
// import './Showdata.css'
// import moment from 'moment'

// const Showdata = ({ data }) => {
//   console.log(data)
//   return (
//     <table className="tables border">
//       <thead className="">
//         <tr className="">
//           <th>यूआईडी</th>
//           <th>प्रथम नाम</th>
//           <th>मध्य नाम</th>
//           <th>अंतिम नाम</th>
//           <th>लिंग</th>
//           <th>वर्ण</th>
//           <th>जन्म - स्थान</th>
//           <th>जन्म तिथि</th>
//           <th>Known works</th>
//           <th>work preference</th>
//           <th>आयु (वर्ष/महीना)</th>
//           <th>आयु सीमा (से - तक)</th>
//           <th>जन्म का वर्ष</th>
//           <th>लंबाई (सेमी)</th>
//           <th>गठन</th>
//           <th>बालों का प्रकार</th>
//           <th>आँखों के प्रकार</th>
//           <th>पहचान चिन्ह</th>
//           <th>ज्ञात भाषाएँ</th>
//         </tr>
//       </thead>
//       <tbody className="bg-dark">
//         {data.map((item, index) => (
//           <tr key={index} style={{background: index % 2 === 0 ? "white" : '#eee'}} >
//             <td>{item.यूआईडी}</td>
//             <td>{item["प्रथम नाम"]}</td>
//             <td>{item["मध्य नाम"]}</td>
//             <td>{item["अंतिम नाम"]}</td>
//             <td>{item.लिंग}</td>
//             <td>{item.वर्ण}</td>
//             <td>{item["जन्म - स्थान"]}</td>
//             <td>{moment(item["जन्म तिथि"]).format("DD/MM/YYYY")}</td>
//             <td>{item.checkVal.join(', ')}</td>
//             <td>{item.workPreference}</td>
//             <td>{item["आयु (वर्ष/महीना)"]}</td>
//             <td>{item["आयु सीमा (से - तक)"]}</td>
//             <td>{item["जन्म का वर्ष"]}</td>
//             <td>{item["लंबाई (सेमी)"]}</td>
//             <td>{item.गठन}</td>
//             <td>{item["बालों का प्रकार"]}</td>
//             <td>{item["आँखों के प्रकार"]}</td>
//             <td>{item["पहचान चिन्ह"]}</td>
//             <td>{item["ज्ञात भाषाएँ"]}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default Showdata;
