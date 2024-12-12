'use client'
import React from 'react'
import OrderCtx from './context/OrderCtx'
import OrderWrapper from './comp/OrderWrapper';


export default function Orders() {

    return (
        <OrderCtx>
            <OrderWrapper />
        </OrderCtx>
    )
}
