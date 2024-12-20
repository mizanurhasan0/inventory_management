'use client'
import React from 'react'
import ExpenseCtx from './context/ExpenseCtx'
import ExpWrapper from './ExpWrapper'

export default function Reports() {
    return (
        <ExpenseCtx>
            <ExpWrapper />
        </ExpenseCtx>
    )
}
