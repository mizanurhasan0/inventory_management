import React from 'react'
import Btn from '../btn/Btn'
import Image from 'next/image'

export default function BannerCard({ obj }) {

    if (!obj) return (<p>Loading....</p>)
    return (
        <div className="grid grid-cols-2 gap-10 w-full h-full">
            <div className="space-y-4 flex flex-col justify-center items-center">
                <div className="space-y-2">
                    <h1 className="text-5xl font-thin">{obj?.header}</h1>
                    <p className="text-sm font-bold uppercase">
                        {obj?.subheader}
                    </p>
                </div>
                <div className="text-center">
                    <p className="text-sm">From</p>
                    <p className="text-5xl">{obj?.price} tk</p>
                </div>
                <div>
                    <Btn className="bg-green_base text-white">Start Buying</Btn>
                </div>

            </div>
            <div className="relative flex items-center justify-end  h-full ">
                <Image priority src={obj?.image} fill alt="banner image" />
            </div>
        </div>
    )
}
