'use client'
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import fkData from '@/data/order';
import Btn from '@/components/btn/Btn';

export default function OrderDetails() {
    const query = useSearchParams();
    const id = query.get('id');
    const [detail, setDetail] = useState(null);

    useEffect(() => {
        setDetail(fkData.find((ord) => ord.id.toString() === id));
    }, []);

    return (
        <div>
            <table className="w-full">
                <tbody>
                    <tr className="border border-x-0 border-t-0">
                        <td className="py-5 px-2">Sales order id</td>
                        <td className="border inline-block px-2 py-1 rounded-md">{detail?.orderId}</td>
                    </tr>
                    <tr className="border border-x-0 border-t-0">
                        <td className="py-5 px-2">Order status</td>
                        <td className="inline-block px-2 py-1 rounded-md mt-4 capitalize">{detail?.status}</td>
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
        </div>
    )
}
