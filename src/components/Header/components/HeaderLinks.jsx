import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import { GrFormDown } from 'react-icons/gr'

const HeaderLinks = () => {

    // Set the value of the open navbar dropdown
    const [openIndex, setOpenIndex] = useState(null)
    // Handle open and close of the drowpdown menu
    const handleToggleMenu = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }
    // Header Menus
    const headerLinks = [
        { label: 'Marketplace', link: '/marketplace' },
        {
            label: 'Category',
            dropdown: [
                { label: 'Category1', link: '' },
                { label: 'Category2', link: '' },
                { label: 'Category3', link: '' },
            ],
        },
        {
            label: 'Learn More',
            dropdown: [
                { label: 'More1', link: '' },
                { label: 'More2', link: '' },
                { label: 'More3', link: '' },
            ],
        },
    ];

    return (
        <ul className='max-lg:w-full flex max-lg:flex-col lg:items-center gap-3 lg:gap-5 text-lg lg:mt-1'>
            {headerLinks.map((item, index) => (
                item.dropdown
                    ? <li
                        key={index}
                        className='relative'
                        onMouseEnter={() => handleToggleMenu(index)}
                        onMouseLeave={handleToggleMenu}
                    >
                        <span className='flex items-center gap-1 max-lg:justify-between cursor-pointer'>
                            {item.label}
                            <GrFormDown className={`${openIndex === index && ('transform rotate-180')} transition-all ease-in-out`} />
                        </span>
                        <Transition
                            show={openIndex === index}
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <div className='absolute w-[250px] left-0 pt-3'>
                                <ul className='bg-white shadow border px-5 py-2 divide-y divide-customBorderColor rounded-customSmall'>
                                    {item.dropdown.map((item, index) => (
                                        <li
                                            key={index}
                                            className='py-3'
                                        >
                                            <a href={item.link}>{item.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Transition>
                    </li>
                    : <li key={index}>
                        <Link to={item.link}>
                            {item.label}
                        </Link>
                    </li>
            ))}
        </ul>
    )
}

export default HeaderLinks