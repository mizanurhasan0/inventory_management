'use client';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import MenuIcon from "./icons/menu.svg";
import CloseIcon from "./icons/close.svg";
import Menu from "./data";
import Link from 'next/link';

export default function NavbarMbl({ className = '' }) {
    const navRef = useRef(null);
    const closeRef = useRef(null);
    const tl = useRef(null);

    useEffect(() => {
        tl.current = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' }, paused: true })
            .to(navRef.current, { right: 0 })
            .to(navRef.current, { height: '100vh' }, '-=.1')
            .to(navRef.current.querySelectorAll('ul li a'), { opacity: 1, pointerEvents: 'all', stagger: 0.2 }, '-=.8')
            .to(closeRef.current, { opacity: 1, pointerEvents: 'all' }, "-=.8")
            .to(navRef.current.querySelector('h2'), { opacity: 1 }, '-=1');
    }, []);

    const handleOpen = () => {
        if (tl.current.reversed()) {
            tl.current.play();
        } else {
            tl.current.play(0);
        }
    };

    const handleClose = () => {
        tl.current.reverse();
    };

    return (
        <div className={`${className}`}>
            <div className=" main-tool-bar fixed top-0 left-0 right-0 h-20 flex" >
                <div className="flex items-center justify-between container mx-auto">
                    <h1 className="font-semibold uppercase">Shop Icon</h1>
                    <MenuIcon className="w-8 h-8 cursor-pointer" onClick={handleOpen} />
                </div>
            </div>

            <nav ref={navRef} className="navCustomCss absolute w-full bg-black right-[100vw] h-4">
                <div className="absolute mx-auto container left-0 right-0 top-10 flex text-white justify-between">
                    <h1 className="font-semibold uppercase text-2xl">Shop Icon</h1>
                    <CloseIcon onClick={handleClose} className="w-6 h-6 cursor-pointer" />
                </div>
                <ul className="flex flex-col items-center justify-center gap-5 h-screen">
                    {Menu.map((item, k) => (
                        <li key={k}>
                            <Link href={item.src}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
