'use client'
import React from 'react';
import Input_Label from '@/components/input/Input_Label';
import Btn from '@/components/btn/Btn';

export default function AddSupply({ onClose = () => { } }) {
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }
    return (
        <div>
            <form onSubmit={onSubmit} className="space-y-2">
                <Input_Label lbl="Supplier name *" name="brand" />
                <Input_Label lbl="Contact name *" name="name" />
                <Input_Label lbl="Supplier email *" name="email" />
                <Input_Label lbl="Supplier number *" name="mobile" />
                <div className="flex items-center space-x-2 justify-end">
                    <Btn onClick={onClose}>Cancel</Btn>
                    <Btn type="submit" className="bg-yellow-500 text-green_base">Add</Btn>
                </div>
            </form>
        </div>
    )
}
