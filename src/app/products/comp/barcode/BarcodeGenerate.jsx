import React, { useEffect, useRef, useState } from 'react';
import JsBarcode from 'jsbarcode';
import Search from '@/components/search/Search';
import fkProducts from "@/data/products";
import Input from '@/components/input/Input';
import Input_Label from '@/components/input/Input_Label';
import Img from '@/components/img/Img';
import Btn from '@/components/btn/Btn';
import Code from './Code';
import printJS from 'print-js';

export default function BarcodeGenerate() {
    const products = fkProducts;
    const barcodeRef = useRef();

    const [query, setQuery] = useState(null);
    const [select, setSelect] = useState(null);
    const [count, setCount] = useState(1);

    const onSearch = (text) => {
        if (text === '') return setQuery(null);
        let prods = products.filter((p) => p.name.toLowerCase().includes(text.toLowerCase()));
        return setQuery(() => prods);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        const { count } = Object.fromEntries(fd);
        setCount(count);
    }
    const onPrint = () => {
        printJS({
            printable: "printselect",
            type: "html",
            targetStyles: ["*"],
        });
    }
    return (
        <div>
            <h2>Barcode genereated</h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <div className="py-5 relative">
                        <Search onChange={(e) => onSearch(e.target.value)} />
                        <div className="z-10 absolute bg-gray_light w-full shadow-2xl">
                            {query !== null && query.map((p, i) => (
                                <div key={i} className="flex items-center justify-between space-x-4 border border-green_base p-2 border-x-0 border-t-0 capitalize"
                                    onClick={() => setSelect(p)}>
                                    <h3>{p.id} -</h3>
                                    <h3>{p.name} -</h3>
                                    <p>&#2547;-{p.price} -</p>
                                    <p>Stock:{p.stock}</p>
                                </div>
                            ))}

                        </div>
                    </div>
                    <form onSubmit={onSubmit}>
                        <Input_Label lbl="Total barcode" type="number" placeholder="Total number" name="count" />
                        <div className="flex space-x-2 py-2 justify-end" >
                            <Btn>Clean</Btn>
                            <Btn type="submit" className="bg-green_base text-white">Generate</Btn>
                        </div>
                    </form>
                </div>
                <div>
                    <div className="text-xl text-gray_base capitalize border text-center space-y-2 py-4 rounded-md shadow">
                        <p className="text-green_base font-medium py-2">Product Details</p>
                        <div className="flex justify-center">
                            <Img src={select?.image || "/default.svg"} className="w-20 h-20" />
                        </div>
                        <p>Code:{select?.code || '---'}</p>
                        <p>Name:{select?.name || '---'}</p>
                        <p>Price:{select?.price || '---'}</p>
                    </div>

                </div>
            </div>
            <div id="printselect" className="flex flex-wrap gap-4 py-5" ref={barcodeRef}>
                {select !== null ? Array.from({ length: Number(count) }).map((_, idx) => (
                    <div key={idx}>
                        <Code code={select?.code} />
                    </div>
                )) : ''}
            </div>
            <button type='button' onClick={onPrint}>Print</button>
        </div>
    )
}
