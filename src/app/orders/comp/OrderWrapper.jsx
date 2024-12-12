import React from 'react'
import Modal from '@/components/modal/Modal'
import Title from '@/components/title/Title'
import Search from '@/components/search/Search'
import Btn from '@/components/btn/Btn'
import { useRouter } from 'next/navigation'
import OrderList from './OrderList'
import AddOrder from './AddOrder'
import { useOrderCtx } from '../context/OrderCtx'

export default function OrderWrapper() {
  const { openFrm, setOpenFrm } = useOrderCtx();
  const { push } = useRouter();

  const onCloseModal = () => {
    push('/orders')
    setOpenFrm((prev) => !prev)
  };

  return (
    <>
      <div className="container mx-auto">
        <Title name="Sales orders" />
        <div className="flex items-center space-x-4 pb-5">
          <Search />
          <Btn
            onClick={onCloseModal}
            className="bg-green_base text-white whitespace-nowrap">Create order</Btn>
        </div>
        {/* Supplier list components */}
        <OrderList />

      </div>
      {openFrm && (
        <Modal title="Add supplier" onClose={onCloseModal}>
          <AddOrder onClose={onCloseModal} />
        </Modal>
      )}
    </>
  )
}
