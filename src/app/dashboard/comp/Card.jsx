import Img from '@/components/img/Img';
import Link from 'next/link';
import React from 'react'

const category = [
    { id: 1, name: "Sales orders", icon: "/icons/orderwhite.svg", src: "/sales", desc: "Manage customer purchases and track sold items." },
    { id: 2, name: "Purchase orders", icon: "/icons/purchasewhite.svg", src: "/purchase", desc: "Request and track item restocks from your suppliers" },
    { id: 3, name: "Sales orders", icon: "/icons/supplierwhite.svg", src: "/supplier", desc: "Keep detailed records of your suppliers" }];


export default function Card() {
    return (
        <div className="flex items-center justify-between gap-4">
            {category.map((c) => (
                <div key={c.id} className="flex flex-col justify-center items-center">
                    <div className="border-2 border-green_base bg-green_mid p-4 rounded-md w-20">
                        <Img src={c.icon} />
                    </div>
                    <h2 className="font-semibold py-2 pt-4">{c.name}</h2>
                    <p className="text-gray_base pb-2 text-center">{c.desc}</p>
                    <Link href={c.src} className="text-green_base">Create order &#8594;</Link>
                </div>
            ))}
        </div>
    )
}
