import React, { useState } from 'react'
import { BillingDetails, Head, OrderSummery } from './components'

const PaymentStatus = () => {

    const [ paymentSuccess, setPaymentSuccess ] = useState(true);

    return (
        <div>
            <Head
                paymentSuccess={paymentSuccess}
            />
            <div className='container py-12 space-y-12'>
                <OrderSummery 
                    paymentSuccess={paymentSuccess}
                />
                <BillingDetails />
            </div>
        </div>
    )
}

export default PaymentStatus