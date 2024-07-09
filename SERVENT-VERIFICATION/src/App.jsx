import { useState } from "react";

import "./App.css";
// import Input from './COMPONENTS/Input'
import Form from "./COMPONENTS/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

    <div className="containers" style={{marginTop: '50px'}}>
      <div className="heading text-center"><h1>FORM</h1></div>
    <Form />
    </div>
     
    </>
  );
}

export default App;
