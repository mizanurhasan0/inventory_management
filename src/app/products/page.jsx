'use client';
import React from 'react'
import ProudctCtx from './ctx/ProductCtx'
import ProductWrapper from './ProductWrapper';

export default function page() {
    return (
        <ProudctCtx>
            <ProductWrapper />
        </ProudctCtx>
    )
}
