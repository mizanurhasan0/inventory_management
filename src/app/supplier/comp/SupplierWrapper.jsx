import React, { useEffect, useState } from 'react'
import Modal from '@/components/modal/Modal'
import Title from '@/components/title/Title'
import Search from '@/components/search/Search'
import Btn from '@/components/btn/Btn'
import SupplyList from './SupplyList'
import AddSupply from './AddSupply'
import { useSupplyCtx } from '../context/SupplyCtx'
import { useRouter } from 'next/navigation'

export default function SupplierWrapper() {
  const { openFrm, setOpenFrm } = useSupplyCtx();
  const { push } = useRouter();

  const onCloseModal = () => {
    push('/supplier')
    setOpenFrm((prev) => !prev)
  };

  return (
    <>
      <div className="container mx-auto">
        <Title name="suppliers" />
        <div className="flex items-center space-x-4 pb-5">
          <Search />
          <Btn
            onClick={onCloseModal}
            className="bg-green_base text-white whitespace-nowrap">Add supplier</Btn>
        </div>
        {/* Supplier list components */}
        <SupplyList />

      </div>
      {openFrm && (
        <Modal title="Add supplier" onClose={onCloseModal}>
          <AddSupply onClose={onCloseModal} />
        </Modal>
      )}
    </>
  )
}
