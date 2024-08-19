"use client"
import { Select, SelectItem } from "@nextui-org/select";
import Image from "next/image";
import { IoTrashOutline } from "react-icons/io5";
import { useState } from 'react'

const ShoppingDetails = () => {
    const [value, setValue] = useState(new Set([]));
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
                                <div key={index} className='w-full flex md:flex-row md:gap-0 gap-3 flex-col justify-between items-center md:p-3 p-1.5'>
                                    <div className='flex gap-3 items-center'>
                                        <div className='w-[80px] h-[80px] relative'>
                                            <Image src={item.img} fill alt={item.img + index} />
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <p className='sm:text-sm text-[0.77rem]'>{item.title}</p>
                                            <div className='flex items-center gap-3'>
                                                <p className='text-sm'>تعداد</p>
                                                <Select
                                                    size={'sm'}
                                                    label={'تعداد'}
                                                    color='primary'
                                                    className='w-[100px] bg-slate-400 text-blue-600'
                                                    variant='underlined'
                                                    onSelectionChange={setValue}
                                                >
                                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                                                        <SelectItem key={number} textValue={number}>
                                                            {number}
                                                        </SelectItem>
                                                    ))}
                                                </Select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex md:flex-col flex-row md:justify-around justify-between md:w-auto w-full items-center h-full">
                                        <div className="flex gap-1 items-center">
                                            <p className="font-bold">{Number(item.price).toLocaleString()}</p>
                                            <p className="text-xs">تومان</p>
                                        </div>
                                        <div className="cursor-pointer">
                                            <IoTrashOutline size={18} />
                                        </div>
                                    </div>
                                </div>
                                <div className={`w-full h-[1px] bg-slate-300 ${index === items.length - 1 && 'hidden'}`} />
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ShoppingDetails
