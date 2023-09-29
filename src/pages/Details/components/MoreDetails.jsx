import React from 'react'

const MoreDetails = ({ projectUrl, organizationId, serviceId, contributers }) => {
    return (
        <div className='p-6 border border-borderColor rounded-customLarge space-y-4'>
            <h4 className='text-[1.5rem] font-customBold text-black'>Details</h4>
            <div className='grid gap-4 text-[1.125rem]'>
                <div className='flex items-center gap-1 flex-wrap'>
                    <p className='text-black font-customMedium'>Project URL:</p>
                    <p className='text-customPrimaryColor'>{projectUrl}</p>
                </div>
                <div className='flex items-center gap-1 flex-wrap'>
                    <p className='text-black font-customMedium'>Organization ID:</p>
                    <p>{organizationId}</p>
                </div>
                <div className='flex items-center gap-1 flex-wrap'>
                    <p className='text-black font-customMedium'>Service ID:</p>
                    <p>{serviceId}</p>
                </div>
                <div className='flex items-center gap-1 flex-wrap'>
                    <p className='text-black font-customMedium'>Contributers:</p>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center'>
                            {contributers.map((item, index) => (
                                <img
                                    key={index}
                                    src={item.contributerImg}
                                    alt="img"
                                    className={`w-6 h-6 object-cover rounded-full ${index > 0 && ('-ml-3')}`}
                                />
                            ))}
                        </div>
                        <p>{contributers.length} Contributers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoreDetails