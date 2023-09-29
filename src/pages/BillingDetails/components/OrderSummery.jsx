import React from 'react'

const OrderSummery = () => {
    return (
        <div className='border-2 border-black border-opacity-10 divide-y divide-black divide-opacity-10 rounded-custom-Large'>
            <div className='px-6 py-6 space-y-6'>
                <h4 className='text-[1.5rem] font-bold'>Order Summery</h4>
                <div className='flex items-center justify-between text-[1.25rem] font-medium'>
                    <p>Stable Diffusion v1-2</p>
                    <p>0.38ETH</p>
                </div>
                <div className='flex items-center justify-between text-[1.25rem] font-medium'>
                    <p>Handling Fees</p>
                    <p>0.00ETH</p>
                </div>
            </div>
            <div className='px-6 py-6 flex items-center justify-between text-[1.5rem] font-bold'>
                <p>Total</p>
                <p className='text-primaryColor'>0.38ETH</p>
            </div>
        </div>
    )
}

export default OrderSummery