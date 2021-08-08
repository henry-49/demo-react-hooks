import React, {useState} from 'react'

const UseStateDemo = () => {

    const[counter, setCounter] = useState(0);
    const[inputValue, setInputValue] = useState("Henry");
    
   
    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    let onChange = (event) => {
        // get th input value
        const newValue = event.target.value;
       setInputValue(newValue);

    }

    return <div>
        {counter} 
        <button onClick={incrementCounter}>Increment</button> <br></br>
        <input type="text" placeholder="enter something..." onChange={onChange} />
        { inputValue }
        </div>
    
};


export default UseStateDemo;