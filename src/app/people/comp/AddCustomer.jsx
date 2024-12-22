'use client'
import React, { useEffect, useState } from 'react';
import Input_Label from '@/components/input/Input_Label';
import Btn from '@/components/btn/Btn';
import { usePeopleCtx } from '../context/PeopleCtx';
import { useRouter, useSearchParams } from 'next/navigation';

const validField = new Set(["name", "brand", "email", "mobile", "address"]);

export default function AddCustomer({ onClose = () => { } }) {
    const [updateData, setUpdateData] = useState(null);
    const { listPeople, setListPeople } = usePeopleCtx();
    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    const { push } = useRouter();

    const onSubmit = (e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        const data = Object.fromEntries(fd);
        const valid = Object.keys(data).every((k) => validField.has(k) && data[k].trim());

        if (!valid) return console.error('field error');
        const formattedData = { brand: data.brand, name: data.name, contact: { email: data.email, mobile: data.mobile }, address: data.address };
        setListPeople((prev) => {
            if (!updateData) return [...prev, formattedData];
            return prev.map((item) => item.id === updateData.id ? { id: updateData.id, ...formattedData } : item)
        })
    }
    useEffect(() => {
        if (id) {
            const people = listPeople.find((d) => d.id.toString() === id);
            people ? setUpdateData(people) : push('/people');
        }
    }, [id]);
    return (
        <form onSubmit={onSubmit} className="space-y-2">
            <Input_Label lbl="Customer name *" name="name" defaultValue={updateData?.brand} />
            <Input_Label lbl="Customer email *" name="email" defaultValue={updateData?.contact.email} />
            <Input_Label lbl="Phone number *" name="phone" defaultValue={updateData?.contact.phone} />
            <Input_Label field="textarea" lbl="Address *" name="address" defaultValue={updateData?.address} />
            <div className="flex items-center space-x-2 justify-end">
                <Btn onClick={onClose}>Cancel</Btn>
                <Btn type="submit" className="bg-green_base text-gray_light">{updateData ? 'Update' : 'Add'}</Btn>
            </div>
        </form>
    )
}
