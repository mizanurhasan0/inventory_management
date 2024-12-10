import React from 'react'
import Card from './comp/Card'
import Search from '@/components/search/Search'
import Btn from '@/components/btn/Btn'
import Title from '@/components/title/TItle'
import FakeData from "@/data/supplier.json"

export default function page() {
    const data = FakeData;
    return (
        <div className="container mx-auto">
            <Title name="suppliers" />
            <div className="flex items-center space-x-4 pb-5">
                <div className="w-full">
                    <Search />
                </div>
                <Btn className="bg-green_base text-white whitespace-nowrap">Add supplier</Btn>
            </div>
            <div className="grid grid-cols-3 xl:grid-cols-4 gap-5">
                {data.map((d, i) => (
                    <div key={i}>
                        <Card data={d} />
                    </div>
                ))}
            </div>
        </div>
    )
}
