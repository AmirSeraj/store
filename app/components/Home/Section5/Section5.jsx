import React from 'react'
import { MultiStepLoaderDemo } from './MultiStepLoaderDemo'
import Card from './Card'

const Section5 = () => {
    return (
        <div className='w-full flex h-[90vh] my-5'>
            <div className='w-[500px] h-full bg-[url("/bg_11.jpg")] md:block hidden'>
                <MultiStepLoaderDemo />
            </div>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:p-10 sm:p-5 p-3'>
                <Card />
            </div>
        </div>
    )
}

export default Section5
