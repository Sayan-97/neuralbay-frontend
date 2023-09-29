import React from 'react'
import { PrimaryButton } from '../../../components'

const BillingForm = ({ handleSubmit }) => {

    const cities = ['New York', 'Washington DC', 'Malbourne']
    const states = ['New York', 'Washington DC', 'Malbourne']

    return (
        <form className='border-2 border-black border-opacity-10 p-6 space-y-6 flex flex-col rounded-custom-Large'>
            <div className='space-y-6'>
                <h3 className='text-[2rem] font-bold'>Billing Details</h3>
                <p>Neuralbay collects and uses personal data in accordance with our <a href="#" className='text-primaryColor'>Privacy Policy</a>. By creating an account, you agree to our <a href="#" className='text-primaryColor'>Terms and Conditions</a>.</p>
            </div>
            <div className='grid gap-4'>
                <div className='grid md:grid-cols-2 gap-4'>
                    {/* First Name */}
                    <div className='grid gap-1'>
                        <label
                            htmlFor="firstName"
                            className='text-[1.125rem]'
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            id='firstName'
                            placeholder='Enter your first name'
                            className='border-2 rounded-custom-Small p-2.5'
                        />
                    </div>
                    {/* Last Name */}
                    <div className='grid gap-1'>
                        <label
                            htmlFor="lastName"
                            className='text-[1.125rem]'
                        >
                            Last Name
                        </label>
                        <input
                            type="text"
                            id='lastName'
                            placeholder='Enter your last name'
                            className='border-2 rounded-custom-Small p-2.5'
                        />
                    </div>
                </div>
                {/* Company Name */}
                <div className='grid gap-1'>
                    <label
                        htmlFor="companyName"
                        className='text-[1.125rem]'
                    >
                        Company Name
                    </label>
                    <input
                        type="text"
                        id='companyName'
                        placeholder='Enter your company name'
                        className='border-2 rounded-custom-Small p-2.5'
                    />
                </div>
                {/* Country Name */}
                <div className='grid gap-1'>
                    <label
                        htmlFor="country"
                        className='text-[1.125rem]'
                    >
                        Country
                    </label>
                    <input
                        type="text"
                        id='country'
                        placeholder='Enter your country name'
                        className='border-2 rounded-custom-Small p-2.5'
                    />
                </div>
                {/* Address Line 1 */}
                <div className='grid gap-1'>
                    <label
                        htmlFor="al1"
                        className='text-[1.125rem]'
                    >
                        Address Line 1
                    </label>
                    <input
                        type="text"
                        id='al1'
                        placeholder='Enter your billing address'
                        className='border-2 rounded-custom-Small p-2.5'
                    />
                </div>
                {/* Address Line 2 */}
                <div className='grid gap-1'>
                    <label
                        htmlFor="al2"
                        className='text-[1.125rem]'
                    >
                        Address Line 2
                    </label>
                    <input
                        type="text"
                        id='al2'
                        placeholder='Eg: street, locality'
                        className='border-2 rounded-custom-Small p-2.5'
                    />
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {/* City */}
                    <div className='grid gap-1'>
                        <label
                            htmlFor="city"
                            className='text-[1.125rem]'
                        >
                            City
                        </label>
                        <select
                            name="city"
                            id="city"
                            className='border-2 rounded-custom-Small p-2.5 outline-none'
                        >
                            {cities.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                    {/* State */}
                    <div className='grid gap-1'>
                        <label
                            htmlFor="state"
                            className='text-[1.125rem]'
                        >
                            State
                        </label>
                        <select
                            name="state"
                            id="state"
                            className='border-2 rounded-custom-Small p-2.5 outline-none'
                        >
                            {states.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                    {/* Zip Code */}
                    <div className='grid gap-1'>
                        <label
                            htmlFor="zip"
                            className='text-[1.125rem]'
                        >
                            Zip Code
                        </label>
                        <input
                            type="number"
                            id='zip'
                            placeholder=''
                            className='border-2 rounded-custom-Small p-2.5'
                        />
                    </div>
                </div>
            </div>
            {/* Submit */}
            <PrimaryButton
                task={handleSubmit}
                content={`Save and Continue`}
                className={`px-6 py-3 self-end`}
            />
        </form>
    )
}

export default BillingForm