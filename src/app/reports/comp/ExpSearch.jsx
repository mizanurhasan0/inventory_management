import Btn from '@/components/btn/Btn';
import Dropdown from '@/components/dropdown/Dropdown'
import Input_Label from '@/components/input/Input_Label'
import Search from '@/components/search/Search';
import { useRouter } from 'next/navigation';
import React from 'react'

let Status = [{ "id": 1, name: "Complete" }, { "id": 2, name: "Partial" }, { "id": 3, name: "Due" },];
export default function ExpSearch() {
    const { push } = useRouter();

    const onSubmit = (e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        const data = Object.fromEntries(fd);
        const d = Object.keys(data).map((d) => `${d}=${data[d]}`).join("&")
        console.log(d);
        push(`?${d}`)
    }
    return (
        <div>
            <div className="space-y-4">
                <form onSubmit={onSubmit} className="flex items-end justify-between gap-4">
                    <div className="flex-1">
                        <Input_Label name="start" type="date" lbl="Start Date" />
                    </div>
                    <div className="flex-1">
                        <Input_Label name="end" type="date" lbl="End Date" />
                    </div>
                    <div className="flex-1">
                        <Dropdown name="category" lbl="category" opts={Status} />
                    </div>
                    <Btn type="submit" className="bg-green_base text-gray_light ">Search</Btn>
                </form>
                <div className="flex space-x-4  justify-between">
                    <Search placeholder="Search..." />
                    <div>
                        <Btn>Export</Btn>
                    </div>
                </div>
            </div>
        </div>
    )
}
