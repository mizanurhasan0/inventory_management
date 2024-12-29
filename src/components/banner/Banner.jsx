'use client'
import React, { useState } from 'react'
import "./banner.css";
import BannerCard from './BannerCard';
import fkData from "./data";

export default function Banner() {
    const [slides, setSlides] = useState(fkData);
    const [currentIndex, setCurrentIndex] = useState(2);


    return (
        <div className="bg-gradient-to-r from-teal-100 via-teal-50 to-teal-100">
            <div className="container relative w-full mx-auto">
                {/* Carousel Container */}
                <div className=" overflow-hidden relative">
                    <div
                        className="h-[420px] flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {slides.map((obj, i) => (
                            <div
                                key={i}
                                className="relative min-w-full h-[420px] flex items-center justify-center "
                            >
                                <BannerCard obj={obj} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center space-x-2 pb-2">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex
                                ? 'bg-gray-800'
                                : 'bg-gray-400'
                                }`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};