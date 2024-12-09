import React from 'react'
import Card from './comp/Card'
import Tbl from '@/components/table/Tbl';
import fkData from "../../data/products.json";

export default function Dashbord() {
    const data = fkData;
    const sortData = data.map((item) => ({
        id: item.id,
        product: item.name,
        photo: item.photo,
        description: item.description,
        price: item.price,
        category: item.category.name,
        stock: item.stock,
        sold: item.sold,
        supplier: item.supplier.name,
        createdAt: item.createdAt,
    }));

    return (
        <div className="container mx-auto">
            <h1 className="text-center text-4xl font-semibold py-10">Welcome, Mizan!</h1>
            <div>
                <Card />
            </div>
            <div>
                <h2 className="text-xl py-4 font-semibold">Stock count</h2>
                <div>
                    <Tbl header="stockCount" data={sortData}>
                        {/* {data.map((p) => (
                            <tr key={p.id} className="capitalize">
                                <td className="py-2 border px-2">{p.image}</td>
                                <td className="py-2 border px-2">{p.name}</td>
                                <td className="py-2 border px-2">{p.stock}</td>
                                <td className="py-2 border px-2">{p.sold}</td>
                            </tr>
                        ))} */}
                    </Tbl>
                </div>
            </div>
        </div>
    )
}
