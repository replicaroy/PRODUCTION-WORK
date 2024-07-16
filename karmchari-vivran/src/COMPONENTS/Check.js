
























// import React, { useState } from 'react'

// const checkfields = [
//     {id: 1, name: "fruits",  value: 'Apple'},
//     {id: 2, name: "fruits",  value: 'Mango'},
//     {id: 3 ,name: "fruits",  value: 'Banana'},
//     {id: 4, name: "fruits",  value: 'Grapes'},
// ]
// const Check = () => {
//     const [checkVal, setCheckvalue] = useState([])
//     const HandleChecks =(e)=> {
//         const value = e.target.value;
//         const checked = e.target.checked        
//         if(checked){
//             console.log(value, checked)
//             setCheckvalue([
//                 ...checkVal, value
//             ])
//         }
//         else{           
//             setCheckvalue( checkVal.filter((checked)=> checked !== value))
//         }        
//     }
//     const HandleChageClicks =(e)=> {
//         e.preventDefault()      
//         console.log(checkVal);       

//     }
//   return (
//     <div style={{with: '500px', margin: 'auto' , textAlign: 'center' ,}}>
//       <form onSubmit={HandleChageClicks}>
//         <div >
//             {              
//                 checkfields.map((c,i)=> (
//                     <div key={i} >
//                     <label  >{c.value}</label>
//                     <input
//                       type="checkbox"
//                       name={c.name}
//                       value={c.value}
//                       onChange={HandleChecks}
//                     />
//                   </div>
//                 )) 
//                 }           
//         </div>   
//       </form>
//       {checkVal}
//     </div>
//   )
// }

// export default Check

