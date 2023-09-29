import React from 'react'
import AppLogo from '../AppLogo'
import { FooterLinks, FooterSocials } from './components'

const Footer = () => {
    return (
        <footer className='bg-[#F9FAFE]'>
            <div className='container'>
                <div className='py-4 space-y-4'>
                    <AppLogo />
                    <p className='text-[#667085]'>Vast Collection of AI Models at Your Finger Tips</p>
                    <FooterLinks />
                </div>
                <hr className='border-customBorderColor' />
                <div className='flex max-md:flex-col max-md:gap-4 items-center justify-between py-4 text-[#98A2B3]'>
                    <p>©2023 Neuralbay. All rights reserved.</p>
                    <FooterSocials />
                </div>
            </div>
        </footer>
    )
}

export default Footer