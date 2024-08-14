"use client"
import { Select, SelectItem } from '@nextui-org/select'
import React from 'react'

const ShoppingDetails = () => {
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
        <div className='lg:col-span-8 col-span-12 rounded-2xl border p-5 shadow-xl flex flex-col gap-6 h-auto'>
            <div className='flex justify-between items-center w-full'>
                <p className='text-xl font-bold'>سبد خرید</p>
                <p className='text-lg text-slate-800'>{items.length} آیتم</p>
            </div>
            <div className='flex flex-col gap-2'>
                {
                    items.map((item, index) => {
                        return (
                            <>
                                <div key={index} className='w-full flex justify-between items-center p-3'>
                                    <div className='flex gap-3 items-center'>
                                        <div className=''></div>
                                        <div className='flex flex-col gap-1'>
                                            <p className='sm:text-sm text-[0.77rem]'>{item.title}</p>
                                            <div className='flex items-center gap-1'>
                                                <p className='text-sm'>تعداد</p>
                                                <Select
                                                    size={'sm'}
                                                    label=""
                                                    className="max-w-xs"
                                                >
                                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                                                        <SelectItem key={number}>
                                                            {number}
                                                        </SelectItem>
                                                    ))}
                                                </Select>
                                            </div>
                                        </div>
                                    </div>
                                    <div>B</div>
                                </div>
                                <div className='w-full h-[1px] bg-slate-300' />
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ShoppingDetails
