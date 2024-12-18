import JsBarcode from 'jsbarcode';
import React, { useEffect, useRef } from 'react'

export default function Code({ code = "default" }) {
    const codeRef = useRef();
    useEffect(() => {
        JsBarcode(codeRef.current, code);
    }, [code]);
    return (
        <svg ref={codeRef}></svg>
    )
}
