import React, {forwardRef, useImperativeHandle, useState} from 'react'

// forwardRef is use to parse ref to function component
const Button = forwardRef((props, ref) => {

    const [toggle, setToggle] = useState(false);

    useImperativeHandle(ref,() =>({
       alterToggle(){
            setToggle(!toggle); 
        }, 
    }));

    return (
        <>
            <button>
                Button From Child
            </button>
            {toggle && <span>Toggle</span>}
        </>
    );
});

export default  Button;