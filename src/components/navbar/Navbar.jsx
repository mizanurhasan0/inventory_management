'use client'
import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { usePathname, useRouter } from 'next/navigation';
import { SvgSearch, SvgShopping, SvgUser } from '@/assets';
import Img from '@/components/img/Img';
import Link from 'next/link';
import "./navbar.css";

const Menus = [
    { id: 1, name: "Home", icon: "/icons/dashboard.svg", src: "/" },
    { id: 2, name: "Shop", icon: "/icons/supplier.svg", src: "/shop" },
    { id: 3, name: "Blog", icon: "/icons/order.svg", src: "/blog" },
    { id: 4, name: "About", icon: "/icons/purchase.svg", src: "/about" },
]

export default function Navbar() {
    gsap.registerPlugin(ScrollTrigger);
    const { push } = useRouter();
    const pathName = usePathname();

    useEffect(() => {
        gsap.to('.main-tool-bar', {
            scrollTrigger: {
                trigger: '.main-tool-bar',
                start: 'top -80',
                end: '99999',
                toggleClass: {
                    className: 'main-tool-bar--scrolled',
                    targets: '.main-tool-bar'
                },
            },
        });
    }, []);

    return (
        <div className='main-tool-bar'>
            <div className="flex items-center justify-between w-full container mx-auto">
                <div className="cursor-pointer" onClick={() => push('/')}>
                    <Img src={"/default.svg"} />
                </div>
                <div className="flex items-center space-x-4">
                    {Menus.map((m, i) => (
                        <div key={i} className={`${pathName === m.src ? 'border-b border-base3 text-base3' : ''}`}>
                            <Link href={m?.src} className="cursor-pointer">{m.name}</Link>
                        </div>
                    ))}
                </div>
                <div className="flex items-center space-x-2">
                    <SvgSearch className="stroke-green_base w-7 h-7" />
                    <SvgUser className="stroke-green_base w-7 h-7 cursor-pointer" onClick={() => push('/profile')} />
                    <div className="relative cursor-pointer" onClick={() => { }}>
                        <SvgShopping className="stroke-green_base w-7 h-7" />
                        <div className="absolute rounded-full w-3 h-3 animate-pulse bg-base3 top-0 right-0" />
                    </div>
                </div>
            </div>
        </div>
    )
}
