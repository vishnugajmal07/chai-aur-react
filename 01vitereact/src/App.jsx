import { useState } from "react"
import Chai from "./Chai";

function App() {
let [counter, setCounter]=useState(10);

const addNumber =()=>{
  counter++;
  setCounter(counter);
}
const removeNumber =()=>{
  counter--;
  setCounter(counter);
}
  return (
    <>
        <h1>CC with Vishnu</h1>
        <h1>Value {counter}</h1>
        <button onClick={addNumber}>Add </button>
        <button onClick={removeNumber}>Remove</button>

        <Chai/>
    </>
  )
}

export default App
