'use client'
import React, { useEffect, useState } from 'react';
import Input_Label from '@/components/input/Input_Label';
import Btn from '@/components/btn/Btn';
import { useSupplyCtx } from '../context/SupplyCtx';
import { useSearchParams } from 'next/navigation';

const validField = new Set(["name", "brand", "email", "mobile", "address"]);
export default function AddSupply({ onClose = () => { } }) {
    const [updateData, setUpdateData] = useState(null);
    const { setListSupply, listSupply } = useSupplyCtx();
    const searchParams = useSearchParams()
    const id = searchParams.get('id')

    const onSubmit = (e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        const data = Object.fromEntries(fd);
        const valid = Object.keys(data).every((k) => validField.has(k) && data[k].trim());

        if (!valid) return console.error('field error');
        const formattedData = { brand: data.brand, name: data.name, contact: { email: data.email, mobile: data.mobile }, address: data.address };
        setListSupply((prev) => ([...prev, formattedData]));

    }
    useEffect(() => {
        if (id) {
            setUpdateData(listSupply.find((d) => d.id.toString() === id));
        }
        console.log('hit');
    }, [id]);
    console.log({ id, updateData });
    return (
        <div>

            <form onSubmit={onSubmit} className="space-y-2">
                <Input_Label lbl="Supplier name *" name="brand" defaultValue={updateData?.brand} />
                <Input_Label lbl="Owner name *" name="name" defaultValue={updateData?.name} />
                <Input_Label lbl="Supplier email *" name="email" defaultValue={updateData?.contact.email} />
                <Input_Label lbl="Supplier number *" name="mobile" defaultValue={updateData?.contact.phone} />
                <Input_Label lbl="Supplier address *" name="address" defaultValue={updateData?.address} />
                <div className="flex items-center space-x-2 justify-end">
                    <Btn onClick={onClose}>Cancel</Btn>
                    <Btn type="submit" className="bg-yellow-500 text-green_base">Add</Btn>
                </div>
            </form>
        </div>
    )
}
