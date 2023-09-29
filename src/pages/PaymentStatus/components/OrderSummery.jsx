import React from 'react'

const OrderSummery = ({ paymentSuccess }) => {
    return (
        <div className='space-y-6'>
            <h3 className='text-[1.5rem] font-customBold'>Order Summery</h3>
            <div className='border-2 border-black border-opacity-10 p-6 rounded-custom-Large flex gap-4'>
                <img 
                    src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/04/stable-diffusion-ai-4.jpg" 
                    alt="img"
                    className='w-64 h-34 object-cover rounded-custom-Large'
                />
                <div className='flex-grow flex items-start justify-between min-h-full pt-4'>
                    <div className='grid gap-4'>
                        <h3 className='text-[1.5rem] font-customBold'>Stable Diffusion v1-2</h3>
                        <div className='flex items-center gap-2'>
                            <img 
                                src="https://www.edigitalagency.com.au/wp-content/uploads/chatgpt-logo-white-black-background-png-1.png" 
                                alt="img"
                                className='w-8 h-8 rounded-full object-cover'
                            />
                            <p className='text-silverColor'>Open AI</p>
                        </div>
                    </div>
                    <p className='text-[1.5rem] font-customBold text-primaryColor'>0.38ETH</p>
                    <div className='flex flex-col justify-between h-full items-end'>
                        <div className='grid gap-4 justify-items-end'>
                            <p className='text-[1.25rem] font-customMedium'>ID : xdgf56747h</p>
                            <p className={`${paymentSuccess ? 'text-green-500' : 'text-red-500'} text-[1.125rem] font-customBold uppercase`}>{paymentSuccess ? 'Successful' : 'Failed'}</p>
                        </div>
                        <p className='text-primaryColor text-[1.125rem] font-customBold'>Write A Review</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSummery