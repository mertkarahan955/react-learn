// useRef(): use reference Does not cause re-renders when its calue changes.
//           when you want a component to "remember" some information,
//           but you don't want that information to trigger new renders

//           1. Accesing/Interacting with DOM elements
//           2. Handling Focus, Animations and Transitions
//           3. Managing Timers and Intervals

import React, {useState, useEffect, useRef} from 'react';

function UseRefComponent(){

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    
    useEffect(() => {
        console.log("rendered");
    });


    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
        
    }
    function handleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
    }

    return(<div>
            <button onClick={handleClick1}> Click Me</button>
            <input ref={inputRef1} />
            <button onClick={handleClick2}> Click Me</button>
            <input ref={inputRef2} />
            <button onClick={handleClick3}> Click Me</button>
            <input ref={inputRef3} />
            </div>);

}

export default UseRefComponent;