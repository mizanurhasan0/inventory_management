'use client';
import React, { Suspense } from 'react'
import ProudctCtx from './ctx/ProductCtx'
import ProductWrapper from './ProductWrapper';

export default function page() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <ProudctCtx>
                <ProductWrapper />
            </ProudctCtx>
        </Suspense>
    )
}
