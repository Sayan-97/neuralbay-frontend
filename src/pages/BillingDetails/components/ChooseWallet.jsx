import React, { useState } from 'react'
import MetamaskImg from '../../../assets/images/Metamask.png'
import CoinBaseImg from '../../../assets/images/CoinBase.png'
import WalletConnectImg from '../../../assets/images/WalletConnect.png'

const ChooseWallet = () => {

    const [ selectedWallet, setSelectedWallet ] = useState(null)

    const wallets = [
        {
            name: 'Metamask',
            img: MetamaskImg
        },
        {
            name: 'Coinbase Wallet',
            img: CoinBaseImg
        },
        {
            name: 'WalletConnect',
            img: WalletConnectImg
        },
    ]

    return (
        <div className='border-2 border-black border-opacity-10 p-6 space-y-6 flex flex-col rounded-custom-Large'>
            <h3 className='text-[2rem] font-bold'>Choose Wallet</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {wallets.map((item, index) => (
                    <div 
                        onClick={() => setSelectedWallet(item.name)}
                        key={index}
                        className={`flex items-center justify-between bg-black bg-opacity-10 px-4 py-3 rounded-custom-Small cursor-pointer`}
                    >
                        <div className='flex items-center gap-2'>
                            <img
                                src={item.img}
                                alt="img"
                                className='w-14 h-14 rounded-full object-cover'
                            />
                            <p className='text-[1.25rem] font-medium'>{item.name}</p>
                        </div>
                        <div className='bg-white border border-primaryColor w-6 h-6 rounded-full flex items-center justify-center'>
                            {selectedWallet === item.name && (
                                <div className='bg-primaryColor rounded-full p-2'></div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ChooseWallet