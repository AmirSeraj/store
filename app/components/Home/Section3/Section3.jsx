import Header from "../Header"
import { CustomCard } from "./CustomCard"

const Section3 = () => {
    return (
        <div className='w-full 2xl:px-[18%] xl:px-[13%] sm:px-[8%] px-[5%]'>
            <Header title1={'پیشنهاد شگفت انگیز'} title2={'موبایل'} title3={'پیشنهاد شگفت انگیز'} />
            {/* <div className='flex items-center px-6 justify-between'>
                <div className='w-1/5 -skew-x-[25deg] bg-black h-[100px] relative'>
                    <Cover>
                        پیشنهاد شگفت انگیز
                    </Cover>
                </div>
                <div className='w-3/5 px-10 text-2xl font-bold'>
                    موبایل
                </div>
                <div className='w-1/5 -skew-x-[25deg] bg-pink-400 h-[100px] relative'>
                    <div className='w-full bg-pink-400 absolute h-full skew-x-[25deg] right-6 text-white flex justify-center items-center'>
                        پیشنهاد شگفت انگیز
                    </div>
                </div>
            </div> */}
            <div className="mt-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 place-items-center">
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
            </div>
        </div>
    )
}

export default Section3
