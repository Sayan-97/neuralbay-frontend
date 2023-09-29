import React from 'react'

const PrimaryButton = ({ type, task, className, content }) => {
    return (
        <button
            type={type}
            onClick={task}
            className={`rounded-customSmall bg-customPrimaryColor text-white font-customBold ${className}`}
        >
            {content}
        </button>
    )
}

export default PrimaryButton