import React from 'react'
import { FaTwitter, FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa'

const FooterSocials = () => {

    const footerSocials = [
        { icon: <FaTwitter />, link: '' },
        { icon: <FaLinkedin />, link: '' },
        { icon: <FaFacebook />, link: '' },
        { icon: <FaGithub />, link: '' },
    ]

    return (
        <div className='flex items-center gap-4'>
            {footerSocials.map((item, index) => (
                <a
                    key={index}
                    href={item.link}
                    className={`text-2xl`}
                >
                    {item.icon}
                </a>
            ))}
        </div>
    )
}

export default FooterSocials