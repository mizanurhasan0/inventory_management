'use client';

import React, { useRef } from 'react'

export default function Qty({ item, onUpdate = () => { } }) {
    const qtyRef = useRef();

    const onQty = (action) => {
        let currentQty = Number(qtyRef.current.value);
        const newQty = action === '+' ? currentQty + 1 : Math.max(currentQty - 1, 1);
        onUpdate(newQty, item.productId.id);
        qtyRef.current.value = newQty
    }
    return (
        <div className="py-2 px-3 inline-block border-base4 border-opacity-50 border rounded-sm ">
            <div className="flex items-center gap-x-1.5">
                <button type="button" className="size-6 text-2xl flex items-center justify-center font-bold"
                    onClick={() => onQty('-')} >
                    -
                </button>
                <input ref={qtyRef} className="p-0 w-6 outline-none bg-transparent text-center" type="text" defaultValue={item?.qty || 0} />

                <button type="button" className="size-6 text-2xl flex items-center justify-center"
                    onClick={() => onQty('+')}>
                    +
                </button>
            </div>
        </div>
    )
}
