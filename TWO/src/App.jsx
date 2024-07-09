import { useState } from 'react'
import './App.css'
import Form from './COMPONENTS/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='containers' >
        <h4 className=' border-b-8 border-black'>गैर संज्ञेय रिपोर्ट का पंजीकरण</h4>
        <Form/>
      </div>
    </>
  )
}

export default App
