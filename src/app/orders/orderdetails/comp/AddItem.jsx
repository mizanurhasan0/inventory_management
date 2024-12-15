import React, { useState } from 'react';
import Tbl from '@/components/table/Tbl';
import Search from '@/components/search/Search';
import products from '@/data/products';

export default function AddItem({ data = [], setData = () => { } }) {
    const [query, setQuery] = useState(null);

    const onSearch = (text) => {
        if (text === '') return setQuery(null);
        let prods = products.filter((p) => p.name.toLowerCase().includes(text.toLowerCase()));
        return setQuery(() => prods);
    }
    const onAdd = (obj) => {
        setQuery(() => null);
        setData((prev) => ({
            ...prev,
            totalAmount: prev.totalAmount + obj.price,
            products: [
                ...prev.products,
                { 'id': obj?.id, "product": obj?.name, 'price per item': obj?.price, 'total price': obj.price, ...obj, qty: 1 }
            ]
        }));
    }

    return (
        <div>
            <h2 className="text-2xl font-semibold">Sales order items</h2>
            <div className="py-5 relative">
                <Search onChange={(e) => onSearch(e.target.value)} />
                <div className="absolute bg-gray_light w-full shadow-2xl">
                    {query !== null && query.map((p, i) => (
                        <div key={i} className="flex items-center justify-between space-x-4 border border-green_base p-2 border-x-0 border-t-0 capitalize"
                            onClick={() => onAdd(p)}>
                            <h3>{p.id} -</h3>
                            <h3>{p.name} -</h3>
                            <p>&#2547;-{p.price} -</p>
                            <p>Stock:{p.stock}</p>
                        </div>
                    ))}

                </div>
            </div>
            {data.length > 0 ? (
                <div>
                    <Tbl header='orderItem' data={data} />
                </div>
            ) : ''}

        </div>
    )
}
