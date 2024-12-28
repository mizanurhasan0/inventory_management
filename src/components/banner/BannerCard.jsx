import React, { useEffect, useState } from 'react'
import Btn from '../btn/Btn'
import Image from 'next/image'
import fkData from "./data";

export default function BannerCard() {
    const [banner, setBanner] = useState();
    const [select, setSelect] = useState(0);
    useEffect(() => {
        setBanner(fkData);
    }, []);
    if (!banner) return (<p>Loading....</p>)
    return (
        <div className="flex justify-center items-center space-x-5 xl:space-x-10 h-full">
            <div className="space-y-4">
                <div className="space-y-2">
                    <h1 className="text-5xl font-thin">{banner[select]?.header}</h1>
                    <p className="text-sm font-bold uppercase">
                        {banner[select]?.subheader}
                    </p>
                </div>
                <div>
                    <p className="text-sm">From</p>
                    <p className="text-5xl">749 tk</p>
                </div>
                <div>
                    <Btn className="bg-green_base text-white">Start Buying</Btn>
                </div>
                {/* card banner */}
                <div className=" flex space-x-2 w-full">
                    {banner.map((_, k) => (
                        <div onClick={() => setSelect(k)} key={k} className={`${select === k ? 'w-5  bg-green_base' : 'w-3 border border-green_base'}  h-3 rounded-full cursor-pointer`} />
                    ))}
                    {/* <div className="w-3 h-3 border border-green_base rounded-full" />
                    <div className="w-3 h-3 border border-green_base rounded-full" /> */}
                </div>
            </div>
            <div className="flex items-center justify-end  h-full">

                <Image priority src='/banner/elec.png' width={330} height={333} alt="banner image" className="w-[330px] h-auto" />
            </div>
        </div>
    )
}
