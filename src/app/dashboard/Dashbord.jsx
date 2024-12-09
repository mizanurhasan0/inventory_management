import Img from '@/components/img/Img'
import Link from 'next/link'
import React from 'react'
import Card from './comp/Card'


export default function Dashbord() {
    return (
        <div className="container mx-auto">
            <h1 className="text-center text-4xl font-semibold py-10">Welcome, Mizan!</h1>
            <div>
                <Card />
            </div>
        </div>
    )
}
