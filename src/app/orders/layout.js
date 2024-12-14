'use client'
import OrderCtx from "./context/OrderCtx";

export default function OrderLayout({ children }) {
    return (
        <OrderCtx>
            {children}
        </OrderCtx>
    );
}