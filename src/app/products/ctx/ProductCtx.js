import { createContext, useContext, useEffect, useState } from "react";
import fkProducts from '@/data/products';
import fkSuppier from '@/data/supplier';

const Ctx = createContext();

export default function ProudctCtx({ children }) {
    const [products, setProducts] = useState([]);
    const [supplier, setSupplier] = useState([]);

    useEffect(() => {
        if (fkProducts.length > 0) {
            setSupplier(() => fkSuppier);
            setProducts(() => fkProducts.map((p) => ({ "code": p.code, "image": p.image, "product": p.name, "category": p.category.name, "price": p.price, "stock": p.stock })));
        }
    }, []);
    return (
        <Ctx.Provider value={{ products, setProducts, supplier }} >
            {children}
        </Ctx.Provider>
    )
}

export const useProductCtx = () => useContext(Ctx);