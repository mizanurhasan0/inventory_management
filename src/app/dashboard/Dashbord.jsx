import React from 'react'
import Card from './comp/Card'
import Tbl from '@/components/table/Tbl';
import fkData from "../../data/products.json";

export default function Dashbord() {
    const data = fkData;
    const sortData = data.map((item) => ({
        id: item.id,
        product: item.name,
        image: item.image,
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
                <h2 className="text-xl py-4 mt-10 font-semibold">Stock count</h2>
                <div>
                    <Tbl header="stockCount" data={sortData} />

                </div>
            </div>
        </div>
    )
}
