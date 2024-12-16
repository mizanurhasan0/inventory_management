import { createContext, useContext, useEffect, useState } from "react";
import fkProducts from '@/data/products';


const Ctx = createContext();

export default function ProudctCtx({ children }) {
    const [products, setProducts] = useState([]);
    const [curTab, setCurTab] = useState(2);

    const onTab = (idx) => {
        setCurTab(idx);
    };
    useEffect(() => {
        if (fkProducts.length > 0) {
            setProducts(() => fkProducts.map((p) => ({ "code": p.code, "image": p.image, "product": p.name, "category": p.category.name, "price": p.price, "stock": p.stock })));
        }

    }, []);
    return (
        <Ctx.Provider value={{ products, setProducts, curTab, onTab }} >
            {children}
        </Ctx.Provider>
    )
}

export const useProductCtx = () => useContext(Ctx);