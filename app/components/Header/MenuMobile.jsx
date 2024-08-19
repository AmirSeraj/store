import { IoIosArrowBack } from "react-icons/io";
import { useState } from 'react';

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

const MenuMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <ul className='flex flex-col gap-2'>
            {items.map((item, index) => (
                <li onClick={() => setMenuOpen(menuOpen === index ? null : index)} key={index} className='w-full cursor-pointer'>
                    <div className={`flex items-center justify-between p-3 hover:bg-white rounded-full hover:shadow-xl ${menuOpen === index && 'bg-white'}`}>
                        <p className='text-xs text-black'>{item.title}</p>
                        <div className={`${menuOpen === index ? '-rotate-90' : 'rotate-0'} transition-all duration-400`}>
                            <IoIosArrowBack size={20} />
                        </div>
                    </div>
                    <ul className={`${menuOpen === index ? 'flex flex-col' : 'hidden'} p-3 bg-white mt-2 shadow-md rounded-md`}>
                        {item.children && item.children.map((child, index) => (
                            <li key={index} className="flex items-center justify-between px-4 py-1.5 hover:bg-slate-400 rounded-lg hover:shadow-lg">
                                <p className="text-black text-xs">{child}</p>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    )
}

export default MenuMobile
