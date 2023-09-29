import React from 'react'

const DetailsAndOverview = () => {
    return (
        <div className='bg-[#F5F5F5] p-6 rounded-customLarge space-y-4'>
            <h4 className='text-2xl font-customBold'>Details & Overview</h4>
            {/* Model Name */}
            <div className='grid gap-1'>
                <label htmlFor="modelName">Model Name*</label>
                <input
                    type="text"
                    name="modelName"
                    id="modelName"
                    placeholder='Enter the name of your model'
                />
            </div>
            {/* Developed By */}
            <div className='grid gap-1'>
                <label htmlFor="developedBy">Developed By</label>
                <input 
                    type="text" 
                    name='developedBy'
                    id='developedBy'
                    placeholder='Developed by'
                />
            </div>
            {/* Short Description */}
            <div className='grid gap-1'>
                <label htmlFor="shortDesc">Description*</label>
                <textarea
                    id='shortDesc'
                    name='shortDesc'
                    rows={`3`}
                    placeholder='Describe your model in short'
                />
            </div>
        </div>
    )
}

export default DetailsAndOverview