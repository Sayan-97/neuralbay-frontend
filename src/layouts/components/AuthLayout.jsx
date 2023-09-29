import React from 'react'
import { Header } from '../../components'
import { RootRoutes } from '../../routes'
import ExampleBG from '../../assets/images/ExampleBG.jpg'

const AuthLayout = () => {
    return (
        <>
            <Header />
            <div 
                className='flex-grow mt-16 flex items-center justify-center'
                style={{
                    background: `url(${ExampleBG})`
                }}
            >
                <RootRoutes />
            </div>
        </>
    )
}

export default AuthLayout