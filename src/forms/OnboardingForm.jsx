import React from 'react'

const OnboardingForm = ({ content }) => {
    return (
        <div className='container py-12'>
            <form
                className='bg-white md:w-[70%] lg:w-[35%] 3xl:w-[30%] mx-auto grid justify-items-center gap-8 rounded-customLarge px-6 py-14'
            >
                {content}
            </form>
        </div>
    )
}

export default OnboardingForm