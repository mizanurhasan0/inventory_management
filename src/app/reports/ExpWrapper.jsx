import React from 'react'
import ExpSearch from './comp/ExpSearch'
import Title from '@/components/title/Title'
import Tbl from '@/components/table/Tbl';
import { useExpenseCtx } from './context/ExpenseCtx';

export default function ExpWrapper() {
    const { listExpense } = useExpenseCtx();
    return (
        <div className="container mx-auto">
            <Title name="Expense Reports" />
            <ExpSearch />
            <div>
                <Tbl header='expense' data={listExpense} />
            </div>
        </div>
    )
}
