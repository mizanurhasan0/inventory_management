
import React, { createContext, Suspense, useContext, useEffect, useState } from 'react';
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
        <Suspense fallback={<p>Loading details...</p>}>
            <Ctx.Provider value={{ listExpense, setListExpense, openFrm, setOpenFrm }}>
                {children}
            </Ctx.Provider>
        </Suspense>
    )
}

export const useExpenseCtx = () => useContext(Ctx);