'use client'
import { Suspense } from "react";
import OrderCtx from "./context/OrderCtx";

export default function OrderLayout({ children }) {
    return (
        <Suspense fallback={<p>loading...</p>}>
            <OrderCtx>
                {children}
            </OrderCtx>
        </Suspense>
    );
}