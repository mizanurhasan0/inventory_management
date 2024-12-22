import React, { useState } from 'react';
import Tbl from '@/components/table/Tbl';
import Search from '@/components/search/Search';
import products from '@/data/products';
import Modal from '@/components/modal/Modal';
import UpdateQty from './UpdateQty';

export default function AddItem({ data = [], setData = () => { } }) {
    const [query, setQuery] = useState(null);
    const [upProd, setUpProd] = useState(null);

    const onSearch = (text) => {
        if (text === '') return setQuery(null);
        let prods = products.filter((p) => p.name.toLowerCase().includes(text.toLowerCase()));
        return setQuery(() => prods);
    }
    const onAdd = (obj) => {
        setQuery(null);
        setData((prev) => {
            const exist = prev.products.some((item) => item.id === obj.id);
            if (exist) return prev;
            const newProuct = {
                id: obj.id,
                product: obj.name,
                "price per item": obj.price,
                "total price": obj.price,
                ...obj,
                qty: 1,
            }
            return {
                ...prev,
                totalAmount: prev.totalAmount + obj.price,
                orderCount: prev.orderCount + 1,
                products: [
                    ...prev.products, newProuct
                ]

            }
        });
    }
    const onEdit = (id) => {
        setUpProd(() => data.find((d) => d.id === id));
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
                    <Tbl header='orderItem' data={data} action onEdit={onEdit} />
                </div>
            ) : ''}
            <div>
                {upProd ? (
                    <Modal title="Order Update" onClose={() => setUpProd(null)}>
                        <UpdateQty product={upProd} setData={setData} onClose={() => setUpProd(null)} />
                    </Modal>
                ) : ''}

            </div>
        </div>
    )
}
