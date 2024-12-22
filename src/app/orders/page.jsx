'use client'
import React, { Suspense } from 'react'
import OrderWrapper from './comp/OrderWrapper';


export default function Orders() {

    return (
        <Suspense fallback={<p>Waiting download...</p>}>
            <OrderWrapper />
        </Suspense>
    )
}
