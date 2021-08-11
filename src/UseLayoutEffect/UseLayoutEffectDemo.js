import React, {useLayoutEffect, useEffect, useRef } from 'react'

const UseLayoutEffectDemo = () => {

    const inputRef = useRef(null);
    // useLayoutEffect is redended before useEffect
    useLayoutEffect(() => {
        // console.log("useLayoutEffect");
        console.log(inputRef.current.value)

    }, []);

    useEffect(() => {
        // console.log("useEffect");
        inputRef.current.value = "Hello";
    }, []);


    return (
        <div className="App">
            <input type="text" value="Mikky" ref={inputRef}
            style={{ width: 400, height: 50}} />
        </div>
    )
}
export default UseLayoutEffectDemo