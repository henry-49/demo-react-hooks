import React, { useCallback, useState } from 'react';
import Child from './Child';

export default function UseCallbackTutorial() {
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState("Yo, pls sub to the channel!");

    // useCallback is use to access a function
    // useMemo is use to access a value
    const returnComment =useCallback((name) => {
        return data + name;
    }, [data]);


    return (
        <div className="App">
            <Child returnComment={returnComment} />
            <button
            onClick={() => {
                setToggle(!toggle);
            }}>
                {" "} Toggle
            </button>
            {toggle && <h1> toggle </h1>}
        </div>
    );
}
