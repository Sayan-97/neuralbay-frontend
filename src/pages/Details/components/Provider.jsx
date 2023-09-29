import React from 'react'
import { Link } from 'react-router-dom'
import { MdVerified } from 'react-icons/md'

const Provider = ({ providerImg, providerName, providerVerified, providerLinks }) => {
    return (
        <div className='p-6 border border-borderColor rounded-customLarge space-y-4'>
            <h4 className='text-[1.5rem] font-customBold text-black'>Provider</h4>
            <div className='flex items-center gap-4'>
                <img
                    src={providerImg}
                    alt="img"
                    className='w-28 h-28 rounded-full object-cover'
                />
                <div className='grid gap-3'>
                    <div className='flex items-center gap-2'>
                        <h3 className='text-[1.6875rem] font-customBold leading-none'>{providerName}</h3>
                        {providerVerified && (
                            <MdVerified className='text-xl text-green-500' />
                        )}
                    </div>
                    <div className='flex items-center gap-x-3 flex-wrap'>
                        {providerLinks.map((item, index) => (
                            <a
                                key={index}
                                href={item.uri}
                                className={`flex items-center gap-1 text-[#ABABAB]`}
                            >
                                <img
                                    src={item.img}
                                    alt="img"
                                    className='w-5 h-5'
                                />
                                <p>{item.url}</p>
                            </a>
                        ))}
                    </div>
                    <Link className='font-customBold text-customPrimaryColor'>View Profile</Link>
                </div>
            </div>
        </div>
    )
}

export default Provider