import React from 'react'
import Card from './comp/Card'
import Search from '@/components/search/Search'

export default function page() {
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-semibold py-6">Supplier</h1>
            <div>
                <Search />
            </div>
            <div className="grid grid-cols-4 gap-5">
                {[1, 2, 3, 4, 5, 6].map((c, i) => (
                    <div key={i}>
                        <Card />
                    </div>
                ))}
            </div>
        </div>
    )
}
