'use client'
import React from 'react';
import Input_Label from '@/components/input/Input_Label';
import Btn from '@/components/btn/Btn';
import { useOrderCtx } from '../context/OrderCtx';

const validField = new Set(["email"]);

export default function AddOrder({ onClose = () => { } }) {
    const { setListOrder } = useOrderCtx();

    const onSubmit = (e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        const data = Object.fromEntries(fd);
        const valid = Object.keys(data).every((k) => validField.has(k) && data[k].trim());

        if (!valid) return console.error('field error');
        const formattedData = {
            email: data.email,
            id: 10,
            userId: {
                "id": 1,
                "email": "user@gmail.com"
            },
            "totalAmount": 0,
            "status": "new",
        };
        setListOrder((prev) => ([...prev, formattedData]));
    }

    return (
        <form onSubmit={onSubmit} className="space-y-2">
            <Input_Label lbl="Customer email *" name="email" />
            <div className="flex items-center space-x-2 justify-end">
                <Btn onClick={onClose}>Cancel</Btn>
                <Btn type="submit" className="bg-yellow-500 text-green_base"> Create</Btn>
            </div>
        </form>
    )
}
