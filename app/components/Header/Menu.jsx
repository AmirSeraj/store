'use client'
import { useState, useEffect, useRef } from 'react'

const items = [
    {
        title: 'موبایل',
        children: [
            'موبایل سامسونگ مدل S60',
            'موبایل سامسونگ مدل S60',
            'موبایل سامسونگ مدل S60',
            'موبایل سامسونگ مدل S60',
        ]
    },
    {
        title: 'تبلت',
        children: [
            'موبایل سامسونگ مدل S60',
            'موبایل سامسونگ مدل S60',
            'موبایل سامسونگ مدل S60',
            'موبایل سامسونگ مدل S60',
        ]
    },
    {
        title: 'کنسول بازی',
        children: [
            'موبایل سامسونگ مدل S60',
            'موبایل سامسونگ مدل S60',
        ]
    },
    {
        title: 'لپ تاپ',
        children: [
            'موبایل سامسونگ مدل S60',
            'موبایل سامسونگ مدل S60',
        ]
    },
    {
        title: 'لوازم جانبی',
        children: [
            'موبایل سامسونگ مدل S60',
            'موبایل سامسونگ مدل S60',
            'موبایل سامسونگ مدل S60',
        ]
    },
]

const Menu = () => {
    const [open, setOpen] = useState(null);
    const menuRef = useRef(null);
    const handleToggleOpen = (index) => {
        setOpen(open === index ? null : index)
    }

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setOpen(null);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return (
        <ul className='md:gap-3 gap-2 items-center sm:flex hidden'>
            {items.map((item, index) => (
                <li className='flex flex-col gap-1 relative' key={index}>
                    <span onClick={() => handleToggleOpen(index)} className={`text-xs cursor-pointer hover:text-slate-700
                        ${open === index ? '!text-black font-bold' : 'text-slate-500'} hover:font-semibold`}>{item.title}</span>
                    <ul ref={menuRef} className={`${open === index ? 'flex' : 'hidden'} flex-col gap-1 absolute top-7 bg-white w-[150px] py-4 px-1 rounded-md shadow-md drop-shadow-lg`}>
                        {item.children.map((child, index) => (
                            <li key={index} className='text-[0.7rem] p-1 rounded-lg hover:bg-slate-400 cursor-pointer w-full'>{child}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    )
}

export default Menu
