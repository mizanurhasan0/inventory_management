import Img from '@/components/img/Img';
import Link from 'next/link';
import React from 'react';

const menu = [
    { id: 1, name: "Dashboard", icon: "/icons/dashboard.svg", src: "/" },
    { id: 2, name: "Suppliers", icon: "/icons/supplier.svg", src: "/supplier" },
    { id: 3, name: "Sales Orders", icon: "/icons/order.svg", src: "/sales" },
    { id: 4, name: "Purchase Orders", icon: "/icons/purchase.svg", src: "/purchase" },
]

export default function Sidebar() {
    return (
        <div className="fixed md:relative
        inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200  bg-green_light border-0 shadow-xl  max-w-64 ease-nav-brand z-990 md:ml-2 rounded-md xl:left-0 -translate-x-full md:translate-x-0">
            <div>
                <div className="flex p-4 justify-between items-center">
                    <Link href={"/"} className="p-2 bg-green_mid rounded-md">
                        <Img src={'/icons/inventory.svg'} className="w-8 h-8" />
                    </Link>
                    <Link href={"/"} className="bg-orange_deep rounded-full overflow-hidden w-10 h-10 flex items-center justify-center">
                        <Img src={'/icons/user.svg'} className="w-6 h-6" />
                    </Link>
                </div>

                <div className='pb-5'>
                    {menu.map((m) => (
                        <Link key={m.id} href={m.src} className="py-2 text-gray_base flex items-center px-4 space-x-2">
                            <Img src={m.icon} className="w-8 h-8" />
                            <p>{m.name}</p>
                        </Link>

                    ))}
                </div>
            </div>
        </div>
    )
}
