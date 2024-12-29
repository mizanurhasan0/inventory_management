import React from 'react';
import Gallary from './components/Gallary';
import ShortDetails from './components/ShortDetails';
import Specification from './components/Specification';
import Suggestion from './components/Suggestion';

export default function page() {
    return (
        <div className="">
            <div className="mx-auto container grid grid-cols-2 gap-4 py-8">
                <Gallary />
                <ShortDetails />
            </div>
            <div className="container mx-auto">
                <Specification />
            </div>
            <div className="container mx-auto px-4 md:px-0 my-10">
                <Suggestion />
            </div>
        </div>
    )
}
