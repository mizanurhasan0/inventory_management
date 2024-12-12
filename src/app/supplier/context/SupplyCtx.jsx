
import React, { createContext, useContext, useEffect, useState } from 'react'
import fkData from "@/data/supplier";

const Ctx = createContext();

export default function SupplyCtx({ children }) {
    const [listSupply, setListSupply] = useState([]);
    const [openFrm, setOpenFrm] = useState(false);
    useEffect(() => {
        setListSupply(fkData);
    }, []);

    return (
        <Ctx.Provider value={{ listSupply, setListSupply, openFrm, setOpenFrm }}>
            {children}
        </Ctx.Provider>
    )
}

export const useSupplyCtx = () => useContext(Ctx);