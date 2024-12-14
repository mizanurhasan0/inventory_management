'use client'
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import fkData from '@/data/order';
import Btn from '@/components/btn/Btn';
import { useOrderCtx } from '../context/OrderCtx';
import AddItem from './comp/AddItem';

export default function OrderDetails() {
    const { orderStatus } = useOrderCtx();
    const query = useSearchParams();
    const id = query.get('id');
    const [detail, setDetail] = useState(null);

    useEffect(() => {
        setDetail(() => {
            let dt = fkData.find((ord) => ord.id.toString() === id);
            if (dt) {
                dt.products = dt.products.map((p) => ({ 'id': p?.productId?.id, "product": p?.productId?.name, 'price per item': p?.productId?.price, 'total price': p.price, ...p }));
            }
            return dt || {};
        });
    }, []);
    return (
        <div className="container mx-auto py-5">
            <div className="pb-10">
                <h1 className="capitalize text-2xl font-semibold">
                    {/* {detail?.products.reduce((prev, curr) => prev = prev !== '' ? prev + ',' + curr.productId.name : curr.productId.name, '')} */}
                    {detail?.products.map((item) => item?.product).join(',') || '-'}
                </h1>
            </div>
            <table className="w-full">
                <tbody>
                    <tr className="border border-x-0 border-t-0">
                        <td className="py-5 px-2">Sales order id</td>
                        <td className="border inline-block px-2 py-1 rounded-md mt-3">{detail?.orderId}</td>
                    </tr>
                    <tr className="border border-x-0 border-t-0">
                        <td className="py-5 px-2">Order status</td>
                        <td className="inline-block py-1 rounded-md mt-2 capitalize">
                            <div className={`${orderStatus[detail?.status]} p-2 rounded-md text-gray_deep`}>
                                {detail?.status}
                            </div>
                        </td>
                    </tr>
                    <tr className="border border-x-0 border-t-0">
                        <td className="py-5 px-2">Order date</td>
                        <td className=" inline-block px-2 py-1 rounded-md mt-4">{detail?.createdAt}</td>
                    </tr>
                    <tr className="border border-x-0 border-t-0">
                        <td className="py-5 px-2">Total amount</td>
                        <td className=" inline-block px-2 py-1 rounded-md mt-4">{detail?.totalAmount}</td>
                    </tr>
                    <tr className="border border-x-0 border-t-0">
                        <td className="py-5 px-2">Order count</td>
                        <td className=" inline-block px-2 py-1 rounded-md mt-4">50</td>
                    </tr>
                    <tr className="border border-x-0 border-t-0">
                        <td className="py-5 px-2">Customer</td>
                        <td className=" inline-block px-2 py-1 rounded-md mt-4">{detail?.userId?.email}</td>
                    </tr>
                </tbody>
            </table>
            <div className="flex space-x-2 py-5">
                <Btn className="bg-green_base text-white">Update Status</Btn>
                <Btn>Delete order</Btn>
            </div>
            <div className="py-10">
                <AddItem data={detail?.products} />
            </div>
        </div>
    )
}