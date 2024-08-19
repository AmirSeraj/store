import Image from 'next/image'
import React from 'react'
import { CardSpotlight } from './ui/card-spotlight'

const VerticalCard = ({ img, discount, title, price }) => {
    return (
        <CardSpotlight className='w-full flex flex-col items-center gap-3 cursor-pointer hover:shadow-xl relative'>
            {/* <div className='p-3 aspect-square flex flex-col gap-1 bg-[#f2f2f2] relative'> */}
            <div dir='ltr' className={`absolute top-3 right-3 rounded-sm bg-green-500 py-1 px-1.5 text-[0.6rem] flex justify-center items-center font-bold z-50 ${!discount && 'hidden'}`}>
                - {Number(discount).toLocaleString()} off
            </div>
            {/* <div className='w-full h-full p-5 relative'> */}
            <Image alt={title} className='bg-none' width={190} height={160} src={img} />
            {/* </div> */}
            {/* </div> */}
            <div className='px-2 flex flex-col gap-3'>
                <p className='font-bold text-sm text-slate-700'>{title}</p>
                <div className='flex items-center gap-1 text-slate-700'>
                    <span className='font-bold'>{Number(price).toLocaleString()}</span>
                    <span className='text-xs'>تومان</span>
                </div>
            </div>
        </CardSpotlight>
    )
}

export default VerticalCard
