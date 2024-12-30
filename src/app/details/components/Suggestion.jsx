import ProductCard from '@/components/card/ProductCard';
import React from 'react';

export default function Suggestion() {
    return (
        <div className="">
            <h2 className="text-2xl py-4 font-thin font-TT">You May also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                {[1, 2, 3, 4, 5, 6].map((p) => (
                    <div key={p}>
                        <ProductCard />
                    </div>
                ))}
            </div>
        </div>
    )
}
