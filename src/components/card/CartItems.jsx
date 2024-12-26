import React, { useRef } from 'react';
import defaultImg from '@/assets/imgs/eshop.jpg';
import { Delete } from '@/assets';
import Img from '../img/Img';
import Qty from '../quantity/Qty';

export default function CartItems({ products = [], setCart = () => { } }) {


    const onQtyUpdate = (newQty, id) => {
        setCart((prev) => ({ ...prev, product: prev?.product.map((itm) => itm.productId.id === id ? ({ ...itm, qty: newQty }) : itm) }));
    }
    return (
        <table className="w-full">
            <thead>
                <tr className="text-xs opacity-40 border-b h-8 uppercase">
                    <th className='text-left'>Product</th>
                    <th className='text-right'>Total</th>
                </tr>
            </thead>
            <tbody>
                {products?.map((obj, i) => (
                    <tr key={i}>
                        <td>
                            <div className=" py-3">
                                <div className="flex items-center space-x-4">
                                    <div className="min-w-[3.5rem] h-14">
                                        <Img src={defaultImg} />
                                    </div>
                                    <div className="space-y-2">
                                        <p className="">
                                            {obj.productId.name}
                                        </p>
                                        <p className="opacity-50">{obj.productId.price}</p>

                                    </div>
                                </div>
                                <div className="flex items-center justify-end space-x-4 ">
                                    <Qty item={obj} onUpdate={onQtyUpdate} />
                                    <Delete className="w-6 h-6 cursor-pointer" />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="px-2">
                                {obj.qty * obj.productId.price}
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
