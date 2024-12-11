'use client'
import React, { useState } from 'react'
import Modal from '@/components/modal/Modal'
import AddSupply from './comp/AddSupply'
import SupplyCtx from './context/SupplyCtx'
import Title from '@/components/title/Title'
import Search from '@/components/search/Search'
import Btn from '@/components/btn/Btn'
import SupplyList from './comp/SupplyList'

export default function Supplier() {
    const [openFrm, setOpenFrm] = useState(false);
    const onCloseModal = () => setOpenFrm((p) => !p);
    return (
        <SupplyCtx>
            <div className="container mx-auto">
                <Title name="suppliers" />
                <div className="flex items-center space-x-4 pb-5">
                    <div className="w-full">
                        <Search />
                    </div>
                    <Btn
                        onClick={onCloseModal}
                        className="bg-green_base text-white whitespace-nowrap">Add supplier</Btn>
                </div>
                <SupplyList />

            </div>
            {openFrm && (
                <Modal title="Add supplier" onClose={onCloseModal}>
                    <AddSupply onClose={onCloseModal} />
                </Modal>
            )}
        </SupplyCtx>
    )
}
