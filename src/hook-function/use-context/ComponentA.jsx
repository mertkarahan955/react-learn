// useContext: React hook that allows you to share values
//             between multiple levels of components 
//             without passing props through each level


// Provider Component
// 1. import {createContext} from 'react'
// 2. export const MyContext = createContext();
//  3. <MyContext.Provider value ={value}>
//             < Child/>
//         </MyContext.Provider>

// Consumer Component
// 1. import React, {useContext} from './react'
//  import {MyContext} from './ComponentA'
// 2. const value = useContext(MyContext)


import React, {useState, createContext} from 'react';
import ComponentB from "./ComponentB";

export const UserContext = createContext();
function ComponentA(){

    const [user , setUser] = useState("Mert");
    return(
        <div>
            <h1>Component A</h1>
            <h2>Hello {user}</h2>
            <UserContext.Provider value = {user}>
                    <ComponentB user = {user}/>
            </UserContext.Provider>
        </div>
    );
}

export default ComponentA;