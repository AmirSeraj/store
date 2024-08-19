import React from 'react'
import { Cover } from '../ui/cover'

const Header = ({ title1, title2, title3 }) => {
    return (
        <div className='w-full flex justify-center'>
            <div className='flex items-center justify-between md:w-full w-[90%]'>
                <div className='w-1/5 -skew-x-[25deg] bg-black h-[100px] relative'>
                    <Cover>
                        {title1}
                    </Cover>
                </div>
                <div className='w-3/5 px-10 text-2xl font-bold'>
                    {title2}
                </div>
                <div className='w-1/5 -skew-x-[25deg] bg-pink-400 h-[100px] relative'>
                    <div className='w-full bg-pink-400 absolute h-full skew-x-[25deg] right-6 text-white flex justify-center items-center'>
                        {title3}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
