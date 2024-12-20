import React from 'react'
import { usePeopleCtx } from '../context/PeopleCtx';
import Tbl from '@/components/table/Tbl';

export default function PeopleList() {
    const { listPeople } = usePeopleCtx();

    return (
        <div>
            <Tbl data={listPeople} header='users' action />
        </div>
    )
}
