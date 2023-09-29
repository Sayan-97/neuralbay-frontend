import React from 'react'

const SecondaryButton = ({ type, task, className, content }) => {
    return (
        <button
            type={type}
            onClick={task}
            className={`rounded-customSmall border border-customPrimaryColor font-customBold ${className}`}
        >
            {content}
        </button>
    )
}

export default SecondaryButton