'use client'
import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { usePathname, useRouter } from 'next/navigation';
import { SvgSearch, SvgShopping, SvgUser } from '@/assets';
import Img from '@/components/img/Img';
import Link from 'next/link';
import "./navbar.css";
import Menus from "./data";

export default function Navbar({ className = "", openDrawer = () => { } }) {

    gsap.registerPlugin(ScrollTrigger);
    const { push } = useRouter();
    const pathName = usePathname();

    useEffect(() => {
        ScrollTrigger.create({
            trigger: '.main-tool-bar',
            start: 'top-80px',
            end: '99999',
            onEnter: () => document.querySelector('.main-tool-bar').classList.add('main-tool-bar--scrolled'),
            onLeaveBack: () => document.querySelector('.main-tool-bar').classList.remove('main-tool-bar--scrolled'),
        });

    }, []);

    return (
        <div className={`${className} main-tool-bar bg-gradient-to-r from-teal-700 via-teal-600 to-teal-700 w-full sticky left-0 top-0 h-20 z-10`}>
            <div className="flex items-center justify-between w-full container mx-auto">
                <div className="cursor-pointer" onClick={() => push('/')}>
                    <Img src={"/default.svg"} className="w-4 h-4" />
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
                    <div className="relative cursor-pointer" onClick={openDrawer}>
                        <SvgShopping className="w-7 h-7" />
                        <div className="absolute rounded-full w-3 h-3 animate-pulse bg-green-600 top-0 right-0" />
                    </div>
                </div>
            </div>
        </div>
    )
}
