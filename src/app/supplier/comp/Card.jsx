import Img from '@/components/img/Img'
import React from 'react'

export default function Card() {
    return (
        <div className="border shadow-lg p-4 space-y-2 max-w-96 rounded-lg overflow-hidden">
            <h2 className="text-xl font-semibold capitalize">Phaidon</h2>
            <p className="text-sm text-gray_base">Mery K</p>
            <div className="flex items-center space-x-2 text-gray_base">
                <Img src='/icons/email.svg' className="w-5 h-5" />
                <p className="lowercase">meryk@gmail.com</p>
            </div>
            <p className="text-gray_base font-medium">
                <span>Address: </span>
                <span className="lowercase">Mirpur-12,Dhaka-1216</span>
            </p>
        </div>
    )
}
