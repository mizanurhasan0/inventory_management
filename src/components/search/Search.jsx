import React from 'react';
import Img from '../img/Img';
import Input from '../input/Input';


export default function Search({ ...props }) {
    return (
        <div className="flex border rounded-xl items-center w-full">
            <Img src="/icons/magnifier.svg" className="ml-2 w-6 h-6" />
            <Input className='border-none' placeholder="Search ..." {...props} />
        </div>
    )
}

