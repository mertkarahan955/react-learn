// useEffect() : React Hook that tells React DO SOME CODe WHEN (pick one):
//              This component re-renders
//              This component mounts
//              The state of a value 


// useEffect(function, [dependencies])

// 1. useEffect(() => {})                Runs after every re-render
// 2. useEffect(() => {}, [])            Runs only on mount
// 3. useEffect(() => {}, [value])       Runs on mount + when value changes

// Uses: 
// #1 Event Listeners
// #2 DOM manipulation 
// #3 Subscriptions (real time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts


import React, {useState, useEffect} from  'react';

function MyComponent(){

    // const [count, setCount] = useState(0);
    // const [color, setColor] = useState('red');

    // useEffect(() => {
    //     document.title = `You clicked ${count} times`;
    // });

    // function addCount(){
    //     setCount(c => c + 1);
    // }
    
    // function substractCount(){
    //     setCount(c => c - 1);
    // }

    // function changeColor(){
    //     setColor(c => c === 'red' ? 'green' : 'red');
    // }

    // return(<>
    //         <p style = {{color: color}} >Count: {count}</p>
    //         <button onClick={addCount}>Add</button>
    //         <button onClick= {substractCount}>Substract</button> <br />
    //         <button onClick={changeColor}> Change Color</button>
    //         </>

    // );

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log("Component Mounted");

        return() => {
            window.removeEventListener('resize', handleResize);
            console.log("Component Unmounted");
        }
    }, [])

    useEffect(() => {
        document.title = ` ${width} px |${height} p`;
    }, [width, height])
   

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    
    }

    return(<>
        <p>Window Width: {width}px</p>

        <p>Window Height: {height}px</p>
        </>
    )
}


export default MyComponent;
