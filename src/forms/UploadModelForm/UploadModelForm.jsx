import React from 'react'
import { DetailsAndOverview, MediaAndThumbnail } from './components'

const UploadModelForm = () => {
    return (
        <form 
            className='space-y-4'
        >
            <DetailsAndOverview />
            <MediaAndThumbnail />
        </form>
    )
}

export default UploadModelForm