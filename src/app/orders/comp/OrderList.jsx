import React from 'react'
import Card from './Card';
import { useOrderCtx } from '../context/OrderCtx';

export default function OrderList() {
    const { listOrder } = useOrderCtx();
    return (
        <div className="grid grid-cols-3 xl:grid-cols-4 gap-5">
            {listOrder?.map((d, i) => (
                <div key={i}>
                    <Card data={d} />
                </div>
            ))}
        </div>
    )
}
