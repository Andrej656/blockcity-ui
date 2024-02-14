import { useEffect, useState } from "react";
import BackToTop from '../elements/BackToTop';
import Breadcrumb from './Breadcrumb';
import PageHead from './PageHead';
import Footer1 from './footer/Footer1';
import Header1 from "./header/Header1";

export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children, pageCls }) {
    const [scroll, setScroll] = useState(0);
    const [isMobileMenu, setMobileMenu] = useState(false);

    const handleMobileMenu = () => setMobileMenu(!isMobileMenu);

    useEffect(() => {
        const WOW = require('wowjs');
        window.wow = new WOW.WOW({
            live: false
        });
        window.wow.init();

        const handleScroll = () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        };

        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [scroll]);

    return (
        <>
            <PageHead headTitle={headTitle} />
            <div id="wrapper">
                <div id="page" className={`pt-40 ${pageCls ? pageCls : ""}`}>
                    {headerStyle === 1 && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />}
                    
                    {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
                    
                    {children}

                    {footerStyle === 1 && <Footer1 />}
                </div>
            </div>
            <BackToTop />
        </>
    );
}
