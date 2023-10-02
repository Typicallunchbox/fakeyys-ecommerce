import React, { createContext, useState, useContext, useEffect } from "react";
import { getDeviceType } from "../utils/device-size";

type DeviceContextProviderProps = {
    children: React.ReactNode
}

type DeviceContext = {
  isMobile: boolean  
}

export const DeviceContext = createContext<DeviceContext | null>(null);
export function DeviceContextProvider({ children } : DeviceContextProviderProps){

    let counter = 0;
    const updateRate = 10;
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
		setIsMobile(getDeviceType());
	}, [])

    window.addEventListener("resize", () => {
        if(counter++ % updateRate === 0){
            setIsMobile(getDeviceType())
        }
    });

    return (
        <DeviceContext.Provider value={{isMobile:isMobile}}>
            {children}
        </DeviceContext.Provider>
    )
}

export function useDeviceContext(){
    const context = useContext(DeviceContext);
    if(!context){
        throw new Error("useDeviceContext must be used within a DeviceContextProvider");
    }
    return context;
}