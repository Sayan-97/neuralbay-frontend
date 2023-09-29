import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { CurrentPrice, FilesAndVersions, ModelDetails, MoreDetails, Provider, RatingsAndReviews, ShortDesc, Tags } from './components'
import { models } from '../../constants'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { GoGitBranch } from 'react-icons/go'
import { PiStar } from 'react-icons/pi'

const Details = () => {

    const { modelId } = useParams()
    const model = models.find((item) => item.modelId === modelId)

    // Set active model tag
    const [activeTag, setActiveTag] = useState('Model Details')
    // Tabs for the model details
    const tabs = [
        { icon: <AiOutlineExclamationCircle />, title: 'Model Details' },
        { icon: <GoGitBranch />, title: 'Files and Versions' },
        { icon: <PiStar />, title: 'Ratings and Reviews' }
    ]

    return (
        <div className='flex flex-col'>
            <div className='relative py-12 bg-customBackgroundGreyGrad shadow'>
                <div className='container grid grid-cols-10 items-center gap-4 3xl:gap-8 pb-12'>
                    <div className='col-span-10 lg:col-span-6 grid grid-cols-5 items-stretch gap-6'>
                        <div className='col-span-5 lg:col-span-2 py-2'>
                            <img
                                src={model.modelImg}
                                alt="img"
                                className='w-full h-full rounded-customLarge object-cover'
                            />
                        </div>
                        <ShortDesc
                            modelName={model.modelName}
                            providerImg={model.providerImg}
                            providerName={model.providerName}
                            shortDes={model.shortDes}
                            likes={model.likes}
                            reviews={model.reviews}
                        />
                    </div>
                    <div className='col-span-10 lg:col-span-4'>
                        <CurrentPrice
                            modelPrice={model.modelPrice}
                        />
                    </div>
                </div>
                <div className='absolute inset-x-0 -bottom-2 container flex items-center gap-8 py-2 whitespace-nowrap max-md:overflow-x-scroll'>
                    {tabs.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveTag(item.title)}
                            className={`flex items-center gap-2 py-2 border-b-[3px] text-lg ${activeTag === item.title ? 'border-b-customPrimaryColor' : 'text-[#8C8C8C] border-transparent'}  cursor-pointer`}
                        >
                            <p>{item.icon}</p>
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='container py-12 grid grid-cols-10 items-start gap-4 3xl:gap-8'>
                <div className={`${activeTag === 'Files and Versions' ? 'col-span-10' : 'col-span-10 lg:col-span-6 lg:mr-28'}`}>
                    {activeTag === 'Model Details' ? (
                        <ModelDetails
                            modelOverview={model.modelOverview}
                            developedBy={model.developedBy}
                            modelType={model.modelType}
                            languages={model.languages}
                            licence={model.licence}
                            modelDesc={model.modelDesc}
                            moreInfo={model.moreInfo}
                        />
                    ) : activeTag === 'Files and Versions' ? (
                        <FilesAndVersions />
                    ) : (
                        <RatingsAndReviews
                            reviews={model.reviews}
                        />
                    )}
                </div>
                {activeTag !== 'Files and Versions' && (
                    <div className='col-span-10 lg:col-span-4 space-y-8'>
                        <Tags
                            modelTags={model.modelTags}
                        />
                        <Provider
                            providerImg={model.providerImg}
                            providerName={model.providerName}
                            providerVerified={model.providerVerified}
                            providerLinks={model.providerLinks}
                        />
                        <MoreDetails
                            projectUrl={model.projectUrl}
                            organizationId={model.organizationId}
                            serviceId={model.serviceId}
                            contributers={model.contributers}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Details