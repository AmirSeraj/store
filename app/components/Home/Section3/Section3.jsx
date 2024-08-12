import { Cover } from "../../ui/cover"

const Section3 = () => {
    return (
        <div className='w-full px-6'>
            <div className='flex items-center'>
                <div className='w-1/5 -skew-x-[25deg] bg-black h-[100px] relative'>
                    
                    {/* <div className='w-full bg-black absolute h-full skew-x-[25deg] -right-6 text-white flex justify-center items-center'> */}
                    <Cover>
                        پیشنهاد شگفت انگیز
                    </Cover>
                    {/* </div> */}
                    {/* <div className='w-full bg-black absolute h-full skew-x-[25deg] -right-6 text-white flex justify-center items-center'>
                        پیشنهاد شگفت انگیز
                    </div> */}
                </div>
                <div className='w-3/5'>

                </div>
                <div className='w-1/5 -skew-x-[25deg] bg-pink-400 h-[100px] relative'>
                    <div className='w-full bg-pink-400 absolute h-full skew-x-[25deg] right-6 text-white flex justify-center items-center'>
                        پیشنهاد شگفت انگیز
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3
