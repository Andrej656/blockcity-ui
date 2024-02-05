import Link from "next/link";

export default function Footer1() {
    return (
        <>
            <footer id="footer">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-content flex flex-grow">
                                <div className="widget-logo flex-grow">
                                    <div className="logo-footer" id="logo-footer">
                                        <Link href="#top"> {/* Assuming your top section has an id="top" */}
                                            <img id="logo_footer" src="/assets/images/logo/logo.png" data-retina="assets/images/logo/logo@2x.png" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="widget-last">
                                    <h5 className="title-widget mt-30">Join the community</h5>
                                    <div className="widget-social">
                                        <ul className="flex">
                                            <li><Link href="#" className="icon-facebook" /></li>
                                            <li><Link href="#" className="icon-twitter" /></li>
                                            <li><Link href="#" className="icon-vt" /></li>
                                            <li><Link href="#" className="icon-tiktok" /></li>
                                            <li><Link href="#" className="icon-youtube" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>© {new Date().getFullYear()} Website proudly made by AV</p>
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
        </>
    );
}
