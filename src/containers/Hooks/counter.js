import React, { useState, useEffect, useContext, useReducer } from 'react';
import { Context } from "../../App";
import exampleReducer from "./reducer";

function Example() {
    const [count, setCount] = useState(0);

    const [list, dispatch] = useReducer(exampleReducer);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    const context = useContext(Context);

    return (
        <div>
            <h1>{context.text}</h1>
            <p>You clicked {count} times</p>
            <button onClick={() => {
                setCount(count + 1);
                dispatch({
                    type: "setExample",
                    data: count
                });
            }}>
                Click me
            </button>

        </div>
    );
}

export default Example;