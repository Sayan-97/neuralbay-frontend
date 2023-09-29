import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { IoMenu, IoClose } from 'react-icons/io5'
import AppLogo from '../AppLogo'
import { HeaderLinks, OnboardingButtons, SearchBar, UserMenu } from './components'
import PrimaryButton from '../PrimaryButton'

const Header = () => {

    // Store the current state of the user in a variable
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [navOpen, setNavOpen] = useState(false)
    // Function to Open and Close the Navbar on Mobile View
    const handleNavOpen = () => {
        setNavOpen(!navOpen)
    }
    // Function to check the innerWidth of the screen
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1024);
        };
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
        // Initial check on component mount
        handleResize();
        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className='fixed inset-x-0 bg-white py-2 shadow z-40'>
            <nav className='container flex items-center max-lg:justify-between lg:gap-8'>
                {/* Header Logo */}
                <Link to={`/`}>
                    <AppLogo />
                </Link>
                {/* For Large Screens */}
                <div className='max-lg:hidden flex-grow flex items-center justify-between'>
                    {/* Header Links */}
                    <HeaderLinks />
                    <div className='flex items-center gap-4'>
                        {/* SearchBar */}
                        <SearchBar />
                        <div className='flex items-center gap-4'>
                            {/* SignUp and SignIn Buttons */}
                            {isAuthenticated ? (
                                <>
                                    <Link to={`/marketplace/upload-a-model`}>
                                        <PrimaryButton
                                            content={`Upload`}
                                            className={`px-6 h-[49px]`}
                                        />
                                    </Link>
                                    <UserMenu />
                                </>
                            ) : (
                                <OnboardingButtons />
                            )}
                        </div>
                    </div>
                </div>
                {/* For Small Screens */}
                {isSmallScreen && (
                    <div className={`absolute inset-x-0 top-[100%] bg-white py-4 shadow transform ${navOpen ? 'scale-y-100 origin-top' : 'scale-y-0 origin-top'} transition-all duration-200 ease-in-out`}>
                        <div className='container grid gap-4'>
                            {/* Header Links */}
                            <HeaderLinks />
                            {/* SearchBar */}
                            <SearchBar />
                            <div className='flex items-center gap-4'>
                                {/* SignUp and SignIn Buttons */}
                                <OnboardingButtons />
                            </div>
                        </div>
                    </div>
                )}
                {/* Open/Close Navbar on Small Screens */}
                {isSmallScreen && (
                    <div className='text-2xl'>
                        {navOpen ? (
                            <IoClose onClick={handleNavOpen} />
                        ) : (
                            <IoMenu onClick={handleNavOpen} />
                        )}
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Header