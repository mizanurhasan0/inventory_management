import React from 'react';
// import { AddCart, Shopping } from '@/assets';
import Btn from '@/components/btn/Btn';
import Qty from '@/components/quantity/Qty';

export default function ShortDetails() {
    return (
        <div className="space-y-4">
            <div>
                <h1 className="text-3xl capitalize font-TT">Hoodie For Windter</h1>
                <p className="text-xs text-base6 lowercase font-bold">&#10003; Premium</p>
            </div>
            <div className="flex items-center space-x-4">
                <p className="font-semibold text-xl">$44.00</p>
                <p className="line-through text-xs opacity-50">$55.00</p>
            </div>
            <div>
                <p className="pb-2">Size</p>
                <div className="flex space-x-4">
                    <div className="border px-4 py-1 capitalize font-medium text-sm rounded-full">Small</div>
                    <div className="border px-4 py-1 capitalize font-medium text-sm rounded-full">Medium</div>
                    <div className="border px-4 py-1 capitalize font-medium text-sm rounded-full">Large</div>
                </div>
            </div>
            <div>
                <p className="pb-2">Color</p>
                <div className="flex space-x-4">
                    <div className="border p-2 capitalize font-medium text-sm rounded-lg"><div className="bg-base2 h-4 w-4 rounded-full" /></div>
                    <div className="border p-2 capitalize font-medium text-sm rounded-lg"><div className="bg-base3 h-4 w-4 rounded-full" /></div>
                    <div className="border p-2 capitalize font-medium text-sm rounded-lg"><div className="bg-base6 h-4 w-4 rounded-full" /></div>
                </div>
            </div>
            <div>
                <Qty />
            </div>
            <div className="flex space-x-4">
                <Btn>
                    <div className="flex items-center justify-center space-x-2 font-medium">
                        {/* <AddCart className="w-6 h-6 fill-white" /> */}
                        <p>Add to cart</p>
                    </div>
                </Btn>
                <Btn className="bg-transparent border border-base3 text-base6">
                    <div className="flex items-center justify-center space-x-2 font-medium">
                        {/* <Shopping className="w-6 h-6" /> */}
                        <p> Buy Now</p>
                    </div>
                </Btn>
            </div>
        </div>
    )
}
