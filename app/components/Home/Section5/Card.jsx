import Image from 'next/image'
import React from 'react'
import Rating from './rating'

const Card = ({ data }) => {
  return (
    <div className='p-3 text-black flex md:flex-row flex-col min-h-[180px] border border-slate-300 rounded-lg'>
      <div className='md:w-2/5 w-full flex justify-center items-center md:order-2 order-1'>
        <Image src={data.img} width={150} height={150} />
      </div>
      <div className='md:w-3/5 w-full flex flex-col justify-evenly gap-2 md:order-1 order-2'>
        <p className='text-black 2xl:text-xl lg:text-sm '>
          {data.title}
        </p>
        <div className='flex 2xl:flex-row md:flex-col flex-row gap-1'>
          <div className='flex gap-1'>
            <p>{Number(data.price).toLocaleString()}</p>
            <span>تومان</span>
          </div>
          <div className='flex items-center gap-1 line-through'>
            <p className='text-xs'>{Number(data.final_price).toLocaleString()}</p>
            <span className='text-xs'>تومان</span>
          </div>
        </div>
        <Rating value={data.rating} />
      </div>
    </div>
  )
}

export default Card
