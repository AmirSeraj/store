import React from 'react'

const Section2 = () => {
  return (
    <div className='grid grid-cols-12 w-full bg-white h-[400px]'>
        <div className='grid lg:col-span-8 col-span-12 bg-red-400'></div>
        <div className='grid lg:col-span-4 col-span-12 -skew-x-3 border-r-2 border-slate-400'>

            <div className='w-full bg-black h-[80px] flex justify-start items-center pr-10'>
            <h2 class="title_text text-white mb-0"><strong>Deals</strong> of the week</h2>
            </div>

            <div className='skew-x-3 overflow-hidden flex flex-col'>
                
            </div>
        </div>
    </div>
  )
}

export default Section2