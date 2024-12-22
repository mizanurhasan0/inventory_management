import Btn from '@/components/btn/Btn';
import Input_Label from '@/components/input/Input_Label';
import Tbl from '@/components/table/Tbl';
import Upload from '@/components/upload/Upload';
import React, { useState } from 'react';
import fkCategory from "@/data/category";

export default function Category() {
    const [upData, setupData] = useState();
    const onSubmit = (e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        const jsData = Object.fromEntries(fd);
        console.log(jsData);
    }

    return (
        <div className="flex space-x-4 w-full">
            <div>
                <h2 className="text-xl text-center text-green_base py-4 underline underline-offset-8">New Category</h2>
                <form onSubmit={onSubmit} className="space-y-4">
                    <div className="">
                        <Upload name="image" />
                    </div>
                    <Input_Label lbl="Category name *" name="name" defaultValue={upData?.brand} />
                    <Input_Label field="textArea" rows={5} lbl="Description" name="description" defaultValue={upData?.name} />

                    <div className="flex items-center space-x-2 justify-end">
                        <Btn>Cancel</Btn>
                        <Btn type="submit" className="bg-green_base text-gray_light">{upData ? 'Update' : 'Add'}</Btn>
                    </div>
                </form>
            </div>
            <div className="flex-1">
                <Tbl header='category' data={fkCategory} action={true} />
            </div>
        </div>
    )
}
