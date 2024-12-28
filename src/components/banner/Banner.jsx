import React from 'react'
import "./banner.css";
import BannerCard from './bannerCard';

export default function Banner() {
    return (
        <div className="bg-gradient-to-r from-gray-100 via-emerald-50 to-gray-100 h-[420px]">
            <div className="relative container mx-auto">
                <BannerCard />


            </div>

        </div>
    )
}
