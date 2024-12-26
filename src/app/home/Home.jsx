import React from 'react';
import ProductCard from '@/components/card/ProductCard';

export default function Home() {

    return (
        <div className="container mx-auto">
            <h1 className="text-center text-4xl font-semibold py-10">Welcome, Mizan!</h1>

            <div className="grid grid-cols-6 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((itm) => (
                    <div key={itm}>
                        <ProductCard />
                    </div>
                ))}
            </div>
        </div>
    )
}
