import React from 'react'
// import defImg from "@/assets/imgs/def_elec.png"
import Btn from '../btn/Btn'
// import Img from '../img/Img'
import Image from 'next/image'


export default function BannerCard() {
    return (
        <div className="relative flex justify-center items-center space-x-5 xl:space-x-10 h-full">
            <div className="space-y-4">
                <div className="space-y-2">
                    <h1 className="text-5xl font-thin">The New Standard</h1>
                    <p className="text-sm font-bold uppercase">Under favorable smartwatches</p>
                </div>
                <div>
                    <p className="text-sm">From</p>
                    <p className="text-5xl">749 tk</p>
                </div>
                <div>
                    <Btn className="bg-green_base text-white">Start Buying</Btn>
                </div>
            </div>
            <div className="h-full flex items-center justify-end">
                <Image src='/banner/elec.png' alt='img' width={300} height={300} className="w-[330px] h-[333px]" />
            </div>
            {/* card banner */}
            <div className="absolute bottom-0 left-2 space-x-2">
                <div className="w-4 h-3 bg-green_base rounded-full cursor-pointer" />
                <div className="w-3 h-3 border border-green_base rounded-full" />
                <div className="w-3 h-3 border border-green_base rounded-full" />
            </div>
        </div>
    )
}
