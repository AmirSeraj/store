import Link from 'next/link';
import Card from './Card'
import { AiOutlineMergeCells } from "react-icons/ai";
import { getLastCards } from '@/app/apis/Home/getCardsSection5';

const loadingStates = [
    {
        icon: <AiOutlineMergeCells color='white' size={24} />,
        text: "گوشی سامسونگ مدل S1000",
        link: "/product/گوشی سامسونگ"
    },
    {
        icon: <AiOutlineMergeCells color='white' size={24} />,
        text: "گوشی سامسونگ مدل S9",
        link: "/product/گوشی سامسونگ"
    },
    {
        icon: <AiOutlineMergeCells color='white' size={24} />,
        text: "گوشی سامسونگ مدل S500",
        link: "/product/گوشی سامسونگ"
    },
    {
        icon: <AiOutlineMergeCells color='white' size={24} />,
        text: "گوشی سامسونگ مدل S100",
        link: "/product/گوشی سامسونگ"
    },
    {
        icon: <AiOutlineMergeCells color='white' size={24} />,
        text: "گوشی شیامی مدل S1000",
        link: "/product/گوشی سامسونگ"
    },
    {
        icon: <AiOutlineMergeCells color='white' size={24} />,
        text: "گوشی هوایی مدل S1000",
        link: "/product/گوشی سامسونگ"
    },
];

const data = [
    {
        img: '/product/img_18.png',
        title: 'گوشی سامسونگ مدل S100 با قابلیت Flashing',
        price: '185486985',
        final_price: '17412589',
        rating: 1.5
    },
    {
        img: '/product/img_18.png',
        title: 'گوشی سامسونگ مدل S100 با قابلیت Flashing',
        price: '185486985',
        final_price: '17412589',
        rating: 2
    },
    {
        img: '/product/img_18.png',
        title: 'گوشی سامسونگ مدل S100 با قابلیت Flashing',
        price: '185486985',
        final_price: '17412589',
        rating: 2.5
    },
    {
        img: '/product/img_18.png',
        title: 'گوشی سامسونگ مدل S100 با قابلیت Flashing',
        price: '185486985',
        final_price: '17412589',
        rating: 3
    },
    {
        img: '/product/img_18.png',
        title: 'گوشی سامسونگ مدل S100 با قابلیت Flashing',
        price: '185486985',
        final_price: '17412589',
        rating: 3.5
    },
    {
        img: '/product/img_18.png',
        title: 'گوشی سامسونگ مدل S100 با قابلیت Flashing',
        price: '185486985',
        final_price: '17412589',
        rating: 3.75
    },
    {
        img: '/product/img_18.png',
        title: 'گوشی سامسونگ مدل S100 با قابلیت Flashing',
        price: '185486985',
        final_price: '17412589',
        rating: 4
    },
    {
        img: '/product/img_18.png',
        title: 'گوشی سامسونگ مدل S100 با قابلیت Flashing',
        price: '185486985',
        final_price: '17412589',
        rating: 4.5
    },
    {
        img: '/product/img_18.png',
        title: 'گوشی سامسونگ مدل S100 با قابلیت Flashing',
        price: '185486985',
        final_price: '17412589',
        rating: 5
    },
]

const Section5 = async () => {

    const cards = await getLastCards();

    return (
        <div className='w-full flex h-auto my-5'>
            <div className='w-[500px] h-auto bg-[url("/bg_11.jpg")] p-10 lg:block hidden'>
                <ul className='flex flex-col gap-6 p-2'>
                    {loadingStates.map((item, index) => (
                        <li className='w-full p-1' key={index}>
                            <Link className='w-full flex items-center gap-2' href={item.link}>
                                {item.icon}
                                <p className='text-white text-sm hover:text-blue-500'>{item.text}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-5 w-full gap-5'>
                {data.map((item, index) => (
                    <Card key={index} data={item} />
                ))}
            </div>
        </div>
    )
}

export default Section5
