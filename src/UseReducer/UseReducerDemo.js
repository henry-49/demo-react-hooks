import React, { useReducer } from 'react';

const UseReducerDemo = () => {

    // reducer function
    const reducer = (state, action) => {
        // reducer boilerplate
        switch(action.type){
            case "INCREMENT":
                return {
                        count: state.count + 1,
                        showText: state.showText
                    }
            case "toggleShowText":
                    return {
                            count: state.count,
                            showText: !state.showText
                            }
            default:
                return state;
        }
    }

    // const [counter, setCount] = useState(0);
    // const [showText, setShowText] = useState(true);

    const [state, dispatch] = useReducer(reducer, {
        count:0,
        showText: true
    });

    return (
        <div>
            <h1>{state.count}</h1>
            <button
            onClick={() => { 
                dispatch({type: "INCREMENT"});
                dispatch({type: "toggleShowText"});
             } }
            >Click Here</button> <br />
            {state.showText && <p>This is a text</p>}
        </div>
    )
}

export default UseReducerDemo;