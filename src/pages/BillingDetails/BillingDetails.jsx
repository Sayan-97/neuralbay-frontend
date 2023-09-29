import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PrimaryButton } from '../../components'
import { BillingForm, ChooseWallet, DetailsOverview, OrderSummery } from './components'
import { CheckOutModal } from './modal'

const BillingDetails = () => {

    const navigate = useNavigate()
    const [formChecked, setFormChecked] = useState(false)

    const handleSubmit = () => {
        setFormChecked(!formChecked)
    }

    const handleCheckout = () => {
        navigate('/marketplace/payment-status')
    }

    // Modal Functions
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <div className='container py-12 flex max-lg:flex-col items-start gap-8'>
            <div className='w-full lg:w-2/3'>
                {!formChecked ? (
                    <BillingForm
                        handleSubmit={handleSubmit}
                    />
                ) : (
                    <div className='space-y-8 grid'>
                        <DetailsOverview
                            handleSubmit={handleSubmit}
                        />
                        <ChooseWallet />
                        <PrimaryButton
                            task={openModal}
                            content={`Continue`}
                            className={`w-[125px] py-3 justify-self-end`}
                        />
                        <CheckOutModal
                            isOpen={isOpen}
                            closeModal={closeModal}
                            handleCheckout={handleCheckout}
                        />
                    </div>
                )}
            </div>
            <div className='w-full lg:w-1/3'>
                <OrderSummery />
            </div>
        </div>
    )
}

export default BillingDetails