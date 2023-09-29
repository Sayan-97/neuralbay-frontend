import React from 'react'

const ModelDetails = ({ modelOverview, developedBy, modelType, languages, licence, modelDesc, moreInfo }) => {
    return (
        <div className='grid gap-6'>
            {/* Overview */}
            <div className='grid gap-4'>
                <h3 className='text-[1.5rem] font-customBold text-black'>Overview</h3>
                <p className='text-[1.125rem] leading-normal'>{modelOverview}</p>
            </div>
            {/* Model Details */}
            <div className='grid gap-4'>
                <h3 className='text-[1.5rem] font-customBold text-black'>Model Details</h3>
                <div className='grid gap-4 text-lg'>
                    <p className='text-[1.125rem] leading-normal'><span className='text-black font-customBold'>Developed By:</span> {developedBy}</p>
                    <p className='text-[1.125rem] leading-normal'><span className='text-black font-customBold'>Model type:</span> {modelType}</p>
                    <p className='text-[1.125rem] leading-normal'><span className='text-black font-customBold'>Language(s):</span> {languages}</p>
                    <p className='text-[1.125rem] leading-normal'><span className='text-black font-customBold'>License:</span> {licence}</p>
                    <p className='text-[1.125rem] leading-normal'><span className='text-black font-customBold'>Model Description:</span> {modelDesc}</p>
                    <p className='text-[1.125rem] leading-normal'><span className='text-black font-customBold'>Resources for more information:</span> {moreInfo}</p>
                </div>
            </div>
            {/* Use Cases */}
            <div className='grid gap-4'>
                <h3 className='text-[1.5rem] font-customBold text-black'>Use Cases</h3>
                <div className='grid gap-4 text-lg'>
                    <p className='text-[1.125rem] leading-normal text-black font-customBold'>Direct Use</p>
                    <ul className='text-[1.125rem] leading-normal list-disc list-inside'>
                        <p>The model is intended for research purposes only. Possible research areas and tasks include</p>
                        <li>Safe deployment of models which have the potential to generate harmful content.</li>
                    </ul>

                    <p className='text-[1.125rem] leading-normal text-black font-customBold'>Misuse and Malicious Use</p>
                    <ul className='text-[1.125rem] leading-normal list-disc list-inside'>
                        <p>Using the model to generate content that is cruel to individuals is a misuse of this model. This includes, but is not limited to:</p>
                        <li>Safe deployment of models which have the potential to generate harmful content.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ModelDetails