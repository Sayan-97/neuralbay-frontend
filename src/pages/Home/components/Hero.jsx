import React from 'react'
import { PrimaryButton } from '../../../components'

const Hero = () => {
    return (
        <div className='container min-h-screen flex flex-col items-center justify-center text-center space-y-6'>
            <h4 className='bg-primary-gradient text-2xl font-customBold text-transparent bg-clip-text uppercase'>welcome to neuralbay</h4>
            <h1 className='text-5xl md:text-6xl text-[#101828] font-customBold'>Discover, Experiment, Buy & Sell <br/> Pretrained AI Models</h1>
            <p className='text-lg text-[#4B5563]'>A platform that allows individuals and organisations to buy and sell pretrained AI models and services <br/> securely and transparently using blockchain technology</p>
            <PrimaryButton 
                content={`Explore`}
                className={`px-8 py-3 bg-primary-gradient`}
            />
        </div>
    )
}

export default Hero