import React from 'react'
import RightSection from './RightSection'

const Section2 = () => {
  return (
    <div className='grid grid-cols-12 w-full bg-white gap-4 2xl:px-[18%] xl:px-[13%] sm:px-[8%] px-[5%]'>
      <RightSection />
      <div className='relative grid lg:col-span-4 col-span-12 -skew-x-3 border-r-2 border-slate-400 lg:order-2 order-1'>

        <div className='absolute top-0 lg:-left-7 left-0 skew-x-3 bg-black w-full h-[73px]' />
        <div className='w-full bg-black h-[73px] flex justify-start items-center pr-10 z-50'>
          <h2 class="title_text text-white mb-0"><strong>Deals</strong> of the week</h2>
        </div>

        <div className='skew-x-3 overflow-hidden flex flex-col'>

        </div>
      </div>
    </div>
  )
}

export default Section2