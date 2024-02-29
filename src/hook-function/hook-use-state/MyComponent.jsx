// hook = Special function that allows functional components
          // to use React features without writing class components
          // (useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef, useImperativeHandle, useLayoutEffect, useDebugValue)

// useState = A React hook that allows the creation of a stateful variable 
//           and a setter function to update its value in the Virtual DOM

import React, {useState} from 'react';

function MyComponent(){
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("John Doe");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployedStatus = () => {
        if(age >= 18){
            setIsEmployed(!isEmployed);
        }
    }

    return( <div>
        <p>Name: {name}</p>
        <button onClick = {updateName}> Set Name</button>
        <p>Age: {age}</p>
        <button onClick = {incrementAge}> Increment Age</button>
        <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick = {toggleEmployedStatus}> Toggle Status</button>
    </div> );
}

export default MyComponent;