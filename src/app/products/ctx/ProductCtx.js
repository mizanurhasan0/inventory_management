import { createContext, useContext, useEffect, useState } from "react";
import fkProducts from '@/data/products';
import fkSuppier from '@/data/supplier';
import { useRouter } from "next/navigation";


const Ctx = createContext();

export default function ProudctCtx({ children }) {
    const [products, setProducts] = useState([]);
    const [supplier, setSupplier] = useState([]);
    const [curTab, setCurTab] = useState(2);

    const onTab = (idx) => {
        setCurTab(idx);
    };
    useEffect(() => {
        if (fkProducts.length > 0) {
            setSupplier(() => fkSuppier);
            setProducts(() => fkProducts.map((p) => ({ "code": p.code, "image": p.image, "product": p.name, "category": p.category.name, "price": p.price, "stock": p.stock })));
        }
    }, []);
    return (
        <Ctx.Provider value={{ products, setProducts, curTab, onTab, supplier }} >
            {children}
        </Ctx.Provider>
    )
}

export const useProductCtx = () => useContext(Ctx);