// A function passed as an argument to setState() usually 
// ex: setYear(arrow function)
// allow for safe updates based on the previous state
// used with multiple state updates and asynchronous functions 
// good practice to use updater functions

import React, {useState} from 'react';

function MyComponent(){

    const [count, setCount] = useState(0);

    const increment = () => {
        // Takes the pending state to calculate NEXT state
        // React puts your updater function in a queue (waiting line)
        // during the next render it will call them in the same order

        
        setCount(c => c + 1);
    }

    const decrement = ()   =>{
        setCount(c => c - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <div className = "counter-container">
                <p className=' count-display'>{count}</p>
                <button className='counter-button' onClick = {decrement}> Decrement</button>
                <button className='counter-button' onClick = {reset}> Reset</button>
                <button className='counter-button' onClick = {increment}> Increment</button>

                
        </div>
    );
}


export default MyComponent;