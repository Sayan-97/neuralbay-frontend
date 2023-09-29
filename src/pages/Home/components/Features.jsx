import React from 'react'
import FeaturesImg1 from '../../../assets/images/FeaturesImg1.png'
import FeaturesImg2 from '../../../assets/images/FeaturesImg2.png'
import FeaturesImg3 from '../../../assets/images/FeaturesImg3.png'

const Features = () => {
    return (
        <div className='container grid gap-8 py-16'>
            <div className='grid gap-6 text-center'>
                <h2 className='text-5xl text-[#101828] font-customBold'>Our Powerful Features</h2>
                <p className='text-lg'>Our Web 3 AI Model Marketplace is your one-stop destination for accessing, testing, and purchasing a wide range of AI models<br /> developed by talented AI engineers from around the world.</p>
            </div>
            <div className='grid grid-cols-12 lg:grid-rows-2 gap-6'>
                {/* Feature 1 */}
                <div className='col-span-12 lg:col-span-6 lg:row-span-1 p-6 bg-[#EAF4FF] rounded-customLarge flex max-md:flex-col items-center gap-4'>
                    <div className='lg:w-1/2 flex flex-col gap-4'>
                        <h3 className='text-[2rem] leading-tight text-[#101828] font-customBold'>Secured By Blockchain Tech</h3>
                        <p className='text-lg'>Neuralbay is the ultimate AI Model Marketplace, offering a wide selection of state-of-the-art AI models created by talented AI engineers from across the globe.</p>
                    </div>
                    <img
                        src={FeaturesImg1}
                        alt="img"
                        className=''
                    />
                </div>
                {/* Feature 2 */}
                <div className='col-span-12 lg:col-span-6 lg:row-span-2 p-6 lg:p-12 bg-[#FFF1FC] rounded-customLarge flex flex-col items-center justify-between'>
                    <img
                        src={FeaturesImg3}
                        alt="img"
                        className=''
                    />
                    <div className='w-full flex flex-col gap-4'>
                        <h3 className='text-[2rem] leading-tight text-[#101828] font-customBold'>Vast Collection<br/> of AI Models</h3>
                        <p className='text-lg'>Neuralbay is the ultimate AI Model Marketplace, offering a wide selection of state-of-the-art AI models created by talented AI engineers from across the globe.</p>
                    </div>
                </div>
                {/* Feature 3 */}
                <div className='col-span-12 lg:col-span-6 lg:row-span-1 p-6 bg-[#FEF5E9] rounded-customLarge flex max-md:flex-col items-center gap-4'>
                    <div className='lg:w-1/2 flex flex-col gap-4'>
                        <h3 className='text-[2rem] leading-tight text-[#101828] font-customBold'>Upload and Monitize</h3>
                        <p className='text-lg'>Neuralbay is the ultimate AI Model Marketplace, offering a wide selection of state-of-the-art AI models created by talented AI engineers from across the globe.</p>
                    </div>
                    <img
                        src={FeaturesImg2}
                        alt="img"
                        className=''
                    />
                </div>
            </div>
        </div>
    )
}

export default Features