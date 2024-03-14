import { Menu } from '@headlessui/react'
import Link from "next/link"
import { useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import BidModal from "../elements/BidModal"
import Countdown from "../elements/Countdown"
import AutoSlider1 from '../slider/AutoSlider1'
import AutoSlider2 from '../slider/AutoSlider2'
const currentTime = new Date()

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: false,
    slidesPerView: 1,
    spaceBetween: 25,
    observer: true,
    observeParents: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    navigation: {
        clickable: true,
        nextEl: '.next-type1',
        prevEl: '.prev-type1'
    },
    pagination: {
        el: '.pagination-type1',
        clickable: true
    },
    breakpoints: {
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
}

export default function Favourite() {
    const [isBidModal, setBidModal] = useState(false)
    const handleBidModal = () => setBidModal(!isBidModal)

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <div className="wrapper-content">
                <div className="inner-content">
                    <div className="action__body w-full mb-40">
                        <div className="tf-tsparticles">
                            <div id="tsparticles5" data-color="#161616" data-line="#000" />
                        </div>
                        <h2>Need some analytics and tracking this is right page for you</h2>
                        <div className="flat-button flex">
                            <Link href="#" className="tf-button style-2 h50 w190 mr-10">Explore now<i className="icon-arrow-up-right2" /></Link>
                            <Link href="#" className="tf-button style-2 h50 w230">Create your first NFT<i className="icon-arrow-up-right2" /></Link>
                        </div>
                        <div className="bg-home7">
                            <AutoSlider1 />
                            <AutoSlider2 />
                            <AutoSlider1 />
                        </div>
                    </div>
                  
                    </div>
                </div>
               
                
            
            <BidModal handleBidModal={handleBidModal} isBidModal={isBidModal} />
        </>
    )
}
