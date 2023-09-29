import React from 'react'
import { Link } from 'react-router-dom'
import StarImg from '../../../assets/images/Star.svg'

const ModelCard = ({ modelImg, modelName, providerName, ratings, shortDes, modelId }) => {
    return (
        <div className='w-full h-full flex flex-col'>
            <img
                src={modelImg}
                alt="img"
                className='w-full h-[187px] object-cover rounded-t-customLarge'
            />
            <div className='flex-grow flex flex-col gap-2 border border-customBorderColor rounded-b-customLarge p-4'>
                <div className='w-full grid gap-2'>
                    <div className='flex items-center justify-between gap-2 flex-wrap'>
                        <h3 className='text-xl font-customBold'>{modelName}</h3>
                        <div className='flex items-center gap-2'>
                            <img
                                src={StarImg}
                                alt="img"
                            />
                            <p className='text-sm text-[#8E8E8E]'>{ratings} Ratings</p>
                        </div>
                    </div>
                    <p className='text-sm text-[#B8B8B8]'>{providerName}</p>
                </div>
                <p className='flex-grow'>{shortDes}</p>
                <Link
                    to={`/marketplace/${modelId}`}
                    className={`font-customBold text-customPrimaryColor`}
                >
                    Learn More
                </Link>
            </div>
        </div>
    )
}

export default ModelCard