
import React, { createContext, useContext, useEffect, useState } from 'react'
import fkData from "@/data/order";
import { useSearchParams } from 'next/navigation';

const Ctx = createContext();

export default function OrderCtx({ children }) {
    const orderStatus = { "new": "bg-[#3366ff]", "pending": "bg-[#f9f50d]", "shipped": "bg-[#33fdff]", "deliver": "bg-[#33ff4b]", "cancelled": "bg-[#FF0000]" };
    const searchParams = useSearchParams()
    const id = searchParams.get('id')

    const [listOrder, setListOrder] = useState([]);
    const [openFrm, setOpenFrm] = useState(false);

    useEffect(() => {
        setListOrder(fkData);
        if (id) setOpenFrm(true);
    }, []);

    return (
        <Ctx.Provider value={{ listOrder, setListOrder, openFrm, setOpenFrm, orderStatus }}>
            {children}
        </Ctx.Provider>
    )
}

export const useOrderCtx = () => useContext(Ctx);