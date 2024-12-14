import React from 'react';
import Tbl from '@/components/table/Tbl';
import Search from '@/components/search/Search';

export default function AddItem({ data }) {
    console.log(data);
    return (
        <div>
            <h2 className="text-2xl font-semibold">Sales order items</h2>
            <div className="py-5">
                <Search />
            </div>
            <div>
                <Tbl header='orderItem' data={data} />
            </div>
        </div>
    )
}
