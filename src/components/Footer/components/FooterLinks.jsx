import React from 'react'
import { Link } from 'react-router-dom'

const FooterLinks = () => {

    const footerLinks = [
        { label: 'Marketplace', link: '/marketplace' },
        { label: 'About Us', link: '' },
        { label: 'Contact Us', link: '' },
        { label: 'Learn More', link: '' },
        { label: 'Privacy', link: '' },
    ]


    return (
        <ul className='flex max-md:flex-wrap items-center gap-4'>
            {footerLinks.map((item, index) => (
                <li
                    key={index}
                    className={`text-black font-customMedium text-lg`}
                >
                    <Link to={item.link}>{item.label}</Link>
                </li>
            ))}
        </ul>
    )
}

export default FooterLinks