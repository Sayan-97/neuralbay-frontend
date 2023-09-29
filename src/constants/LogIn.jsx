import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AppLogo, SecondaryButton } from '../components'
import GoogleIcon from '../assets/images/google.png'
import GithubIcon from '../assets/images/github.png'
import MicrosoftIcon from '../assets/images/microsoft.png'
import OnboardingForm from '../forms/OnboardingForm'
import { login } from '../redux/reducers/authReducer'

const LogIn = () => {

    const authServices = [
        { icon: GoogleIcon, title: 'Google' },
        { icon: GithubIcon, title: 'GitHub' },
        { icon: MicrosoftIcon, title: 'Microsoft' },
    ]

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogIn = () => {
        dispatch(login())
        navigate('/')
    }

    return (
        <OnboardingForm
            content={
                <>
                    <AppLogo
                        className={`flex-col`}
                    />
                    <div className='grid justify-items-center gap-3'>
                        <h3 className='text-4xl font-customBold'>Welcome Back</h3>
                        <p className='text-[#7A7A7A]'>Log In to Continue</p>
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                        {authServices.map((item, index) => (
                            <SecondaryButton
                                key={index}
                                task={handleLogIn}
                                content={
                                    <>
                                        <img
                                            src={item.icon}
                                            alt="img"
                                        />
                                        Log in with {item.title}
                                    </>
                                }
                                className={`flex items-center justify-center gap-2 px-2 py-3`}
                            />
                        ))}
                    </div>
                    <p>Don't have an account? <Link to={`/sign-up`} className={`text-customPrimaryColor font-customBold`}>Sign Up Here</Link></p>
                </>
            }
        />
    )
}

export default LogIn