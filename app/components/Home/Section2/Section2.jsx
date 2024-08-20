import React from 'react'
import RightSection from './RightSection'
import SwiperSection2 from './SwiperSection2'

const Section2 = () => {
  return (
    <div className='grid grid-cols-12 w-full bg-white gap-2 2xl:px-[18%] xl:px-[13%] sm:px-[8%] px-[5%] overflow-hidden place-items-center'>

      <div className='grid lg:col-span-8 col-span-12 pl-5 py-4 lg:order-1 order-2'>
        <RightSection />
      </div>
      <div className='grid lg:col-span-4 col-span-12 lg:-skew-x-3 border-r-2 border-slate-400 lg:order-2 order-1 relative h-[70vh]'>
        <div className='w-full absolute h-[73px] top-0 left-0 bg-black' />
        <div className='lg:skew-x-3 bg-transparent w-full h-full flex flex-col border-l-2 border-slate-400 overflow-hidden'>
          <div className='w-full bg-black h-[73px] flex justify-start items-center pr-3 z-50'>
            <h2 class="title_text text-white"><strong>پیشنهادات</strong> هفته</h2>
          </div>
          <SwiperSection2 />
          <div className='mt-auto bg-slate-400 lg:w-[96%] w-full h-[2px] absolute left-0 bottom-0' />
        </div>
      </div>

      {/* <RightSection />
      <div className='relative grid lg:col-span-4 col-span-12 -skew-x-3 border-r-2 border-slate-400 lg:order-2 order-1'>

        <div className='absolute top-0 lg:-left-7 left-0 skew-x-3 bg-black w-full h-[73px]' />
        <div className='w-full bg-black h-[73px] flex justify-start items-center pr-10 z-50'>
          <h2 class="title_text text-white mb-0"><strong>Deals</strong> of the week</h2>
        </div>

        <div className='skew-x-3 overflow-hidden flex flex-col'>

        </div>
      </div> */}
    </div>
  )
}

export default Section2