
import React, { createContext, Suspense, useContext, useEffect, useState } from 'react';
import fkData from "@/data/customers";
import { useSearchParams } from 'next/navigation';

const Ctx = createContext();

export default function PeopleCtx({ children }) {
    const searchParams = useSearchParams()
    const id = searchParams.get('id')

    const [listPeople, setListPeople] = useState([]);
    const [openFrm, setOpenFrm] = useState(false);

    useEffect(() => {
        setListPeople(fkData);
        if (id) setOpenFrm(true);
    }, []);

    return (
        <Suspense fallback={<p>Loading  details...</p>}>
            <Ctx.Provider value={{ listPeople, setListPeople, openFrm, setOpenFrm }}>
                {children}
            </Ctx.Provider>
        </Suspense>
    )
}

export const usePeopleCtx = () => useContext(Ctx);