import React from 'react'
import { AppLogo, SecondaryButton } from '../components'
import GoogleIcon from '../assets/images/google.png'
import GithubIcon from '../assets/images/github.png'
import MicrosoftIcon from '../assets/images/microsoft.png'

const LogIn = () => {

    const authServices = [
        { icon: GoogleIcon, title: 'Google' },
        { icon: GithubIcon, title: 'GitHub' },
        { icon: MicrosoftIcon, title: 'Microsoft' },
    ]

    return (
        <div className='relative container py-12'>
            <form
                className='bg-white px-8 py-16 lg:w-[36%] 3xl:w-[30%] mx-auto rounded-custom-Large grid justify-items-center gap-8'
            >
                <AppLogo 
                    className={`flex-col`}
                />
                <div className='grid justify-items-center gap-4'>
                    <h2 className='text-[2rem] font-customBold'>Welcome Back</h2>
                    <p className='text-[#7A7A7A]'>Log In to Continue</p>
                </div>
                <div className='w-full grid gap-4'>
                    {authServices.map((item, index) => (
                        <SecondaryButton
                            type={`submit`}
                            key={index}
                            content={<><img src={item.icon} alt="img" /> Log in with {item.title}</>}
                            className={`p-2.5 flex items-center justify-center gap-2`}
                        />
                    ))}
                </div>
                <p>Don't have an Account? <span className='text-primaryColor font-customBold'>Sign Up Here</span></p>
            </form>
        </div>
    )
}

export default LogIn