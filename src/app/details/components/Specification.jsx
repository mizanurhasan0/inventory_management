'use client';
import React, { useState } from 'react';

const TabMenu = ["Specifications", "Reviews"]
export default function Specification() {
    const [selected, setSelected] = useState(TabMenu[0]);

    return (
        <div className="">
            <div className="relative flex gap-8 font-semibold text-base4 opacity-80">
                <div className="absolute w-full bottom-0 border-b border-base4 border-opacity-20 pb-2 -z-10" />
                {TabMenu.map((d) => (
                    <div key={d} className={`font-TT pb-2 text-left z-10 transition-all duration-500 cursor-pointer border-b-4 border-base3 ${selected === d ? ' text-base3 border-opacity-100 ' : 'border-opacity-0'}`} onClick={() => setSelected(d)}>
                        {d}
                    </div>
                ))}
            </div>
            <div className="container mx-auto py-2 text-sm">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing </p>
            </div>
        </div>
    )
}
