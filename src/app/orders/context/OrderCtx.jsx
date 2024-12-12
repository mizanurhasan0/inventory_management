
import React, { createContext, useContext, useEffect, useState } from 'react'
import fkData from "@/data/order";
import { useSearchParams } from 'next/navigation';

const Ctx = createContext();

export default function OrderCtx({ children }) {
    const searchParams = useSearchParams()
    const id = searchParams.get('id')

    const [listOrder, setListOrder] = useState([]);
    const [openFrm, setOpenFrm] = useState(false);

    useEffect(() => {
        setListOrder(fkData);
        if (id) setOpenFrm(true);
    }, []);

    return (
        <Ctx.Provider value={{ listOrder, setListOrder, openFrm, setOpenFrm }}>
            {children}
        </Ctx.Provider>
    )
}

export const useOrderCtx = () => useContext(Ctx);