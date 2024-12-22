'use client'
import React, { Suspense } from 'react'
import ExpenseCtx from './context/ExpenseCtx'
import ExpWrapper from './ExpWrapper'

export default function Reports() {
    return (
        <Suspense fallback={<p>loading...</p>}>
            <ExpenseCtx>
                <ExpWrapper />
            </ExpenseCtx>
        </Suspense>
    )
}
