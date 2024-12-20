'use client'
import React from 'react'
import PeopleCtx from './context/PeopleCtx'
import SupplierWrapper from './comp/PeopleWrapper';


export default function People() {

    return (
        <PeopleCtx>
            <SupplierWrapper />
        </PeopleCtx>
    )
}
