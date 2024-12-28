import React from 'react';
import ProductCard from '@/components/card/ProductCard';
import Banner from '@/components/banner/Banner';
import Category from './comp/Category';

export default function Home() {

    return (
        <div className="py-5">
            <Banner />
            <div>
                <Category />
            </div>
            <div className="container mx-auto">
                <h1 className="text-center text-4xl font-semibold py-10">Welcome, Mizan!</h1>

                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((itm) => (
                        <div key={itm}>
                            <ProductCard />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
