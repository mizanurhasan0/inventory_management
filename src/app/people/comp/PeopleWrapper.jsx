import React, { useEffect, useState } from 'react'
import Modal from '@/components/modal/Modal'
import Title from '@/components/title/Title'
import Search from '@/components/search/Search'
import Btn from '@/components/btn/Btn'
import SupplyList from './PeopleList'
import { usePeopleCtx } from '../context/PeopleCtx'
import { useRouter } from 'next/navigation'
import AddCustomer from './AddCustomer'

export default function PeopleWrapper() {
  const { openFrm, setOpenFrm } = usePeopleCtx();
  const { push } = useRouter();

  const onCloseModal = () => {
    push('/people')
    setOpenFrm((prev) => !prev)
  };

  return (
    <>
      <div className="container mx-auto">
        <Title name="Users" />
        <div className="flex items-center space-x-4 pb-5">
          <Search />
          <Btn
            onClick={onCloseModal}
            className="bg-green_base text-white whitespace-nowrap">Add Customer</Btn>
        </div>
        {/* Supplier list components */}
        <SupplyList />

      </div>
      {openFrm && (
        <Modal title="Add Customer" onClose={onCloseModal}>
          <AddCustomer onClose={onCloseModal} />
        </Modal>
      )}
    </>
  )
}
