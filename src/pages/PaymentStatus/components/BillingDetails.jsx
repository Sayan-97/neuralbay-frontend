import React from 'react'
import { SecondaryButton } from '../../../components'

const BillingDetails = () => {
    return (
        <div className='border-2 border-black border-opacity-10 p-6 space-y-6 flex flex-col rounded-custom-Large'>
            <div className='flex items-center justify-between'>
                <h3 className='text-[2rem] font-bold'>Billing Details</h3>
                <SecondaryButton
                    content={`Download Invoice`}
                    className={`px-4 py-2 text-primaryColor`}
                />
            </div>
            <div className='text-[1.25rem] space-y-3'>
                <p>Topobar Layek</p>
                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                <p>10th Downing street, California, 0098</p>
                <p>USA</p>
            </div>
        </div>
    )
}

export default BillingDetails