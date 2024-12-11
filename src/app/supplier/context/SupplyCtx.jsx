
import React, { createContext, useContext, useEffect, useState } from 'react'
import fkData from "@/data/supplier";

const Ctx = createContext();

export default function SupplyCtx({ children }) {
    const [listSupply, setListSupply] = useState([]);
    useEffect(() => {
        setListSupply(fkData);
    }, []);

    return (
        <Ctx.Provider value={{ listSupply }}>
            {children}
        </Ctx.Provider>
    )
}

export const useSupplyCtx = () => useContext(Ctx);