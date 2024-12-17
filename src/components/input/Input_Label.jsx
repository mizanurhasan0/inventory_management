import React from 'react'
import Input from "./Input"
import TextArea from './TextArea'

export default function Input_Label({ lbl = "Field name", field = 'input', htmlFor = "field", ...props }) {
    return (
        <div>
            <label htmlFor={htmlFor} className="text-gray_base text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize">{lbl}</label>
            {field === 'input' ? <Input name={htmlFor} {...props} /> :
                <TextArea name={htmlFor} {...props} />}
        </div>
    )
}
