import React, { useRef } from 'react';

const UseRefDemo = () => {

    // useRef for manupulating the dom
    const inputRef = useRef(null);


    const onClick = () => {
        // console.log(inputRef.current.value);
        // inputRef.current.focus();
        inputRef.current.value = "";
    }


    return (
        <div>
            <h1>Hello UseRef</h1>
            <input type="text" name="" placeholder="Ex.." ref={inputRef} />
            <button onClick={onClick}>Change Name</button>
        </div>
    )
}


export default  UseRefDemo;