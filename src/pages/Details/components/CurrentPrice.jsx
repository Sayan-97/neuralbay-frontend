import React from 'react'
import { Link } from 'react-router-dom'
import { PrimaryButton, SecondaryButton } from '../../../components'

const CurrentPrice = ({ modelPrice }) => {
    return (
        <div className='border border-customBorderColor p-6 space-y-4 rounded-customLarge'>
            <p>Current Price</p>
            <div className='flex items-end gap-2'>
                <p className='text-4xl font-customBold'>{modelPrice.eth} ETH</p>
                <p className='text-lg'>${modelPrice.dollar}</p>
            </div>
            <div className='grid md:grid-cols-2 gap-4'>
                <Link to={'/marketplace/billing-details'}>
                    <PrimaryButton
                        content={`Download`}
                        className={`w-full text-lg py-2`}
                    />
                </Link>
                <SecondaryButton
                    content={`Run in Sandbox`}
                    className={`w-full text-lg py-2 text-customPrimaryColor`}
                />
            </div>
        </div>
    )
}

export default CurrentPrice