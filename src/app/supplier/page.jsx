'use client'
import React from 'react'
import SupplyCtx from './context/SupplyCtx'
import SupplierWrapper from './comp/SupplierWrapper';


export default function Supplier() {

    return (
        <SupplyCtx>
            <SupplierWrapper />
        </SupplyCtx>
    )
}
