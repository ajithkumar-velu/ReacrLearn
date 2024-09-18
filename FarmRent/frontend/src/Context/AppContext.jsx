/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { Machines } from "../assets/Assets";

export const AppContext = createContext()

const AppContextProvider = (props)=>{

    const [farmersInfo, setfarmersInfo] = useState(()=>{
        const temp = localStorage.getItem("farmersInfo")
        return temp ? JSON.parse(temp) : []
    })
    
    const value = {
        Machines,
        farmersInfo,
    }

    return(
        <AppContext.Provider value={value} >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider