
import React, { createContext, useContext, useEffect, useState } from 'react'
import fkData from "@/data/supplier";
import { useSearchParams } from 'next/navigation';

const Ctx = createContext();

export default function SupplyCtx({ children }) {
    const searchParams = useSearchParams()
    const id = searchParams.get('id')

    const [listSupply, setListSupply] = useState([]);
    const [openFrm, setOpenFrm] = useState(false);

    useEffect(() => {
        setListSupply(fkData);
        if (id) setOpenFrm(true);
    }, []);

    return (
        <Ctx.Provider value={{ listSupply, setListSupply, openFrm, setOpenFrm }}>
            {children}
        </Ctx.Provider>
    )
}

export const useSupplyCtx = () => useContext(Ctx);