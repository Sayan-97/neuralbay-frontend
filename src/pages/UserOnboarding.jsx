import React from 'react'
import { PrimaryButton } from '../components'
import OnboardingForm from '../forms/OnboardingForm'

const UserOnboarding = () => {

    const UploadSvg = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M17 9.00195C19.175 9.01395 20.353 9.11095 21.121 9.87895C22 10.758 22 12.172 22 15V16C22 18.829 22 20.243 21.121 21.122C20.243 22 18.828 22 16 22H8C5.172 22 3.757 22 2.879 21.122C2 20.242 2 18.829 2 16V15C2 12.172 2 10.758 2.879 9.87895C3.647 9.11095 4.825 9.01395 7 9.00195" stroke="#7B68EE" stroke-width="1.5" stroke-linecap="round" />
            <path d="M12 15V2M12 2L15 5.5M12 2L9 5.5" stroke="#7B68EE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )

    return (
        <OnboardingForm
            content={
                <>
                    <div className='grid justify-items-center gap-3'>
                        <h3 className='text-4xl font-customBold'>Complete Your Profile</h3>
                        <p className='text-[#7A7A7A]'>One Last Step to Join the Community</p>
                    </div>
                    <div className='grid justify-items-center gap-4'>
                        <div className='bg-[#F5F5F5] p-12 rounded-full'>
                            <UploadSvg />
                        </div>
                        <p className='text-center font-customMedium'>Upload your Avatar <br /> (Optional)</p>
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                        <div className='grid gap-1'>
                            <label htmlFor="userName">Username</label>
                            <input
                                type="text"
                                id='userName'
                                placeholder='Enter Your Username'
                            />
                        </div>
                        <div className='grid gap-1'>
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                id='fullName'
                                placeholder='Enter Your Full name'
                            />
                        </div>
                        <div className='flex items-center gap-2'>
                            <input
                                type="checkbox"
                                id='tnc'
                                className='w-4 h-4'
                            />
                            <label htmlFor="tnc">I have read and agree with the Terms of Service</label>
                        </div>
                    </div>
                    <PrimaryButton
                        type={`submit`}
                        content={`Create Account`}
                        className={`w-full p-3`}
                    />
                </>
            }
        />
    )
}

export default UserOnboarding