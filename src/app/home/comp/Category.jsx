'use client';
import React, { useRef } from 'react';
import fkCategory from "@/data/category";
import Image from 'next/image';

export default function Category() {
    const containerRef = useRef();
    const isAtStart = containerRef?.current?.scrollLeft === 0;
    const isAtEnd =
        containerRef.current?.scrollLeft + containerRef?.current?.offsetWidth >=
        containerRef?.current?.scrollWidth;
    const scrollLeft = () => {
        containerRef.current.scrollBy({
            left: -200, // Adjust the scroll distance
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        containerRef.current.scrollBy({
            left: 200, // Adjust the scroll distance
            behavior: "smooth",
        });
    };
    // console.log({ isAtEnd, isAtStart })
    return (
        <div className="relative container mx-auto">
            <div ref={containerRef} className="srollbarWidth-0 relative container mx-auto space-x-12 overflow-auto flex">
                {fkCategory.map((cat, i) => (
                    <div key={i} className="p-3 inline-block whitespace-pre">
                        <div className="bg-gradient-to-r from-teal-100 via-teal-50 to-teal-100 w-36 h-36 rounded-full flex items-center justify-center shadow-md border border-green_base group cursor-pointer">
                            <Image src={cat?.image} alt="img" width={100} height={100} className="group-hover:scale-125 transition-transform duration-300" />
                        </div>
                        <div className="text-center space-y-1">
                            <p>{cat?.name}</p>
                            <p className="opacity-60 text-xs">{cat?.products || 0} products</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* {isAtStart && ( */}
            <button
                onClick={scrollLeft}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
            >
                ❮
            </button>

            {/* )} */}

            {/* Next Button */}
            <button
                onClick={scrollRight}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
            >
                ❯
            </button>
        </div>
    )
}
