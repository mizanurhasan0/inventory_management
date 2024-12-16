import React, { useState } from 'react';
import Products from './comp/Products';
import AddProduct from './comp/AddProduct';
import { useProductCtx } from './ctx/ProductCtx';
import Title from '@/components/title/Title';
import Category from './comp/Category';

let tabs = [
    { id: 0, label: "Lists", component: <Products /> },
    { id: 1, label: "Create", component: <AddProduct /> },
    { id: 2, label: "Category", component: <Category /> },
];

export default function ProductWrapper() {
    const { onTab, curTab } = useProductCtx();

    return (
        <div className="container mx-auto">
            <Title name="Products" />
            <div className="">
                {/* Tab Navigation */}
                <div className="flex border-b border-gray-300">
                    {tabs.map((tab, idx) => (
                        <div
                            key={tab.id}
                            onClick={() => onTab(tab.id)}
                            className={`cursor-pointer px-4 py-2 -mb-px border-b-2 transition-all duration-700 ${curTab === idx
                                ? "text-green_base border-green_base"
                                : "text-gray_base border-transparent"
                                }`}
                        >
                            {tab.label}
                        </div>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="mt-4">
                    {tabs[curTab]?.component}
                </div>
            </div>
        </div>
    )
}
