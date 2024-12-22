'use client'
import React, { Suspense } from 'react'
import SupplyCtx from './context/SupplyCtx'
import SupplierWrapper from './comp/SupplierWrapper';


export default function Supplier() {

    return (
        <Suspense fallback={<p>Loading....</p>}>
            <SupplyCtx>
                <SupplierWrapper />
            </SupplyCtx>
        </Suspense>
    )
}
