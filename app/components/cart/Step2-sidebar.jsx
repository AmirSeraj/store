import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Step2sidebar = () => {
    const items = [
        {
            img: '/product/related/phone1.avif',
            title: "iPhone 12 Pro 128 GB Graphite",
            number: 3,
            price: 12658984
        },
        {
            img: '/product/related/phone1.avif',
            title: "iPhone 12 Pro 128 GB Graphite",
            number: 3,
            price: 12658984
        },
        {
            img: '/product/related/phone1.avif',
            title: "iPhone 12 Pro 128 GB Graphite",
            number: 3,
            price: 12658984
        },
    ]
    return (
        <div className='lg:col-span-4 col-span-12 h-auto'>
            <div className='shadow-xl flex flex-col gap-2 rounded-xl p-3'>
                <Link href={'/cart/step1-checkout'} className='text-xs p-1'>بازگشت به مرحله قبل</Link>
                {
                    items.map((item, index) => (
                        <>
                            <div key={index} className='w-full flex md:flex-row md:gap-0 gap-3 flex-col justify-between items-center p-2'>
                                <div className='flex gap-3 items-center'>
                                    <div className='w-[80px] h-[80px] relative'>
                                        <Image src={item.img} fill alt={item.title} />
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <p className='sm:text-[0.77rem] text-[0.7rem]'>{item.title}</p>
                                        <div className='flex items-center gap-1.5'>
                                            <p className='text-sm'>تعداد</p>
                                            <p className='text-sm'>{item.number}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex md:flex-col flex-row md:justify-around justify-between md:w-auto w-full items-center h-full">
                                    <div className="flex gap-1 items-center">
                                        <p className="font-bold">{Number(item.price).toLocaleString()}</p>
                                        <p className="text-xs">تومان</p>
                                    </div>
                                    <div className="cursor-pointer">
                                        {/* <IoTrashOutline size={18} /> */}
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-[1px] bg-slate-300' />
                        </>
                    ))
                }
                <div className='flex justify-between items-center'>
                    <p className='text-sm'>مجموع</p>
                    <div className='flex gap-1 items-center'>
                        <p className='text-sm font-bold'>{Number(1256893547).toLocaleString()}</p>
                        <p className='text-xs'>تومان</p>
                    </div>
                </div>
                <div className='w-full h-[1px] bg-slate-300' />
                <div className='flex justify-between items-center'>
                    <p className='text-sm'>هزینه ارسال</p>
                    <div className='flex gap-1 items-center'>
                        <p className='text-sm font-bold'>{Number(87500).toLocaleString()}</p>
                        <p className='text-xs'>تومان</p>
                    </div>
                </div>
                <div className='w-full h-[1px] bg-slate-300' />
                <div className='flex justify-between items-center'>
                    <p className='font-bold'>جمع کل</p>
                    <div className='flex gap-1 items-center'>
                        <p className='text-lg font-bold text-blue-600'>{Number(124578963).toLocaleString()}</p>
                        <p className='text-xs text-blue-600'>تومان</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Step2sidebar
