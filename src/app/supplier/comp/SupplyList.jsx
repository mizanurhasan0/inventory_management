import React from 'react'
import Card from './Card';
import { useSupplyCtx } from '../context/SupplyCtx';

export default function SupplyList() {
    const { listSupply } = useSupplyCtx();
    return (
        <div className="grid grid-cols-3 xl:grid-cols-4 gap-5">
            {listSupply?.map((d, i) => (
                <div key={i}>
                    <Card data={d} />
                </div>
            ))}
        </div>
    )
}
