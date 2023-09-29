import React from 'react'

const Tags = ({ modelTags }) => {
    return (
        <div className='p-6 border border-customBorderColor rounded-customLarge space-y-4'>
            <p className='text-2xl font-customBold text-black'>Tags</p>
            <div className='flex flex-wrap gap-4'>
                {modelTags.map((item, index) => (
                    <p
                        key={index}
                        className={`bg-[#EBE8FC] text-customPrimaryColor px-3 py-1 rounded-customSmall`}
                    >
                        {item}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default Tags