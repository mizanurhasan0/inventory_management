'use client'
import React, { Suspense } from 'react'
import PeopleCtx from './context/PeopleCtx'
import SupplierWrapper from './comp/PeopleWrapper';


export default function People() {

    return (
        <Suspense fallback={<p>loading...</p>}>
            <PeopleCtx>
                <SupplierWrapper />
            </PeopleCtx>
        </Suspense>
    )
}
