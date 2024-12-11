import React from 'react';
import Img from '../img/Img';

export default function Modal({ title = "Title", show = true, onClose = () => { }, children }) {
    return (
        <div className={`modal absolute dark:text-info ${show ? '' : 'scale-0'}`}>
            <div className="fixed z-[999] top-0 bottom-0 left-0 right-0 bg-[#0000008c]">
                <div className={`fixed flex w-full h-full items-center justify-center duration-300 ${show ? '-top-[0px]' : '-top-[50px]'}`}>
                    <div className="relative bg-white dark:bg-darkSideBar rounded-lg p-6 min-w-[95vw] lg:min-w-[30vw]">
                        <div className="flex justify-between pb-4" >
                            <h2 className="text-xl capitalize font-semibold text-green_base tracking-wide">{title}
                            </h2>
                            <div onClick={onClose}>
                                <Img src='/icons/cross.svg' className="w-7 h-7" />
                            </div>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
