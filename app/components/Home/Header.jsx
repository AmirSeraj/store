import React from 'react'
import { Cover } from '../ui/cover'

const Header = ({ title1, title3 }) => {
    return (
        <>
            <div className='grid-cols-12 px-10 sm:grid hidden'>
                <div className='col-span-3 -skew-x-[25deg] bg-black h-[100px] relative'>
                    <Cover>
                        {title1}
                    </Cover>
                </div>
                <div className='text-2xl font-bold col-span-6' />
                <div className='col-span-3 -skew-x-[25deg] bg-pink-400 h-[100px] relative'>
                    <div className='w-full bg-pink-400 absolute h-full skew-x-[25deg] right-6 text-white flex justify-center items-center'>
                        {title3}
                    </div>
                </div>
            </div>
            <div className='sm:hidden block w-full px-5'>
                <Cover>
                    {title1}
                </Cover>
            </div>
        </>
    )
}

export default Header
