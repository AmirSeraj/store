'use client'
import { Tabs, Tab } from "@nextui-org/tabs";
import VerticalCard from "../../VerticalCard";

const RightSection = () => {
    return (
        <div className='grid lg:col-span-8 col-span-12 px-3 py-4 lg:order-1 order-2'>
            <Tabs variant="underlined" aria-label="Tabs variants" color="secondary" classNames={{
                tabList: "gap-6 px-5 w-full relative rounded-none border-b border-divider w-[98%]",
                cursor: "w-full bg-[#22d3ee]",
                tab: "max-w-fit px-0 h-12 group-data-[selected=true]:border-blue-600",
                tabContent: "group-data-[selected=true]:text-[#06b6d4]"
            }}>
                <Tab key="photos" title="Photos" className="px-3 py-6">
                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2">
                        <VerticalCard discount={40000} img={'/product/img1.webp'} title={'گوشی سامسونگ مدل Arbitaj'} price={1894687} />
                        <VerticalCard discount={40000} img={'/product/img1.webp'} title={'گوشی سامسونگ مدل Arbitaj'} price={1894687} />
                        <VerticalCard discount={40000} img={'/product/img1.webp'} title={'گوشی سامسونگ مدل Arbitaj'} price={1894687} />
                        <VerticalCard discount={40000} img={'/product/img1.webp'} title={'گوشی سامسونگ مدل Arbitaj'} price={1894687} />
                        <VerticalCard discount={40000} img={'/product/img1.webp'} title={'گوشی سامسونگ مدل Arbitaj'} price={1894687} />
                        <VerticalCard discount={40000} img={'/product/img1.webp'} title={'گوشی سامسونگ مدل Arbitaj'} price={1894687} />
                        <VerticalCard discount={40000} img={'/product/img1.webp'} title={'گوشی سامسونگ مدل Arbitaj'} price={1894687} />
                    </div>
                </Tab>
                <Tab key="videos" title="Videos" className="px-3 py-6">
                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2">
                        <VerticalCard discount={40000} img={'/product/img1.webp'} title={'گوشی سامسونگ مدل Arbitaj'} price={1894687} />
                        <VerticalCard discount={40000} img={'/product/img1.webp'} title={'گوشی سامسونگ مدل Arbitaj'} price={1894687} />
                        <VerticalCard discount={40000} img={'/product/img1.webp'} title={'گوشی سامسونگ مدل Arbitaj'} price={1894687} />
                        <VerticalCard discount={40000} img={'/product/img1.webp'} title={'گوشی سامسونگ مدل Arbitaj'} price={1894687} />
                    </div>
                </Tab>
                <Tab key="music" title="Music" className="px-3 py-6">
                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2">
                        <VerticalCard discount={40000} img={'/product/img1.webp'} title={'گوشی سامسونگ مدل Arbitaj'} price={1894687} />
                        <VerticalCard discount={40000} img={'/product/img1.webp'} title={'گوشی سامسونگ مدل Arbitaj'} price={1894687} />
                        <VerticalCard discount={40000} img={'/product/img1.webp'} title={'گوشی سامسونگ مدل Arbitaj'} price={1894687} />
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}

export default RightSection
