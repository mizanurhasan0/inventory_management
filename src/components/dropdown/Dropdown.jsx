'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import { useRef } from 'react'

export default function Dropdown({ lbl = "select ", placeholder = "Select ..." }) {
    const refMenu = useRef();
    const arrowRef = useRef();

    const [selectOpt, setSelectOpt] = useState();

    const onOpen = () => {
        const check = refMenu.current.className.includes('invisible');
        ["translate-y-3", "visible"].forEach((c) => refMenu.current.classList.toggle(c, check));
        ["translate-y-0", "invisible"].forEach((c) => refMenu.current.classList.toggle(c, !check));
        arrowRef.current.classList.toggle("rotate-180", !check);
    }
    const onSelectOpt = (opt) => {
        setSelectOpt(opt);
        onOpen();
    }
    return (
        <div className="">
            <label className="text-gray_base text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize">{lbl}</label>
            <div className="rounded-md text-cgray">
                <div className="h-11 flex border focus-within:border-cgreen rounded-lg overflow-hidden">
                    <input className="flex-1 px-2 h-full w-full outline-0 leading-6 capitalize cursor-pointer" type="text" name="search" placeholder={placeholder}
                        onClick={onOpen}
                        autoComplete='off'
                        value={selectOpt}
                    />
                    <Image ref={arrowRef} src='./icons/downArrow.svg' alt='upload icon' width={20} height={20} className="mr-2 rotate-180 transition-all" />
                </div>

                <div ref={refMenu} className="absolute invisible translate-y-0 shadow-2xl border transition-all  duration-200 bg-white ">
                    <button
                        type="button"
                        className="capitalize text-left my-1 py-1 text-[0.7rem] w-full px-3 leading-6 font-medium"
                        onClick={() => onSelectOpt("menu 1")}
                    >
                        <p>menu 1</p>
                    </button>
                    <button
                        type="button"
                        className="text-left my-1 py-1 text-[0.7rem] w-full px-3 leading-6 font-medium"
                        onClick={() => onSelectOpt("menu 2")}
                    >
                        <p>menu 2</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
