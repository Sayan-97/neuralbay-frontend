import React from 'react'
import { Features, Hero, TrustedPartners } from './components'

const Home = () => {
    return (
        <>
            <div className='flex flex-col'>
                <Hero />
                <TrustedPartners />
            </div>
            <Features />
        </>
    )
}

export default Home