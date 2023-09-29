import React from 'react'
import { PrimaryButton, SecondaryButton } from '../../../components'

const Head = ({ paymentSuccess }) => {

    const SuccessSvg = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
            <path d="M50.0007 91.6666C72.9173 91.6666 91.6673 72.9166 91.6673 49.9999C91.6673 27.0833 72.9173 8.33325 50.0007 8.33325C27.084 8.33325 8.33398 27.0833 8.33398 49.9999C8.33398 72.9166 27.084 91.6666 50.0007 91.6666Z" stroke="url(#paint0_linear_898_1144)" stroke-width="6.25" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M32.291 49.9999L44.0827 61.7916L67.7077 38.2083" stroke="url(#paint1_linear_898_1144)" stroke-width="6.25" stroke-linecap="round" stroke-linejoin="round" />
            <defs>
                <linearGradient id="paint0_linear_898_1144" x1="91.6673" y1="8.33325" x2="-7.36137" y2="63.484" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FAC276" />
                    <stop offset="0.515627" stop-color="#D062B3" />
                    <stop offset="1" stop-color="#4C57CF" />
                </linearGradient>
                <linearGradient id="paint1_linear_898_1144" x1="67.7077" y1="38.2083" x2="35.2623" y2="65.3442" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FAC276" />
                    <stop offset="0.515627" stop-color="#D062B3" />
                    <stop offset="1" stop-color="#4C57CF" />
                </linearGradient>
            </defs>
        </svg>
    )

    const FailedSvg = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
            <path d="M50.0007 91.6666C72.9173 91.6666 91.6673 72.9166 91.6673 49.9999C91.6673 27.0833 72.9173 8.33325 50.0007 8.33325C27.084 8.33325 8.33398 27.0833 8.33398 49.9999C8.33398 72.9166 27.084 91.6666 50.0007 91.6666Z" stroke="url(#paint0_linear_898_1356)" stroke-width="6.25" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M63 62.74L37.26 37M62.74 37.26L37 63" stroke="url(#paint1_linear_898_1356)" stroke-width="6.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <defs>
                <linearGradient id="paint0_linear_898_1356" x1="91.6673" y1="8.33325" x2="-7.36137" y2="63.484" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FAC276" />
                    <stop offset="0.515627" stop-color="#D062B3" />
                    <stop offset="1" stop-color="#4C57CF" />
                </linearGradient>
                <linearGradient id="paint1_linear_898_1356" x1="63" y1="37" x2="32.103" y2="54.207" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FAC276" />
                    <stop offset="0.515627" stop-color="#D062B3" />
                    <stop offset="1" stop-color="#4C57CF" />
                </linearGradient>
            </defs>
        </svg>
    )

    return (
        <div className='bg-background-grey'>
            <div className='container flex flex-col items-center space-y-6 py-12'>
                {paymentSuccess ? <SuccessSvg /> : <FailedSvg />}
                <h2 className='text-[2.25rem] font-customBold'>{paymentSuccess ? 'Payment Successful' : 'Payment Failed'}</h2>
                <p className='text-[1.125rem]'>{paymentSuccess ? `Thankyou for Choosing Neuralbay, Your download will start in a while, if not started then` : 'Your Payment has been failed due to some uncertain reason.'} <a href="#" className='text-primaryColor font-customMedium'>{paymentSuccess ? 'Click Here' : 'Learn More'}</a></p>
                <div className='flex items-stretch gap-6'>
                    <PrimaryButton
                        content={`${paymentSuccess ? 'Contact Support' : 'Go to Marketpace'}`}
                        className={`px-8 py-2.5`}
                    />
                    <SecondaryButton
                        content={`${paymentSuccess ? 'My Orders' : 'Retry'}`}
                        className={`px-8 py-2.5 text-primaryColor`}
                    />
                </div>
            </div>
        </div>
    )
}

export default Head