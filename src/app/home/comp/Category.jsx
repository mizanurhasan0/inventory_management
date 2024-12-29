'use client';
import React, { useEffect, useRef } from 'react';
import fkCategory from "@/data/category";
import Image from 'next/image';

export default function Category() {
    const containerRef = useRef();
    const leftBtnRef = useRef();
    const rightBtnRef = useRef();

    const scrollLeft = () => {
        containerRef.current.scrollBy({
            left: -400, // Adjust the scroll distance
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        containerRef.current.scrollBy({
            left: 400, // Adjust the scroll distance
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const leftBtn = leftBtnRef.current;
        const rightBtn = rightBtnRef.current;
        const container = containerRef.current;
        const updateBtnVisible = () => {
            const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
            leftBtn.style.display = scrollLeft === 0 ? "none" : "block";

            rightBtn.style.display = scrollLeft + clientWidth >= (scrollWidth - 1) ? "none" : "block";
        };

        container.addEventListener("scroll", updateBtnVisible);
        updateBtnVisible();
        return () => container.removeEventListener("scroll", updateBtnVisible);
    }, []);
    return (
        <div className="relative container mx-auto py-10">
            <div ref={containerRef} className="srollbarWidth-0 relative container mx-auto space-x-12 overflow-auto flex transition-transform transform scroll-smooth">
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
                ref={leftBtnRef}
                onClick={scrollLeft}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
            >
                ❮
            </button>

            {/* )} */}

            {/* Next Button */}
            <button
                ref={rightBtnRef}
                onClick={scrollRight}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
            >
                ❯
            </button>
        </div>
    )
}
