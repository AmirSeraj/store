import ButtonClient from "./ButtonClient"

const ShoppingCard = () => {

    const cartItem = [
        {
            title: 'گوشی سامسونگ مدل Galaxy S9',
            price: 18964598
        },
        {
            title: 'گوشی سامسونگ مدل Galaxy S9',
            price: 18964598
        },
        {
            title: 'محافظ گوشی جنس Silicon Magnetic',
            price: 864500
        }
    ]
    return (
        <div className='lg:col-span-4 col-span-12 h-auto'>
            <div className='shadow-xl flex flex-col gap-6 rounded-xl sm:p-5 p-2'>
                {cartItem.map((item, index) => (
                    <div key={index} className='flex justify-between items-center'>
                        <p className='sm:text-sm text-xs font-bold text-black'>{item.title}</p>
                        <div className=' text-xs flex items-center gap-1'>
                            <p className='text-black font-bold'>{Number(item.price).toLocaleString()}</p>
                            <span className='text-[0.65rem]'>تومان</span>
                        </div>
                    </div>
                ))}
                <div className='flex justify-between items-center'>
                    <p className='sm:text-sm text-xs font-bold text-black'>هزینه ارسال</p>
                    <div className='text-xs flex items-center gap-1'>
                        هزینه ارسال بعد از تکمیل آدرس محاسبه می شود.
                    </div>
                </div>
                <div className='w-full h-[1px] bg-slate-400 my-3' />
                <div className='flex justify-between items-center'>
                    <p className='sm:text-sm text-xs font-bold text-black'>جمع سبد خرید</p>
                    <div className='flex items-center gap-1'>
                        <p className='text-blue-500 font-bold text-xl'>{Number(45987249).toLocaleString()}</p>
                        <span className='text-[0.65rem]'>تومان</span>
                    </div>
                </div>
                <ButtonClient />
            </div>
        </div>
    )
}

export default ShoppingCard
