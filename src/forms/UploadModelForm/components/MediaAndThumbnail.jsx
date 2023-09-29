import React, { useState, useRef } from 'react'
import { PrimaryButton } from '../../../components'
import { BsImages } from 'react-icons/bs'

const MediaAndThumbnail = () => {

    const thumbnailInputRef = useRef();
    const [thumbnail, setThumbnail] = useState(null);
    const handleImageClick = () => {
        thumbnailInputRef.current.click();
    }
    const handleThumbnailChange = (event) => {
        const file = event.target.files[0];
        setThumbnail(file);
    }

    return (
        <div className='bg-[#F5F5F5] p-6 rounded-customLarge space-y-4'>
            <h4 className='text-2xl font-customBold'>Media & Thumbnail</h4>
            {/* Thumbnail */}
            <div className='grid gap-1'>
                <label htmlFor="thumbnail">Thumbnail*</label>
                <div className='grid grid-cols-2 gap-2'>
                    <div className='flex flex-col justify-between items-end'>
                        <div className='w-full flex flex-col gap-1'>
                            <input
                                type="file"
                                id='thumbnail'
                                ref={thumbnailInputRef}
                                onChange={handleThumbnailChange}
                                style={{ display: 'none' }}
                            />
                            <input
                                type="text"
                                id='thumbnail'
                                placeholder='Upload a Thumbnail'
                                readOnly
                            />
                            <p className='text-sm'>JPEG, PNG, WEBP files are only supported. Dimensions 415x215px</p>
                        </div>
                        <PrimaryButton
                            content={`Upload`}
                            task={handleImageClick}
                            className={`px-6 py-3`}
                        />
                    </div>
                    <div className='w-full h-[187px] bg-white border-2 border-customPrimaryColor border-dashed rounded-customSmall flex items-center justify-center'>
                        {thumbnail ? (
                            <img   
                                src={thumbnail} 
                                alt="img" 
                            />
                        ) : (
                            <BsImages className='text-6xl text-[#B4B4B4]' />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediaAndThumbnail