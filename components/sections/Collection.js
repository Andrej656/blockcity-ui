import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import AutoSlider1 from '../slider/AutoSlider1'
import AutoSlider2 from '../slider/AutoSlider2'

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
            slidesPerView: 1
        },
        1024: {
            slidesPerView: 1
        },
        1200: {
            slidesPerView: 3
        }
    }
}

export default function Collection() {
    return (
        <>
            <div className="wrapper-content">
                <div className="inner-content">
                    <div className="action__body w-full mb-40">
                        <div className="tf-tsparticles">
                            <div id="tsparticles4" data-color="#161616" data-line="#000" />
                        </div>
                        <h2>Profile page adjusted just for your needs</h2>
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
                    <div className="add-new-collection mb-40">
                        <div className="w-full">
                            <h6><i className="icon-add" /> Add new collection</h6>
                            <p>create and store the best collections of NFTs</p>
                        </div>
                        <Link href="#" className="tf-button style-1 w174 h50">Create<i className="icon-arrow-up-right2" /></Link>
                    </div>
                    <div className="heading-section">
                        <h2 className="tf-title pb-20">China collection</h2>
                    </div>
                    <div className="top-collections style-bottom mb-40">
                        <Swiper {...swiperOptions} className="featured pt-10 swiper-container carousel3-type1">
                            <div className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="tf-card-collection">
                                        <Link href="author-2.html">
                                            <div className="media-images-collection">
                                                <img src="assets/images/box-item/img-collection-01.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-02.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-03.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-04.jpg" alt="" />
                                                <div className="author-poster">
                                                    <img src="assets/images/avatar/avatar-01.png" alt="" className="w-full" />
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="card-bottom">
                                            <div className="author">
                                                <h5><Link href="author01.html">Bored ape#21</Link></h5>
                                                <div className="infor">@Themesflat</div>
                                            </div>
                                            <div className="bottom-right">
                                                <div className="shop">
                                                    <div className="icon">
                                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                    <p>12 Item</p>
                                                </div>
                                                <div className="like">
                                                    <span className="wishlist-button icon-heart" />
                                                    <p>97 like</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tf-card-collection">
                                        <Link href="author-2.html">
                                            <div className="media-images-collection">
                                                <img src="assets/images/box-item/img-collection-01.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-02.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-03.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-04.jpg" alt="" />
                                                <div className="author-poster">
                                                    <img src="assets/images/avatar/avatar-01.png" alt="" className="w-full" />
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="card-bottom">
                                            <div className="author">
                                                <h5><Link href="author01.html">Bored ape#21</Link></h5>
                                                <div className="infor">@Themesflat</div>
                                            </div>
                                            <div className="bottom-right">
                                                <div className="shop">
                                                    <div className="icon">
                                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                    <p>12 Item</p>
                                                </div>
                                                <div className="like">
                                                    <span className="wishlist-button icon-heart" />
                                                    <p>97 like</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tf-card-collection">
                                        <Link href="author-2.html">
                                            <div className="media-images-collection">
                                                <img src="assets/images/box-item/img-collection-01.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-02.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-03.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-04.jpg" alt="" />
                                                <div className="author-poster">
                                                    <img src="assets/images/avatar/avatar-01.png" alt="" className="w-full" />
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="card-bottom">
                                            <div className="author">
                                                <h5><Link href="author01.html">Bored ape#21</Link></h5>
                                                <div className="infor">@Themesflat</div>
                                            </div>
                                            <div className="bottom-right">
                                                <div className="shop">
                                                    <div className="icon">
                                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                    <p>12 Item</p>
                                                </div>
                                                <div className="like">
                                                    <span className="wishlist-button icon-heart" />
                                                    <p>97 like</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tf-card-collection">
                                        <Link href="author-2.html">
                                            <div className="media-images-collection">
                                                <img src="assets/images/box-item/img-collection-01.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-02.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-03.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-04.jpg" alt="" />
                                                <div className="author-poster">
                                                    <img src="assets/images/avatar/avatar-01.png" alt="" className="w-full" />
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="card-bottom">
                                            <div className="author">
                                                <h5><Link href="author01.html">Bored ape#21</Link></h5>
                                                <div className="infor">@Themesflat</div>
                                            </div>
                                            <div className="bottom-right">
                                                <div className="shop">
                                                    <div className="icon">
                                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                    <p>12 Item</p>
                                                </div>
                                                <div className="like">
                                                    <span className="wishlist-button icon-heart" />
                                                    <p>97 like</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tf-card-collection">
                                        <Link href="author-2.html">
                                            <div className="media-images-collection">
                                                <img src="assets/images/box-item/img-collection-01.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-02.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-03.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-04.jpg" alt="" />
                                                <div className="author-poster">
                                                    <img src="assets/images/avatar/avatar-01.png" alt="" className="w-full" />
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="card-bottom">
                                            <div className="author">
                                                <h5><Link href="author01.html">Bored ape#21</Link></h5>
                                                <div className="infor">@Themesflat</div>
                                            </div>
                                            <div className="bottom-right">
                                                <div className="shop">
                                                    <div className="icon">
                                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                    <p>12 Item</p>
                                                </div>
                                                <div className="like">
                                                    <span className="wishlist-button icon-heart" />
                                                    <p>97 like</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tf-card-collection">
                                        <Link href="author-2.html">
                                            <div className="media-images-collection">
                                                <img src="assets/images/box-item/img-collection-01.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-02.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-03.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-04.jpg" alt="" />
                                                <div className="author-poster">
                                                    <img src="assets/images/avatar/avatar-01.png" alt="" className="w-full" />
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="card-bottom">
                                            <div className="author">
                                                <h5><Link href="author01.html">Bored ape#21</Link></h5>
                                                <div className="infor">@Themesflat</div>
                                            </div>
                                            <div className="bottom-right">
                                                <div className="shop">
                                                    <div className="icon">
                                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                    <p>12 Item</p>
                                                </div>
                                                <div className="like">
                                                    <span className="wishlist-button icon-heart" />
                                                    <p>97 like</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                            <div className="swiper-pagination pagination-type1" />
                            <div className="swiper-button-next next-type1" />
                            <div className="swiper-button-prev prev-type1" />
                        </Swiper>
                    </div>
                    <div className="heading-section">
                        <h2 className="tf-title style-1 pb-20">Themesflat collection</h2>
                    </div>
                    <div className="top-collections style-bottom mb-40">
                        <Swiper {...swiperOptions} className="featured pt-10 swiper-container carousel3-type1">
                            <div className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="tf-card-collection">
                                        <Link href="author-2.html">
                                            <div className="media-images-collection">
                                                <img src="assets/images/box-item/img-collection-01.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-02.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-03.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-04.jpg" alt="" />
                                                <div className="author-poster">
                                                    <img src="assets/images/avatar/avatar-01.png" alt="" className="w-full" />
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="card-bottom">
                                            <div className="author">
                                                <h5><Link href="author01.html">Bored ape#21</Link></h5>
                                                <div className="infor">@Themesflat</div>
                                            </div>
                                            <div className="bottom-right">
                                                <div className="shop">
                                                    <div className="icon">
                                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                    <p>12 Item</p>
                                                </div>
                                                <div className="like">
                                                    <span className="wishlist-button icon-heart" />
                                                    <p>97 like</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tf-card-collection">
                                        <Link href="author-2.html">
                                            <div className="media-images-collection">
                                                <img src="assets/images/box-item/img-collection-01.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-02.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-03.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-04.jpg" alt="" />
                                                <div className="author-poster">
                                                    <img src="assets/images/avatar/avatar-01.png" alt="" className="w-full" />
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="card-bottom">
                                            <div className="author">
                                                <h5><Link href="author01.html">Bored ape#21</Link></h5>
                                                <div className="infor">@Themesflat</div>
                                            </div>
                                            <div className="bottom-right">
                                                <div className="shop">
                                                    <div className="icon">
                                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                    <p>12 Item</p>
                                                </div>
                                                <div className="like">
                                                    <span className="wishlist-button icon-heart" />
                                                    <p>97 like</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tf-card-collection">
                                        <Link href="author-2.html">
                                            <div className="media-images-collection">
                                                <img src="assets/images/box-item/img-collection-01.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-02.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-03.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-04.jpg" alt="" />
                                                <div className="author-poster">
                                                    <img src="assets/images/avatar/avatar-01.png" alt="" className="w-full" />
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="card-bottom">
                                            <div className="author">
                                                <h5><Link href="author01.html">Bored ape#21</Link></h5>
                                                <div className="infor">@Themesflat</div>
                                            </div>
                                            <div className="bottom-right">
                                                <div className="shop">
                                                    <div className="icon">
                                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                    <p>12 Item</p>
                                                </div>
                                                <div className="like">
                                                    <span className="wishlist-button icon-heart" />
                                                    <p>97 like</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tf-card-collection">
                                        <Link href="author-2.html">
                                            <div className="media-images-collection">
                                                <img src="assets/images/box-item/img-collection-01.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-02.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-03.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-04.jpg" alt="" />
                                                <div className="author-poster">
                                                    <img src="assets/images/avatar/avatar-01.png" alt="" className="w-full" />
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="card-bottom">
                                            <div className="author">
                                                <h5><Link href="author01.html">Bored ape#21</Link></h5>
                                                <div className="infor">@Themesflat</div>
                                            </div>
                                            <div className="bottom-right">
                                                <div className="shop">
                                                    <div className="icon">
                                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                    <p>12 Item</p>
                                                </div>
                                                <div className="like">
                                                    <span className="wishlist-button icon-heart" />
                                                    <p>97 like</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tf-card-collection">
                                        <Link href="author-2.html">
                                            <div className="media-images-collection">
                                                <img src="assets/images/box-item/img-collection-01.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-02.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-03.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-04.jpg" alt="" />
                                                <div className="author-poster">
                                                    <img src="assets/images/avatar/avatar-01.png" alt="" className="w-full" />
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="card-bottom">
                                            <div className="author">
                                                <h5><Link href="author01.html">Bored ape#21</Link></h5>
                                                <div className="infor">@Themesflat</div>
                                            </div>
                                            <div className="bottom-right">
                                                <div className="shop">
                                                    <div className="icon">
                                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                    <p>12 Item</p>
                                                </div>
                                                <div className="like">
                                                    <span className="wishlist-button icon-heart" />
                                                    <p>97 like</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tf-card-collection">
                                        <Link href="author-2.html">
                                            <div className="media-images-collection">
                                                <img src="assets/images/box-item/img-collection-01.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-02.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-03.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-04.jpg" alt="" />
                                                <div className="author-poster">
                                                    <img src="assets/images/avatar/avatar-01.png" alt="" className="w-full" />
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="card-bottom">
                                            <div className="author">
                                                <h5><Link href="author01.html">Bored ape#21</Link></h5>
                                                <div className="infor">@Themesflat</div>
                                            </div>
                                            <div className="bottom-right">
                                                <div className="shop">
                                                    <div className="icon">
                                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                    <p>12 Item</p>
                                                </div>
                                                <div className="like">
                                                    <span className="wishlist-button icon-heart" />
                                                    <p>97 like</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                            <div className="swiper-pagination pagination-type1" />
                            <div className="swiper-button-next next-type1" />
                            <div className="swiper-button-prev prev-type1" />
                        </Swiper>
                    </div>
                    <div className="heading-section">
                        <h2 className="tf-title style-1 pb-20">My collection</h2>
                    </div>
                    <div className="top-collections style-bottom">
                        <Swiper {...swiperOptions} className="featured pt-10 swiper-container carousel3-type1">
                            <div className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="tf-card-collection">
                                        <Link href="author-2.html">
                                            <div className="media-images-collection">
                                                <img src="assets/images/box-item/img-collection-01.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-02.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-03.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-04.jpg" alt="" />
                                                <div className="author-poster">
                                                    <img src="assets/images/avatar/avatar-01.png" alt="" className="w-full" />
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="card-bottom">
                                            <div className="author">
                                                <h5><Link href="author01.html">Bored ape#21</Link></h5>
                                                <div className="infor">@Themesflat</div>
                                            </div>
                                            <div className="bottom-right">
                                                <div className="shop">
                                                    <div className="icon">
                                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                    <p>12 Item</p>
                                                </div>
                                                <div className="like">
                                                    <span className="wishlist-button icon-heart" />
                                                    <p>97 like</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tf-card-collection">
                                        <Link href="author-2.html">
                                            <div className="media-images-collection">
                                                <img src="assets/images/box-item/img-collection-01.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-02.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-03.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-04.jpg" alt="" />
                                                <div className="author-poster">
                                                    <img src="assets/images/avatar/avatar-01.png" alt="" className="w-full" />
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="card-bottom">
                                            <div className="author">
                                                <h5><Link href="author01.html">Bored ape#21</Link></h5>
                                                <div className="infor">@Themesflat</div>
                                            </div>
                                            <div className="bottom-right">
                                                <div className="shop">
                                                    <div className="icon">
                                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                    <p>12 Item</p>
                                                </div>
                                                <div className="like">
                                                    <span className="wishlist-button icon-heart" />
                                                    <p>97 like</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tf-card-collection">
                                        <Link href="author-2.html">
                                            <div className="media-images-collection">
                                                <img src="assets/images/box-item/img-collection-01.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-02.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-03.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-04.jpg" alt="" />
                                                <div className="author-poster">
                                                    <img src="assets/images/avatar/avatar-01.png" alt="" className="w-full" />
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="card-bottom">
                                            <div className="author">
                                                <h5><Link href="author01.html">Bored ape#21</Link></h5>
                                                <div className="infor">@Themesflat</div>
                                            </div>
                                            <div className="bottom-right">
                                                <div className="shop">
                                                    <div className="icon">
                                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                    <p>12 Item</p>
                                                </div>
                                                <div className="like">
                                                    <span className="wishlist-button icon-heart" />
                                                    <p>97 like</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tf-card-collection">
                                        <Link href="author-2.html">
                                            <div className="media-images-collection">
                                                <img src="assets/images/box-item/img-collection-01.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-02.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-03.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-04.jpg" alt="" />
                                                <div className="author-poster">
                                                    <img src="assets/images/avatar/avatar-01.png" alt="" className="w-full" />
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="card-bottom">
                                            <div className="author">
                                                <h5><Link href="author01.html">Bored ape#21</Link></h5>
                                                <div className="infor">@Themesflat</div>
                                            </div>
                                            <div className="bottom-right">
                                                <div className="shop">
                                                    <div className="icon">
                                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                    <p>12 Item</p>
                                                </div>
                                                <div className="like">
                                                    <span className="wishlist-button icon-heart" />
                                                    <p>97 like</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tf-card-collection">
                                        <Link href="author-2.html">
                                            <div className="media-images-collection">
                                                <img src="assets/images/box-item/img-collection-01.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-02.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-03.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-04.jpg" alt="" />
                                                <div className="author-poster">
                                                    <img src="assets/images/avatar/avatar-01.png" alt="" className="w-full" />
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="card-bottom">
                                            <div className="author">
                                                <h5><Link href="author01.html">Bored ape#21</Link></h5>
                                                <div className="infor">@Themesflat</div>
                                            </div>
                                            <div className="bottom-right">
                                                <div className="shop">
                                                    <div className="icon">
                                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                    <p>12 Item</p>
                                                </div>
                                                <div className="like">
                                                    <span className="wishlist-button icon-heart" />
                                                    <p>97 like</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="tf-card-collection">
                                        <Link href="author-2.html">
                                            <div className="media-images-collection">
                                                <img src="assets/images/box-item/img-collection-01.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-02.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-03.jpg" alt="" />
                                                <img src="assets/images/box-item/img-collection-04.jpg" alt="" />
                                                <div className="author-poster">
                                                    <img src="assets/images/avatar/avatar-01.png" alt="" className="w-full" />
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="card-bottom">
                                            <div className="author">
                                                <h5><Link href="author01.html">Bored ape#21</Link></h5>
                                                <div className="infor">@Themesflat</div>
                                            </div>
                                            <div className="bottom-right">
                                                <div className="shop">
                                                    <div className="icon">
                                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                    <p>12 Item</p>
                                                </div>
                                                <div className="like">
                                                    <span className="wishlist-button icon-heart" />
                                                    <p>97 like</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                            <div className="swiper-pagination pagination-type1" />
                            <div className="swiper-button-next next-type1" />
                            <div className="swiper-button-prev prev-type1" />
                        </Swiper>
                    </div>
                </div>
                
                </div>
            
        </>
    )
}
