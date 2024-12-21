'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import { useRef } from 'react'
import Img from '../img/Img';

export default function Dropdown({ lbl = "select ", placeholder = "Select ...", name = "", opts = [], defaultValue = {} }) {
    const refMenu = useRef();
    const arrowRef = useRef();
    const selectValRef = useRef();
    const hideRef = useRef();

    const onOpen = () => {
        const check = refMenu.current.className.includes('invisible');
        ["translate-y-3", "visible"].forEach((c) => refMenu.current.classList.toggle(c, check));
        ["translate-y-0", "invisible"].forEach((c) => refMenu.current.classList.toggle(c, !check));
        arrowRef.current.classList.toggle("rotate-180", !check);
    }
    const onSelectOpt = (opt) => {
        selectValRef.current.value = opt.name;
        hideRef.current.value = opt.id;
        // setSelectOpt(opt);
        onOpen();
    }
    return (
        <div className="">
            <label className="text-gray_base text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize">{lbl}</label>
            <div className="rounded-md text-cgray">
                <div className="h-11 flex border focus-within:border-cgreen rounded-lg overflow-hidden">
                    <input ref={selectValRef} className="flex-1 px-2 h-full w-full outline-0 leading-6 capitalize cursor-pointer" type="text" name="option" placeholder={placeholder}
                        onClick={onOpen}
                        autoComplete='off'
                        defaultValue={defaultValue?.option || ''}

                        onChange={() => { }}
                    />
                    <input ref={hideRef} type='input' className="hidden" name={name} defaultValue={defaultValue?.id || ''} />

                    <Img ref={arrowRef} src='./icons/downArrow.svg' alt='upload icon' width={20} height={20} className="mr-2 rotate-180 transition-all" />
                </div>

                <div ref={refMenu} className="absolute invisible translate-y-0 shadow-2xl border transition-all  duration-200 bg-white ">
                    {opts.length > 0 ? opts.map((opt, i) => (
                        <div
                            key={i}
                            className="capitalize text-left my-1 py-1 text-[0.7rem] w-full px-3 leading-6 font-medium"
                            onClick={() => onSelectOpt(opt)}
                        >
                            <p>{opt?.name}</p>
                        </div>

                    )) : ''}
                </div>
            </div>
        </div>
    )
}
