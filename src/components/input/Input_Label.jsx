import React from 'react'
import Input from "./Input"

export default function Input_Label({ lbl = "Field name", htmlFor = "field", ...props }) {
    return (
        <div>
            <label htmlFor={htmlFor} className="text-gray_base text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize">{lbl}</label>
            <Input name={htmlFor} {...props} />
        </div>
    )
}
