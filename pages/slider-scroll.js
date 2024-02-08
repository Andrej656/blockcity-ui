import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    direction: 'vertical',
    spaceBetween: 45,
    grabCursor: false,
    speed: 10000,
    centeredSlides: false,
    loop: true,
    slidesPerView: 'auto',
    autoplay: {
        delay: 0,
        disableOnInteraction: false
    }


}
const swiperOptions2 = {
    modules: [Autoplay, Pagination, Navigation],
    direction: 'vertical',
    spaceBetween: 45,
    grabCursor: false,
    speed: 10000,
    centeredSlides: false,
    loop: true,
    slidesPerView: 'auto',
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true
    }


}

export default function Home() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} pageCls="slider-scroll-page">
                <div className="flat-pages-title-home7 relative">
                    <div className="themesflat-container">
                        <div className="row">
                            <div className="col-12 pages-title">
                                <div className="content">
                                    <h1>Ordinals - The Future <br/> of Passive Income </h1>
                                    <p>HODL to Earn Yields in Layer1 Bitcoin</p>
                                    <div className="flat-button flex">
                                        <Link href="https://blockcityfi.substack.com/p/join-the-waitlist" className="tf-button style-1 h50 w230 mr-10">Join Waitlist <i className="icon-arrow-up-right2" /></Link>
                                        <Link href="https://blockcityfi.substack.com/t/announcements" className="tf-button style-1 h50 w190 active">Explore now <i className="icon-arrow-up-right2" /></Link>
                                    </div>
                                </div>
                                <div className="icon-background">
                                    <img className="absolute item1" src="/assets/images/item-background/item1.png" alt="" />
                                    <img className="absolute item2" src="/assets/images/item-background/item1.png" alt="" />
                                    <img className="absolute item3" src="/assets/images/item-background/item11.png" alt="" />
                                    <img className="absolute item4" src="/assets/images/item-background/item18.png" alt="" />
                                    <img className="absolute item5" src="/assets/images/item-background/item1.png" alt="" />
                                    <img className="absolute item6" src="/assets/images/item-background/item5.png" alt="" />
                                    <img className="absolute item7" src="/assets/images/item-background/item11.png" alt="" />
                                    <img className="absolute item8" src="/assets/images/item-background/item5.png" alt="" />
                                    <img className="absolute item9" src="/assets/images/item-background/item10.png" alt="" />
                                    <img className="absolute item10" src="/assets/images/item-background/item1.png" alt="" />
                                </div>
                           
                               
                                <div className="bg-home7">
                                    <Swiper {...swiperOptions} className="swiper-container autoslider1reverse swiper-container-vertical">
                                        <SwiperSlide>
                                            <img src="/assets/images/item-background/bg-home7-item1.png" alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="/assets/images/item-background/bg-home7-item2.png" alt="" />
                                        </SwiperSlide>
                                    </Swiper>
                                    <Swiper {...swiperOptions2} className="swiper-container autoslider1reverse swiper-container-vertical">
                                        <SwiperSlide>
                                            <img src="/assets/images/item-background/bg-home7-item3.png" alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="/assets/images/item-background/bg-home7-item4.png" alt="" />
                                        </SwiperSlide>
                                    </Swiper>
                                    <Swiper {...swiperOptions} className="swiper-container autoslider1reverse swiper-container-vertical">
                                        <SwiperSlide>
                                            <img src="/assets/images/item-background/bg-home7-item5.png" alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="/assets/images/item-background/bg-home7-item6.png" alt="" />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>


            </Layout>
        </>
    )
}