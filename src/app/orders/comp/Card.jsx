import Img from '@/components/img/Img'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useOrderCtx } from '../context/OrderCtx';

export default function Card({ data }) {
    const navigate = useRouter();
    const { setOpenFrm } = useOrderCtx();

    const onUpdateModal = () => {
        navigate.push(`/orders?id=${data.id}`);
        setOpenFrm((prev) => !prev);
    }
    return (
        <div className="border shadow-lg p-4 space-y-2 max-w-96 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold capitalize">{data.totalAmount}</h2>
                <button type="button" className="cursor-pointer" onClick={onUpdateModal}>
                    <Img src='/icons/pen.svg' className="w-6 h-6" />
                </button>
            </div>
            <p className="text-sm text-gray_base">{data.userId.email}</p>
            <div className="flex items-center space-x-1 text-gray_base">
                <Img src='/icons/email.svg' className="w-5 h-5" />
                <p className="lowercase truncate">{data?.status}</p>
            </div>
            <p className="flex items-center text-gray_base font-medium space-x-1">
                <Img src='/icons/location.svg' className="w-5 h-5" />
                <span className="lowercase">{data.createdAt}</span>
            </p>
        </div>
    )
}
