import React from 'react'
import { useLocation } from "react-router-dom";
import { Footer, Header } from '../../components'
import { RootRoutes } from '../../routes'

const RootLayout = () => {

    const location = useLocation();
    const homePage = location.pathname === '/';

    return (
        <>
            <Header />
            <div className={`flex-grow ${homePage ? '' : 'mt-16'}`}>
                <RootRoutes />
            </div>
            <Footer />
        </>
    )
}

export default RootLayout