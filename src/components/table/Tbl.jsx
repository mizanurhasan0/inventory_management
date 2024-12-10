import React from 'react'
import TblHeader from "./TblHeader";
import Img from '../img/Img';

export default function Tbl({ children, header = "usrs", data, action = false }) {
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
                {data.map((p) => (
                    <tr key={p.id} className="capitalize text-gray_base">
                        {TblHeader[header].map((h, i) => (
                            <td key={i} className="py-2 border px-2">
                                {h === 'image' ? (
                                    <div className="h-24 w-20 overflow-hidden rounded-lg">
                                        <Img src={p[h]} className=" w-full h-full object-fill" />
                                    </div>
                                ) : p[h]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
