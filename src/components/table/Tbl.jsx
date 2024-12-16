'use client'
import React, { useState } from 'react'
import TblHeader from "./TblHeader";
import Img from '../img/Img';

let actions = ["Edit", "Delete"]
export default function Tbl({ header = "usrs", data, action = false }) {
    const [menuOpen, setMenuOpen] = useState(null);
    const onMenu = (id) => {
        setMenuOpen((prv) => prv === id ? null : id);
    }
    return (
        <table className="w-full">
            <thead className="bg-gray_light text-gray_base">
                <tr className="h-12">
                    {TblHeader[header].map((h) => (
                        <th className="border px-2 text-left capitalize" key={h}>{h}</th>
                    ))}
                    {action && <th className="border text-center px-1">Action</th>}
                </tr>
            </thead>
            <tbody>
                {/* {children} */}
                {data?.length > 0 && data?.map((p, i) => (
                    <tr key={i} className="capitalize text-gray_base">
                        {TblHeader[header].map((h, i) => (

                            <td key={i} className="py-2 border px-2">
                                {h === 'image' ? (
                                    <div className="h-24 w-20 overflow-hidden rounded-lg">
                                        <Img src={p[h]} className=" w-full h-full object-fill" />
                                    </div>
                                ) : p[h]}
                            </td>
                        ))}
                        {action ? <td className="border px-2">
                            <div className="flex space-x-2 justify-center relative">
                                <h4 className="whitespace-nowrap border py-1 px-2 rounded-md cursor-pointer select-none" onClick={() => onMenu(i)}>Action &#11167;</h4>
                                <div className={`${menuOpen === i ? 'block' : 'hidden'} absolute  inline-block top-8 w-20 bg-gray_light border`}>
                                    {actions.map((opt, i) => (
                                        <div key={i} className="cursor-pointer px-2 py-1 hover:bg-white">{opt}</div>
                                    ))}
                                </div>
                            </div>
                        </td> : ''}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
