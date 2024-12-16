import Btn from '@/components/btn/Btn'
import Dropdown from '@/components/dropdown/Dropdown';
import Input_Label from '@/components/input/Input_Label'
import Upload from '@/components/upload/Upload';
import React, { useState } from 'react'

export default function AddProduct() {
    const [upData, setupData] = useState();
    const onSubmit = (e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        const jsData = Object.fromEntries(fd);
        console.log(jsData);
    }
    return (
        <div>
            <h2 className="text-xl text-center text-green_base py-4 underline underline-offset-8">Create New Product</h2>
            <form onSubmit={onSubmit} >
                <div className="flex space-x-4">
                    <div className="flex-1 grid grid-cols-2 gap-4">
                        <Input_Label lbl="Product name *" name="name" defaultValue={upData?.brand} />
                        <Input_Label lbl="Product Code *" name="code" defaultValue={upData?.name} />
                        <Input_Label lbl="Brand *" name="brand" defaultValue={upData?.contact.email} />
                        <Dropdown lbl="Select Supplier *" />
                        <Input_Label lbl="Price *" name="price" defaultValue={upData?.contact.phone} />
                        <Input_Label lbl="stock *" name="stock" defaultValue={upData?.address} />
                    </div>
                    <div className="">
                        <Upload name="image" />
                    </div>
                </div>
                <div className="flex items-center space-x-2 justify-end">
                    <Btn>Cancel</Btn>
                    <Btn type="submit" className="bg-yellow-500 text-green_base">{upData ? 'Update' : 'Add'}</Btn>
                </div>
            </form>
        </div>
    )
}
