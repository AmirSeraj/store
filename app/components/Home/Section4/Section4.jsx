import React from 'react'
import { PinContainer } from '../../ui/3d-pin'
import { Cover } from '../../ui/cover'
import Image from 'next/image';

const Section4 = () => {
    const products = [
        {
            slug: 'گوشی-سامسونگ-مدل-124',
            title: 'گوشی سامسونگ مدل s90',
            desc: 'گوشی سامسونگ مدل اس 90 با ظرفیت 128 گیگ حافظه داخلی',
            img: '/product/img5.avif',
            price: '8964357'
        },
        {
            slug: 'گوشی-سامسونگ-مدل-124',
            title: 'گوشی سامسونگ مدل s90',
            desc: 'گوشی سامسونگ مدل اس 90 با ظرفیت 128 گیگ حافظه داخلی',
            img: '/product/img5.avif',
            price: '8964357'
        },
        {
            slug: 'گوشی-سامسونگ-مدل-124',
            title: 'گوشی سامسونگ مدل s90',
            desc: 'گوشی سامسونگ مدل اس 90 با ظرفیت 128 گیگ حافظه داخلی',
            img: '/product/img5.avif',
            price: '8964357'
        },
        {
            slug: 'گوشی-سامسونگ-مدل-124',
            title: 'گوشی سامسونگ مدل s90',
            desc: 'گوشی سامسونگ مدل اس 90 با ظرفیت 128 گیگ حافظه داخلی',
            img: '/product/img5.avif',
            price: '8964357'
        },
        {
            slug: 'گوشی-سامسونگ-مدل-124',
            title: 'گوشی سامسونگ مدل s90',
            desc: 'گوشی سامسونگ مدل اس 90 با ظرفیت 128 گیگ حافظه داخلی',
            img: '/product/img5.avif',
            price: '8964357'
        },
        {
            slug: 'گوشی-سامسونگ-مدل-124',
            title: 'گوشی سامسونگ مدل s90',
            desc: 'گوشی سامسونگ مدل اس 90 با ظرفیت 128 گیگ حافظه داخلی',
            img: '/product/img5.avif',
            price: '8964357'
        },
        {
            slug: 'گوشی-سامسونگ-مدل-124',
            title: 'گوشی سامسونگ مدل s90',
            desc: 'گوشی سامسونگ مدل اس 90 با ظرفیت 128 گیگ حافظه داخلی',
            img: '/product/img5.avif',
            price: '8964357'
        },
    ];
    return (
        <div className='w-full 2xl:px-[18%] xl:px-[13%] sm:px-[8%] px-[5%]'>
            <div className='flex items-center px-6 mb-5'>
                <div className='w-1/5 -skew-x-[25deg] bg-black h-[100px] relative'>
                    <Cover>
                        پرفروش ترین ها
                    </Cover>
                </div>
                <div className='w-3/5' />
                <div className='w-1/5 -skew-x-[25deg] bg-pink-400 h-[100px] relative'>
                    <div className='w-full bg-pink-400 absolute h-full skew-x-[25deg] right-6 text-white flex justify-center items-center'>
                        پیشنهاد شگفت انگیز
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-wrap justify-center pb-5 '>
                {
                    products.map((item, index) => (
                        <PinContainer
                            key={index}
                            title={item.title}
                            href={'/product/' + item.slug}
                            containerClassName={'mb-5'}
                        >
                            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                    {item.title}
                                </h3>
                                <div className="text-base !m-0 !p-0 font-normal">
                                    <span className="text-slate-500 ">
                                        {item.desc}
                                    </span>
                                </div>
                                <div className='w-[280px] h-[270px] relative'>
                                    <Image fill src={item.img} priority quality={90} objectFit='contain' />
                                </div>
                                {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
                            </div>
                        </PinContainer>
                    ))
                }
            </div>
        </div>

    )
}

export default Section4
