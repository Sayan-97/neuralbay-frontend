import React, { useState, Fragment } from 'react'
import { useNavigate } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/reducers/authReducer';

const UserMenu = () => {

    // Set the value of the open navbar dropdown
    const [openIndex, setOpenIndex] = useState(false)
    // Handle open and close of the drowpdown menu
    const handleToggleMenu = () => {
        setOpenIndex(!openIndex)
    }

    const dispatch = useDispatch()
    const handleLogOut = () => {
        dispatch(logout())
        useNavigate('/')
    }

    return (
        <div 
            className='relative'
            onMouseEnter={handleToggleMenu}
            onMouseLeave={handleToggleMenu}
        >
            <img 
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" 
                alt="img"
                className='w-[49px] h-[49px] rounded-full object-cover'
            />
            <Transition
                show={openIndex}
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <div>
                    <div className='absolute w-[250px] right-0 pt-3'>
                        <div onClick={handleLogOut} className='bg-white shadow border px-5 py-2 divide-y divide-customBorderColor rounded-customSmall'>
                            Exit
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    )
}

export default UserMenu