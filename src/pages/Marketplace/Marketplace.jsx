import React, { useState } from 'react'
import { ModelCard } from './components'
import { models } from '../../constants'

const Marketplace = () => {

    const categories = [
        'All',
        'Healthcare',
        'Finance',
        'Machine Learning',
        'Marketing',
        'Art'
    ]

    // Set the default selected category to 'All'
    const [selectedCategory, setSelectedCategory] = useState('All')

    const filteredModels = selectedCategory === 'All' ? models : models.filter((item) => item.category === selectedCategory)

    return (
        <div className='container space-y-12 py-12'>
            <div className='relative flex flex-col gap-8'>
                <div className='flex items-center justify-between gap-4'>
                    <p>Sort</p>
                    <p>Filter</p>
                </div>
                <ul className='lg:absolute max-lg:w-full lg:left-[50%] lg:-translate-x-[50%] lg:top-[50%] lg:-translate-y-[50%] flex items-center gap-6 py-2 max-md:whitespace-nowrap max-md:overflow-x-scroll'>
                    {categories.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => setSelectedCategory(item)}
                            className={`rounded-[5px] text-lg ${selectedCategory === item ? 'bg-[#ECE9FF] px-5 py-2 font-customBold' : ''} cursor-pointer`}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='grid lg:grid-cols-3 3xl:grid-cols-4 gap-4'>
                {filteredModels.map((item, index) => (
                    <ModelCard 
                        key={index}
                        modelImg={item.modelImg}
                        modelName={item.modelName}
                        providerName={item.providerName}
                        ratings={item.ratings}
                        shortDes={item.shortDes}
                        modelId={item.modelId}
                    />
                ))}
            </div>
        </div>
    )
}

export default Marketplace