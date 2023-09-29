import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { PrimaryButton } from '../../../components'

const CheckOutModal = ({ isOpen, closeModal, handleCheckout }) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-50" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="container flex min-h-full items-center justify-center py-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full md:w-3/4 lg:w-2/4 bg-white rounded-custom-Large divide-y divide-black divide-opacity-10 shadow-xl">
                                <h4 className='text-[2rem] font-bold p-8'>Checkout</h4>
                                <div className='p-8 flex items-center justify-between'>
                                    <h5 className='text-[1.5rem] font-bold'>Your Order</h5>
                                    <h5 className='text-[1.5rem] font-bold'>0.38ETH</h5>
                                </div>
                                <div className='p-8 space-y-8'>
                                    <div className='flex items-center justify-between text-[1.25rem] font-medium'>
                                        <p>Stable Diffusion v1-2</p>
                                        <p>0.38ETH</p>
                                    </div>
                                    <div className='flex items-center justify-between text-[1.25rem] font-medium'>
                                        <p>Handling Fees</p>
                                        <p>0.00ETH</p>
                                    </div>
                                </div>
                                <div className='p-8 flex items-center justify-between text-[1.5rem] font-bold text-primaryColor'>
                                    <p>Total</p>
                                    <p>0.38ETH</p>
                                </div>
                                <div className='p-8 flex justify-end'>
                                    <PrimaryButton 
                                        task={handleCheckout}
                                        content={`Pay Securely`}
                                        className={`px-6 py-3`}
                                    />
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default CheckOutModal