import React, { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Products from './comp/Products';
import AddProduct from './comp/AddProduct';
import Title from '@/components/title/Title';
import Category from './comp/Category';
import BarcodeGenerate from './comp/barcode/BarcodeGenerate';

let tabs1 = { "lists": <Products />, "create": <AddProduct />, "category": <Category />, "barcode": <BarcodeGenerate /> }
export default function ProductWrapper() {
    const { push } = useRouter();
    const searchParam = useSearchParams();
    const opt = searchParam.get('opt');

    const onTabClick = (lbl) => {
        push(`?opt=${lbl}`);
        // onTab(obj.id);
    }
    return (
        <Suspense fallback={<p>Loading details...</p>}>
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
        </Suspense>
    )
}
