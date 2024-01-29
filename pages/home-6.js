import Action6 from "@/components/sections/Action6"
import Action7 from "@/components/sections/Action7"
import CreateSell4 from "@/components/sections/CreateSell4"
import DiscoverItem6 from "@/components/sections/DiscoverItem6"
import FeaturedItem7 from "@/components/sections/FeaturedItem7"
import Seller9 from "@/components/sections/Seller9"
import TopCollections6 from "@/components/sections/TopCollections6"
import Link from "next/link"
import { useState } from "react"
export default function Home() {
    const [isToggled, setToggled] = useState(false)
    const handleToggle = () => setToggled(!isToggled)

    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleClick = (key) => {
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
            <div id="wrapper">
                <div id="page" className="home-6 flex">
                    <div className={`section-menu-left ${isToggled ? "null" : ""}`}>
                        <div className="box-logo">
                            <Link href="/"><img src="/assets/images/logo/logo.png" alt="" /></Link>
                        </div>
                        <div className="connect">
                            <Link href="/market-wallet" id="connectbtn" className="tf-button style-1 type-1 text-center">
                                <span>Wallet connect</span>
                                <i className="icon-wa" />
                            </Link>
                        </div>
                        <div className="list-menu over-content">
                            <ul className="menu-content">
                                <li>
                                    <Link href="/"><i className="icon-home-alt" /> Home</Link>
                                </li>
                                <li>
                                    <Link href="/about-us"><i className="icon-gem-1" /> About us</Link>
                                </li>
                                <li className={isActive.key == 1 ? "has-item active" : "has-item"} onClick={() => handleClick(1)}>
                                    <a className="button-sub-item"><i className="icon-link" /> Explore</a>
                                    <ul className={isActive.key == 1 ? "sub-item active" : "sub-item"}>
                                        <li><Link href="#">Link creation</Link></li>
                                        <li><Link href="#">Link list</Link></li>
                                        <li><Link href="#">Get link / Banner</Link></li>
                                    </ul>
                                </li>
                                <li className={isActive.key == 2 ? "has-item active" : "has-item"} onClick={() => handleClick(2)}>
                                    <a className="button-sub-item"><i className="icon-pages" /> Pages</a>
                                    <ul className={isActive.key == 2 ? "sub-item active" : "sub-item"}>
                                        <li><Link href="#">Link creation</Link></li>
                                        <li><Link href="#">Link list</Link></li>
                                        <li><Link href="#">Get link / Banner</Link></li>
                                    </ul>
                                </li>
                                <li className={isActive.key == 3 ? "has-item active" : "has-item"} onClick={() => handleClick(3)}>
                                    <a className="button-sub-item"><i className="icon-receipt" /> Blog</a>
                                    <ul className={isActive.key == 3 ? "sub-item active" : "sub-item"}>
                                        <li><Link href="#">Link creation</Link></li>
                                        <li><Link href="#">Link list</Link></li>
                                        <li><Link href="#">Get link / Banner</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/contact"><i className="icon-headphones" /> Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="list-menu wrap-bottom">
                            <ul className="menu-bottom">
                                <li className={isActive.key == 4 ? "has-item language relative active" : "has-item language relative"} onClick={() => handleClick(4)}>
                                    <a className="button-sub-item"><img src="/assets/images/english.png" alt="" /> <span>English</span></a>
                                    <ul className={isActive.key == 4 ? "sub-item active" : "sub-item"}>
                                        <li><img src="/assets/images/english.png" alt="" /> <span>English</span></li>
                                        <li><img src="/assets/images/english.png" alt="" /> <span>japan</span></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="#"><i className="icon-sign-out-1" /> Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`wrap-content ${isToggled ? "full" : ""}`}>
                        <Action6 />
                        <FeaturedItem7 />
                        <Seller9 />
                        <CreateSell4 />
                        <DiscoverItem6 />
                        <Action7 />
                        <TopCollections6 />

                        <footer id="footer">
                            <div className="container-fluid">
                                <div className="footer-bottom style-1 items-center">
                                    <p>© {new Date().getFullYear()} OpeN9 - Made By Themesflat</p>
                                    <div className="widget-social">
                                        <ul className="flex">
                                            <li><Link href="#" className="icon-facebook" /></li>
                                            <li><Link href="#" className="icon-twitter" /></li>
                                            <li><Link href="#" className="icon-vt" /></li>
                                            <li><Link href="#" className="icon-tiktok" /></li>
                                            <li><Link href="#" className="icon-youtube" /></li>
                                        </ul>
                                    </div>
                                    <ul className="flex">
                                        <li>
                                            <Link href="#">Privacy Policy</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Terms of Service</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </footer>
                    </div>
                    <div className={`btn-canvas ${isToggled ? " " : "active"}`} onClick={handleToggle}>
                        <div className="canvas">
                            <span />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}