import Btn from '@/components/btn/Btn';
import Dropdown from '@/components/dropdown/Dropdown'
import Input_Label from '@/components/input/Input_Label'
import Search from '@/components/search/Search';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'

let Status = [{ "id": 1, name: "Complete" }, { "id": 2, name: "Partial" }, { "id": 3, name: "Due" }];
export default function ExpSearch() {
    const searchFrmRef = useRef();
    const { push, replace } = useRouter();
    const [defaultVal, setDefaultval] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        const data = Object.fromEntries(fd);
        const startDate = new Date(data.start);
        const endDate = new Date(data.end);
        const today = new Date();
        if (endDate < startDate) return console.log('Invalid!');
        if (endDate > today) return console.log('Invalid end!')

        const d = Object.keys(data).filter((k) => data[k] !== '').map((d) => `${d}=${data[d]}`).join("&")
        push(`?${d}`)
    }
    const onClear = () => {
        searchFrmRef.current.reset();
        replace('/reports', { shallow: true });
    }
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.forEach((value, k) => {
            setDefaultval((prev) => ({ ...prev, [k]: value }))

        });
    }, []);

    return (
        <div>
            <div className="space-y-4" >
                <form ref={searchFrmRef} onSubmit={onSubmit} className="space-y-4 pb-5">
                    <div className="flex items-end justify-between gap-4">
                        <div className="flex-1">
                            <Input_Label name="start" type="date" lbl="Start Date" defaultValue={defaultVal?.start} />
                        </div>
                        <div className="flex-1">
                            <Input_Label name="end" type="date" lbl="End Date" defaultValue={defaultVal?.end} />
                        </div>
                        <div className="flex-1">
                            <Dropdown name="category" lbl="category" opts={Status} defaultValue={{ option: defaultVal?.option, id: defaultVal?.category }} />
                        </div>
                    </div>
                    <div className="flex space-x-4  justify-between">
                        <Search placeholder="Search..." name="query" defaultValue={defaultVal?.query} />
                        <div className="flex space-x-2">
                            <Btn type="submit" className="bg-green_base text-gray_light ">Search</Btn>
                            <Btn>Export</Btn>
                            <Btn onClick={onClear} className="bg-green_mid text-gray_light">Clear</Btn>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
