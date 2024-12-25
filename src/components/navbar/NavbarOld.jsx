'use client';
import React from 'react';
import Img from '@/components/img/Img';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { SvgSearch, SvgUser, SvgShopping } from "@/assets";

const Menus = [
    { id: 1, name: "Home", icon: "/icons/dashboard.svg", src: "/" },
    { id: 2, name: "Shop", icon: "/icons/supplier.svg", src: "/shop" },
    { id: 3, name: "Blog", icon: "/icons/order.svg", src: "/blog" },
    { id: 4, name: "About", icon: "/icons/purchase.svg", src: "/about" },
]

export default function Navbar() {
    const navigate = useRouter();
    const pathName = usePathname();
    return (
        <div className="min-h-[5rem] flex fixed w-full z-50">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex space-x-8">
                    <div className="w-20 cursor-pointer" onClick={() => navigate.push('/')}>
                        {/* <Img src={"Logo"} /> */}
                    </div>
                    <div className="flex items-center space-x-4">
                        {Menus.map((m, i) => (
                            <div key={i} className={`${pathName === m.src ? 'border-b border-base3 text-base3' : ''}`}>
                                <Link href={m?.src} className="cursor-pointer">{m.name}</Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <SvgSearch className="stroke-green_base w-7 h-7" />
                    <SvgUser className="stroke-green_base w-7 h-7 cursor-pointer" onClick={() => navigate.push('/profile')} />
                    <div className="relative cursor-pointer" onClick={() => setShowCard(!showCard)}>
                        <SvgShopping className="stroke-green_base w-7 h-7" />
                        <div className="absolute rounded-full w-3 h-3 animate-pulse bg-base3 top-0 right-0" />
                    </div>
                </div>
            </div>
        </div>
    )
}
