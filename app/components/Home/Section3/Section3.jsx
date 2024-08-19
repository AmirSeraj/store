import Header from "../Header"
import { CustomCard } from "./CustomCard"

const Section3 = () => {
    return (
        <div className='w-full 2xl:px-[18%] xl:px-[13%] sm:px-[8%] px-[5%]'>
            <Header title1={'پیشنهاد شگفت انگیز'} title3={'پیشنهاد شگفت انگیز'} />
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
