import React from 'react'
import { Link } from 'react-router-dom'
import PrimaryButton from '../../PrimaryButton'
import SecondaryButton from '../../SecondaryButton'

const OnboardingButtons = () => {
    return (
        <>
            <Link to={`/sign-up`} className={`w-full`}>
                <SecondaryButton
                    content={`Sign Up`}
                    className={`w-full lg:w-[115px] h-[49px] text-customPrimaryColor`}
                />
            </Link>
            <Link to={`/log-in`} className={`w-full`}>
                <PrimaryButton
                    content={`Log In`}
                    className={`w-full lg:w-[115px] h-[49px]`}
                />
            </Link>
        </>
    )
}

export default OnboardingButtons