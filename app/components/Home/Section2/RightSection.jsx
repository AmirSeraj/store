'use client'
import { Tabs, Tab } from "@nextui-org/tabs";
import VerticalCard from "../../VerticalCard";

const RightSection = () => {
    return (
        // <div className='grid lg:col-span-8 col-span-12 px-3 py-4 lg:order-1 order-2'>

            <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2">
                <VerticalCard discount={40000} img={'/product/img1.webp'} title={'گوشی سامسونگ مدل Arbitaj'} price={1894687} />
                <VerticalCard discount={40000} img={'/product/img1.webp'} title={'گوشی سامسونگ مدل Arbitaj'} price={1894687} />
                <VerticalCard discount={40000} img={'/product/img1.webp'} title={'گوشی سامسونگ مدل Arbitaj'} price={1894687} />
                <VerticalCard discount={40000} img={'/product/img1.webp'} title={'گوشی سامسونگ مدل Arbitaj'} price={1894687} />
                <VerticalCard discount={40000} img={'/product/img1.webp'} title={'گوشی سامسونگ مدل Arbitaj'} price={1894687} />
                <VerticalCard discount={40000} img={'/product/img1.webp'} title={'گوشی سامسونگ مدل Arbitaj'} price={1894687} />
            </div>

           
        // </div>
    )
}

export default RightSection
