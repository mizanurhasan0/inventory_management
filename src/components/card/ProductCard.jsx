import React from 'react'
import Img from '../img/Img'
import { SvgAddCart } from '@/assets';
import ImgUrl from "@/assets/imgs/eshop.jpg";

export default function ProductCard() {
    return (
        <div className="relative border-r p-2 hover:shadow-2xl  box-border group rounded-t-md cursor-pointer transition-all duration-300">
            <div className="space-y-3">
                <h3 className="text-xs text-gray_base font-medium">Category</h3>
                <h2 className="text-sm font-bold text-green_base">Wireless Audio System</h2>
                <Img src={ImgUrl} alt="product Image" className="h-52 w-full object-cover" />
                <div className="flex justify-between items-end">
                    <div>
                        <p className="line-through text-xs">2000 tk</p>
                        <p className="text-lg font-normal">1000 tk</p>
                    </div>
                    <div className="bg-green_base bg-opacity-50 w-8 h-8 rounded-full flex items-center justify-center ">
                        <SvgAddCart className="fill-white text-xl" />
                    </div>
                </div>
            </div>
            <p className="hidden absolute w-full bg-white left-0 right-0 group-hover:block border-t text-xs font-normal text-gray_base text-center py-2 z-10 rounded-b-md overflow-hidden">Compare</p>
        </div>
    )
}
