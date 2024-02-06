import BidModal from "@/components/elements/BidModal"
import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: false,
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    spaceBetween: 12,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
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
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})

import { useState } from "react"
export default function Home() {

    const [isBidModal, setBidModal] = useState(false)
    const handleBidModal = () => setBidModal(!isBidModal)

    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>

            <Layout headerStyle={1} footerStyle={1} pageCls="about-us-page">

                <br>
                
                </br>
                <br>
                
                </br>

                <br>
                
                </br>
                    <div className="page-title about-us relative">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-12 pages-title">
                                    <div className="content">
                                        <h1 data-wow-delay="0s" className="wow fadeInUp">Invest smart <br/> Earn passively </h1>
                                        <p data-wow-delay="0.1s" className="wow fadeInUp">We're excited to announce our support for the upcoming Nakamoto release! You'll have the opportunity to lend your dormat Layer1 Bitcoins in a trustless way, earning yields in Layer1 Bitcoin that can potentially grow over time</p>
                                        <div data-wow-delay="0.2s" className="wow fadeInUp flat-button flex justify-center">
                                            <Link href=" https://blockcityfi.substack.com/p/introduction" className="tf-button style-1 h50 w190">Get started <i className="icon-arrow-up-right2" /></Link>
                                        </div>
                                    </div>
                                    <div className="icon-background">
                                        <img className="absolute item1" src="/assets/images/item-background/item11.png" alt="" />
                                        <img className="absolute item2" src="/assets/images/item-background/item10.png" alt="" />
                                        <img className="absolute item3" src="/assets/images/item-background/item16.png" alt="" />
                                        <img className="absolute item4" src="/assets/images/item-background/item2.png" alt="" />
                                    </div>
                                    <div className="relative">
                                        <Swiper {...swiperOptions} className="swiper-container carousel3-type2">
                                            <div className="swiper-wrapper">
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-7">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                                <img src="/assets/images/box-item/about-us-03.jpg" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="button-place-bid">
                                                            <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-7">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                                <img src="/assets/images/box-item/about-us-01.jpg" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="button-place-bid">
                                                            <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-7">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                                <img src="/assets/images/box-item/about-us-02.jpg" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="button-place-bid">
                                                            <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-7">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                                <img src="/assets/images/box-item/about-us-03.jpg" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="button-place-bid">
                                                            <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-7">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                                <img src="/assets/images/box-item/about-us-05.jpg" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="button-place-bid">
                                                            <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-7">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                                <img src="/assets/images/box-item/about-us-04.jpg" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="button-place-bid">
                                                            <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </div>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tf-section-2 counter">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="counter__body-1">
                                        <div className="counter-1">
                                            <div className="number-counter">
                                                <span className="number" data-speed={3000} data-to={99} data-inviewport="yes"><CounterUp count={99} time={1} /></span>K+
                                            </div>
                                            <h6 className="title">Assets</h6>
                                        </div>
                                        <div className="space">
                                            <svg width={80} height={19} viewBox="0 0 80 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.2" x="0.75" y="9.25" width="29.5" height="0.5" stroke="white" strokeWidth="0.5" strokeDasharray="4 2" />
                                                <circle opacity="0.2" cx={40} cy="9.5" r={9} stroke="white" />
                                                <circle opacity="0.2" cx={40} cy="9.5" r="4.5" fill="white" />
                                                <rect opacity="0.2" x="49.75" y="9.25" width="29.5" height="0.5" stroke="white" strokeWidth="0.5" strokeDasharray="4 2" />
                                            </svg>
                                        </div>
                                        <div className="counter-1">
                                            <div className="number-counter">
                                                <span className="number" data-speed={3000} data-to={72} data-inviewport="yes"><CounterUp count={72} time={1} /></span>K+
                                            </div>
                                            <h6 className="title">Collector</h6>
                                        </div>
                                        <div className="space">
                                            <svg width={80} height={19} viewBox="0 0 80 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.2" x="0.75" y="9.25" width="29.5" height="0.5" stroke="white" strokeWidth="0.5" strokeDasharray="4 2" />
                                                <circle opacity="0.2" cx={40} cy="9.5" r={9} stroke="white" />
                                                <circle opacity="0.2" cx={40} cy="9.5" r="4.5" fill="white" />
                                                <rect opacity="0.2" x="49.75" y="9.25" width="29.5" height="0.5" stroke="white" strokeWidth="0.5" strokeDasharray="4 2" />
                                            </svg>
                                        </div>
                                        <div className="counter-1">
                                            <div className="number-counter">
                                                <span className="number" data-speed={3000} data-to={35} data-inviewport="yes"><CounterUp count={35} time={1} /></span>K+
                                            </div>
                                            <h6 className="title">Creator</h6>
                                        </div>
                                        <div className="space">
                                            <svg width={80} height={19} viewBox="0 0 80 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.2" x="0.75" y="9.25" width="29.5" height="0.5" stroke="white" strokeWidth="0.5" strokeDasharray="4 2" />
                                                <circle opacity="0.2" cx={40} cy="9.5" r={9} stroke="white" />
                                                <circle opacity="0.2" cx={40} cy="9.5" r="4.5" fill="white" />
                                                <rect opacity="0.2" x="49.75" y="9.25" width="29.5" height="0.5" stroke="white" strokeWidth="0.5" strokeDasharray="4 2" />
                                            </svg>
                                        </div>
                                        <div className="counter-1">
                                            <div className="number-counter">
                                                <span className="number" data-speed={3000} data-to={128} data-inviewport="yes"><CounterUp count={128} time={1} /></span>K+
                                            </div>
                                            <h6 className="title">Rewards</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tf-section-2 widget-box-icon">
    <div className="themesflat-container">
        <div className="row">
            <div className="col-md-12">
                <div className="heading-section-1">
                    <h2 className="tf-title pb-40">Why choose us</h2>
                </div>
            </div>
            <div data-wow-delay="0s" className="wow fadeInUp col-md-4">
                <div className="box-icon-item">
                    <img src="/assets/images/item-background/about-05.png" alt="" />
                    <div className="title"><Link href="#">HODL</Link></div>
                    <p>Passive income made easy! HODL to earn yields in Layer1 Bitcoin (non-custodial)</p>
                </div>
            </div>
            <div data-wow-delay="0.1s" className="wow fadeInUp col-md-4">
                <div className="box-icon-item">
                    <img src="/assets/images/item-background/about-02.png" alt="" />
                    <div className="title"><Link href="#">Compound</Link></div>
                    <p>Watch your passive income grow exponentially, all tax-efficiently!</p>
                </div>
            </div>
            <div data-wow-delay="0.1s" className="wow fadeInUp col-md-4">
                <div className="box-icon-item">
                    <img src="/assets/images/item-background/about-01.png" alt="" />
                    <div className="title"><Link href="#">Lend</Link></div>
                    <p>Lend your dormant Layer1 Bitcoin in our lending pool and earn yields.</p>
                </div>
            </div>
            <div data-wow-delay="0.1s" className="wow fadeInUp col-md-4">
                <div className="box-icon-item">
                    <img src="/assets/images/item-background/about-04.png" alt="" />
                    <div className="title"><Link href="#">Bitcoin finality</Link></div>
                    <p>Secure your Ordinals transactions and passive income with unrivaled Bitcoin finality.</p>
                </div>
            </div>
            <div data-wow-delay="0.1s" className="wow fadeInUp col-md-4">
                <div className="box-icon-item">
                    <img src="/assets/images/item-background/about-06.png" alt="" />
                    <div className="title"><Link href="#">Profit sharing</Link></div>
                    <p>Every collector engaging with our platform is eligible to receive a portion of the profits generated by the protocol.</p>
                </div>
            </div>
            <div data-wow-delay="0.2s" className="wow fadeInUp col-md-4">
                <div className="box-icon-item">
                    <img src="/assets/images/item-background/about-03.png" alt="" />
                    <div className="title"><Link href="#">Borrow</Link></div>
                    <p>Secure an instant loan at 0% interest using your ordinal. Discover the future!</p>
                </div>
            </div>
        </div>
    </div>
</div>

                    <div className="widget-our-team">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading-section-1">
                                        <h2 className="tf-title pb-40">Meet Our Amazing Team</h2>
                                    </div>
                                </div>
                                <div data-wow-delay="0s" className="wow fadeInUp col-md-2 col-6">
                                    <div className="our-team-item pb-38 text-center">
                                        <img src="/assets/images/avatar/team-01.png" alt="" />
                                        <div className="name"><Link href="#">Marvin McKinney</Link></div>
                                        <div className="info">CEo, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.1s" className="wow fadeInUp col-md-2 col-6">
                                    <div className="our-team-item pb-38 text-center">
                                        <img src="/assets/images/avatar/team-02.png" alt="" />
                                        <div className="name"><Link href="#">Marvin McKinney</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.2s" className="wow fadeInUp col-md-2 col-6">
                                    <div className="our-team-item pb-38 text-center">
                                        <img src="/assets/images/avatar/team-03.png" alt="" />
                                        <div className="name"><Link href="#">Marvin McKinney</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.3s" className="wow fadeInUp col-md-2 col-6">
                                    <div className="our-team-item pb-38 text-center">
                                        <img src="/assets/images/avatar/team-04.png" alt="" />
                                        <div className="name"><Link href="#">Marvin McKinney</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.4s" className="wow fadeInUp col-md-2 col-6">
                                    <div className="our-team-item pb-38 text-center">
                                        <img src="/assets/images/avatar/team-05.png" alt="" />
                                        <div className="name"><Link href="#">Marvin McKinney</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.5s" className="wow fadeInUp col-md-2 col-6">
                                    <div className="our-team-item pb-38 text-center">
                                        <img src="/assets/images/avatar/team-06.png" alt="" />
                                        <div className="name"><Link href="#">Marvin McKinney</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-center">
                                <div data-wow-delay="0s" className="wow fadeInUp col-md-2 col-6">
                                    <div className="our-team-item pb-40 text-center">
                                        <img src="/assets/images/avatar/team-07.png" alt="" />
                                        <div className="name"><Link href="#">Marvin McKinney</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.1s" className="wow fadeInUp col-md-2 col-6">
                                    <div className="our-team-item pb-40 text-center">
                                        <img src="/assets/images/avatar/team-08.png" alt="" />
                                        <div className="name"><Link href="#">Marvin McKinney</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.2s" className="wow fadeInUp col-md-2 col-6">
                                    <div className="our-team-item pb-40 text-center">
                                        <img src="/assets/images/avatar/team-09.png" alt="" />
                                        <div className="name"><Link href="#">Marvin McKinney</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.3s" className="wow fadeInUp col-md-2 col-6">
                                    <div className="our-team-item pb-40 text-center">
                                        <img src="/assets/images/avatar/team-10.png" alt="" />
                                        <div className="name"><Link href="#">Marvin McKinney</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.4s" className="wow fadeInUp col-md-2 col-6">
                                    <div className="our-team-item pb-40 text-center">
                                        <img src="/assets/images/avatar/team-11.png" alt="" />
                                        <div className="name"><Link href="#">Marvin McKinney</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <Link href="#" className="tf-button style-1 h50 w190 m-auto">Join us<i className="icon-arrow-up-right2" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tf-section-2 wrap-accordion pt-80">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading-section-1">
                                        <h2 className="tf-title pb-40">Frequently Asked Questions</h2>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="flat-accordion">
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                            <h6 className={isActive.key == 1 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(1)}>1. Why are NFTs on Bitcoin becoming popular?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                                <p>Celebrate uniqueness with our NFT marketplace on Bitcoin's secure and sustainable layer 2. Join a thriving community, explore cross-chain possibilities, and experience innovation with trust. Choose NFTs on Bitcoin for a cutting-edge and eco-friendly journey into the world of digital assets."</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                            <h6 className={isActive.key == 2 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(2)}>2. How do I keep my NFTs safe?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                                <p>Safeguard your NFTs with these tips: Use secure wallets, enable two-factor authentication, keep private keys offline, and verify smart contracts. Stay informed, trust reputable platforms, and enjoy a worry-free NFT experience</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                            <h6 className={isActive.key == 3 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(3)}>3. What is blockchain?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                                <p>Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding). Virtually anything of value can be tracked and traded on a blockchain network, reducing risk and cutting costs for all involved</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                            <h6 className={isActive.key == 4 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(4)}>4. What is an NFT?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                                <p>"NFTs, or Non-Fungible Tokens, are unique digital assets representing ownership or proof of authenticity for digital or physical items, stored on blockchain technology.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                            <h6 className={isActive.key == 5 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(5)}>5. What are Ordinals?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                                <p>Ordinals are means of creating Bitcoin NFTs by attaching data such as images, videos, and more to an individual satoshi on the base Bitcoin blockchain</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="flat-accordion2">
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 6 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(6)}>6. BRC-20 sounds familiar?</h6>
                                            
                                            <div className="toggle-content" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                                <p>BRC-20 tokens are fungible digital assets created on the Bitcoin blockchain.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 7 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(7)}>7. What is Stacks?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                                                <p>Stacks, formerly Blockstack, is a blockchain platform for smart contracts, decentralized finance ("DeFi"), NFTs, and decentralized apps ("DApps"). Stacks blockchain is a layer for bitcoin similar to the Lightning Network.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 8 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(8)}>8. Hiro Systems?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 8 ? "block" : "none"}` }}>
                                                <p>Hiro is a company that creates developer tools for Stacks, a network that enables apps and smart contracts for Bitcoin.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 9 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(9)}>9. When is launch date?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 9 ? "block" : "none"}` }}>
                                                <p>Get ready for the launch of our testnet in Q2 2024! Join the waitlist now to secure your access.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 10 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(10)}>10. Leather Wallet?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 10 ? "block" : "none"}` }}>
                                                <p>Manage BTC, Ordinals, Stamps, BRC-20 tokens, STX, Stacks NFTs, and other assets secured by Bitcoin with the most popular, battle-tested wallet for Bitcoin Web3</p>
                                        </div>
                           </div>
                           </div>
                           </div>
                           </div>
                           </div>
                           
                           <br>
                           
                           </br>
                           
                           <br>
                           
                           </br>
                    <div className="tf-section-2">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="widget-income">
                                        <div className="title">Ride the Bitcoin Wave <br/> by HODLing ordinals on <br/><span className="tf-color"></span></div>
                                        <p>Discover the hottest trend in the world of ordinals – HODL to earn juicy yields in Layer1 Bitcoin, all while keeping control of your assets!</p>
                                        <Link href="#" className="tf-button style-1 h50 w190">Get started<i className="icon-arrow-up-right2" /></Link>
                                        <div className="image">
                                           
                                            <img className="icon-1" src="/assets/images/item-background/item2.png" alt="" />
                                            <img className="icon-2" src="/assets/images/item-background/item11.png" alt="" />
                                            <img className="icon-3" src="/assets/images/item-background/item10.png" alt="" />
                                            <img className="icon-4" src="/assets/images/item-background/item16.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BidModal handleBidModal={handleBidModal} isBidModal={isBidModal} />
            </Layout>
        </>
    )
}