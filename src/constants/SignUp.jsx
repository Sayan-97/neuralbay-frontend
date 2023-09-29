import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppLogo, SecondaryButton } from '../components'
import GoogleIcon from '../assets/images/google.png'
import GithubIcon from '../assets/images/github.png'
import MicrosoftIcon from '../assets/images/microsoft.png'
import OnboardingForm from '../forms/OnboardingForm'

const SignUp = () => {

    const navigate = useNavigate();

    const authServices = [
        { icon: GoogleIcon, title: 'Google' },
        { icon: GithubIcon, title: 'GitHub' },
        { icon: MicrosoftIcon, title: 'Microsoft' },
    ]

    const handleSignUp = () => {
        navigate('/onboarding')
    }

    return (
        <OnboardingForm
            content={
                <>
                    <AppLogo
                        className={`flex-col`}
                    />
                    <div className='grid justify-items-center gap-3'>
                        <h3 className='text-4xl font-customBold'>Join Neuralbay</h3>
                        <p className='text-[#7A7A7A]'>Be the part of AI Revolution</p>
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                        {authServices.map((item, index) => (
                            <SecondaryButton
                                key={index}
                                task={handleSignUp}
                                content={
                                    <>
                                        <img
                                            src={item.icon}
                                            alt="img"
                                        />
                                        Sign up with {item.title}
                                    </>
                                }
                                className={`flex items-center justify-center gap-2 px-2 py-3`}
                            />
                        ))}
                    </div>
                    <p>Already have an account? <Link to={`/log-in`} className={`text-customPrimaryColor font-customBold`}>Log In Here</Link></p>
                </>
            }
        />
    )
}

export default SignUp