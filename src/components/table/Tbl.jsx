import React from 'react'
import TblHeader from "./TblHeader";

export default function Tbl({ children, header = "usrs", data, action = false }) {
    return (
        <table className="w-full">
            <thead className="bg-gray_light text-gray_base">
                <tr>
                    {TblHeader[header].map((h) => (
                        <th className="border px-2 text-left capitalize" key={h}>{h}</th>
                    ))}
                    {action && <th className="border text-center px-1">Action</th>}
                </tr>
            </thead>
            <tbody>
                {/* {children} */}
                {data.map((p) => (
                    <tr key={p.id} className="capitalize">
                        {TblHeader[header].map((h, i) => (
                            <td key={i} className="py-2 border px-2">{p[h]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
