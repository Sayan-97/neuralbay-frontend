import React from 'react'
import { LuSearch } from 'react-icons/lu'

const SearchBar = () => {
    return (
        <div className='relative max-lg:w-full'>
            <input
                type="text"
                placeholder='Search here'
                className='w-full lg:w-[294px] h-[49px] border border-[#D7D7D7] pl-8 rounded-customLarge placeholder:text-[#8E8E8E]'
            />
            <LuSearch className='absolute text-[#8E8E8E] top-[50%] -translate-y-[50%] left-2 text-xl' />
        </div>
    )
}

export default SearchBar