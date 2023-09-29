import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { BillingDetails, Details, Home, Login, Marketplace, PaymentStatus, SignUp, UploadAModel, UserOnboarding } from '../pages'

const RootRoutes = () => {
    return (
        <Routes>
            {/* Landing Page */}
            <Route path='/' element={<Home />}/>
            {/* Marketplace Page */}
            <Route path='/marketplace' element={<Marketplace />}/>
            {/* Model Details Page */}
            <Route path='/marketplace/:modelId' element={<Details />}/>
            {/* Upload Form Page */}
            <Route path='/marketplace/upload-a-model' element={<UploadAModel />}/>
            {/* Billing Details */}
            <Route path='/marketplace/billing-details' element={<BillingDetails />}/>
            <Route path='/marketplace/payment-status' element={<PaymentStatus />}/>
            {/* SignUp Page */}
            <Route path='/sign-up' element={<SignUp />} />
            {/* LogIn Page */}
            <Route path='/log-in' element={<Login />} />
            {/* Onboarding / Complete Profile Page */}
            <Route path='/onboarding' element={<UserOnboarding />} />
        </Routes>
    )
}

export default RootRoutes