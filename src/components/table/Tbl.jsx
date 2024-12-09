import React from 'react'
// import Checkbox from "@/components/c_checkbox/Checkbox";
import C_Image from "@/components/img/Img";
import TblHeader from "./TblHeader";

export default function Tbl({ children, header = "usrs", checkBox = true }) {
    return (
        <table className="w-full">
            <thead className="bg-cgreen bg-opacity-70 text-lg text-white">
                <tr>
                    {/* {checkBox ? <th className="w-10 border py-3"><Checkbox /></th> : ''} */}
                    {TblHeader[header].map((h) => (
                        <th className="border px-2" key={h}>{h}</th>
                    ))}
                    <th className="border text-center px-1">Action</th>
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}
