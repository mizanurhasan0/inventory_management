import Img from '@/components/img/Img'
import React from 'react'
import { useOrderCtx } from '../context/OrderCtx';
import { useRouter } from 'next/navigation';


export default function Card({ data }) {
    const { push } = useRouter();
    const { orderStatus } = useOrderCtx();

    const redirect = () => push(`/orders/orderdetails?id=${data.id}`);


    const itemCount = data?.products?.reduce((prev, cur) => prev += cur.qty, 0);

    return (
        <div className="border shadow-lg p-4 space-y-4 max-w-96 rounded-lg overflow-hidden capitalize text-gray_base" onClick={redirect}>
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold capitalize text-green_base">Tk - {data.totalAmount}</h2>
            </div>
            <div className="flex items-center space-x-1">
                <Img src='/icons/email.svg' className="w-5 h-5 opacity-60" />
                <p className="text-sm text-gray_base lowercase">{data.userId.email}</p>
            </div>
            <p className={`${orderStatus[data?.status]} bg-opacity-50 text-green_base rounded-md inline-block px-2 shadow-sm border`}>{data?.status}</p>
            <div>
                <p className="">Order Date</p>
                <p>{new Date(data.createdAt).toLocaleString()}</p>
            </div>
            <div>
                <h4>order items</h4>
                <div className="flex items-center justify-between space-x-2">
                    {data?.products?.length > 0 ? (
                        <>
                            <p className="font- border rounded-md inline-block p-1 truncate">{data?.products[0].productId.name}</p>
                            <p className="border p-1 rounded-md font-semibold">+{data.products.length}</p>
                        </>
                    ) : '-'}
                </div>

            </div>
            <p>Items count: {itemCount || 0}</p>
            <p>Sales order id : {data.orderId}</p>

        </div>
    )
}
