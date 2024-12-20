
import React, { createContext, useContext, useEffect, useState } from 'react';
import fkData from "@/data/expense";
import { useSearchParams } from 'next/navigation';

const Ctx = createContext();

export default function ExpenseCtx({ children }) {
    const searchParams = useSearchParams()
    const id = searchParams.get('id')

    const [listExpense, setListExpense] = useState([]);
    const [openFrm, setOpenFrm] = useState(false);

    useEffect(() => {
        setListExpense(fkData);
        if (id) setOpenFrm(true);
    }, []);

    return (
        <Ctx.Provider value={{ listExpense, setListExpense, openFrm, setOpenFrm }}>
            {children}
        </Ctx.Provider>
    )
}

export const useExpenseCtx = () => useContext(Ctx);