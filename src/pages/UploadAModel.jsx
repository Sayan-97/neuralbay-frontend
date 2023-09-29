import React from 'react'
import { UploadModelForm } from '../forms'

const UploadAModel = () => {
    return (
        <div className='container lg:w-[48%] py-12 space-y-6'>
            <h2 className='text-3xl font-customBold text-black'>Upload A Model</h2>
            <UploadModelForm />
        </div>
    )
}

export default UploadAModel