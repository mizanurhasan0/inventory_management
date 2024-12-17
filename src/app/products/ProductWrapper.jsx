import React, { useState } from 'react';
import Products from './comp/Products';
import AddProduct from './comp/AddProduct';
import { useProductCtx } from './ctx/ProductCtx';
import Title from '@/components/title/Title';
import Category from './comp/Category';
import { useRouter, useSearchParams } from 'next/navigation';

let tabs = [
    { id: 0, label: "lists", component: <Products /> },
    { id: 1, label: "create", component: <AddProduct /> },
    { id: 2, label: "category", component: <Category /> },
];
let tabs1 = { "lists": <Products />, "create": <AddProduct />, "category": <Category /> }
export default function ProductWrapper() {
    const { onTab, curTab } = useProductCtx();
    const { push } = useRouter();
    const searchParam = useSearchParams();
    const opt = searchParam.get('opt');

    const onTabClick = (lbl) => {
        push(`?opt=${lbl}`);
        // onTab(obj.id);
    }
    return (
        <div className="container mx-auto">
            <Title name="Products" />
            <div className="">
                {/* Tab Navigation */}
                <div className="flex border-b border-gray-300">
                    {Object.keys(tabs1).map((lbl, idx) => (
                        <div
                            key={idx}
                            onClick={() => onTabClick(lbl)}
                            className={`cursor-pointer capitalize px-4 py-2 -mb-px border-b-2 transition-all duration-700 ${lbl === opt
                                ? "text-green_base border-green_base"
                                : "text-gray_base border-transparent"
                                }`}
                        >
                            {lbl}
                        </div>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="mt-4">
                    {tabs1[opt]}
                </div>
            </div>
        </div>
    )
}
