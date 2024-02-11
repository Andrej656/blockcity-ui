import Link from "next/link";
import { useState } from 'react';
import { AppConfig, UserSession, showConnect } from '@stacks/connect';
import { StacksMainnet } from '@stacks/network';
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
    const [isSidebar, setSidebar] = useState('');
    const [cardinalAddress, setCardinalAddress] = useState('');
    const [ordinalAddress, setOrdinalAddress] = useState('');

    const handleSidebar = () => setSidebar(!isSidebar);

    const appConfig = new AppConfig();
    const userSession = new UserSession({ appConfig });

    const handleConnect = async () => {
        try {
            if (!userSession.isUserSignedIn()) {
                showConnect({
                    userSession,
                    network: StacksMainnet,
                    appDetails: {
                        name: 'Your App Name',
                        icon: window.location.origin + '/app-icon.png',
                    },
                    onFinish: async () => {
                        const userAddresses = await window.btc?.request('getAddresses');
                        const [firstAddress] = userAddresses?.result?.addresses || [];
                        setCardinalAddress(firstAddress?.address || '');
                        setOrdinalAddress(firstAddress?.address || '');
                    },
                    onCancel: () => {
                        // Handle if the user closes the connection prompt
                    },
                });
            } else {
                setCardinalAddress(userSession.loadUserData().profile.btcAddress?.p2wpkh?.mainnet || '');
                setOrdinalAddress(userSession.loadUserData().profile.btcAddress?.p2tr?.mainnet || '');
            }
        } catch (error) {
            console.error('Error connecting wallet:', error);
        }
    };

    return (
        <>
            <header id="header_main" className={`header_1 header-fixed ${scroll ? "is-fixed is-small" : ""}`}>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="site-header-inner">
                                <div className="wrap-box flex">
                                    <div id="site-logo">
                                        <div id="site-logo-inner">
                                            <Link href="" rel="home" className="main-logo">
                                                <img id="logo_header" src="/assets/images/logo/logo.png" data-retina="assets/images/logo/logo@2x.png" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="mobile-button" onClick={handleMobileMenu}>
                                        <span />
                                    </div>
                                    <nav id="main-nav" className="main-nav">
                                        <Menu />
                                    </nav>
                                    <div className="flat-wallet flex">
                                        <div id="wallet-header">
                                            {userSession.isUserSignedIn() ? (
                                                <>
                                                    <div className="user-address">
                                                        <p>Cardinal Address: {cardinalAddress}</p>
                                                        <p>Ordinal Address: {ordinalAddress}</p>
                                                    </div>
                                                </>
                                            ) : (
                                                <div id="connectbtn" className="tf-button style-1" onClick={handleConnect}>
                                                    <span>Wallet Connect</span>
                                                    <i className="icon-wa" />
                                                </div>
                                            )}
                                        </div>
                                        <div className="canvas" onClick={handleSidebar}>
                                            <span />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`canvas-nav-wrap ${isSidebar ? "active" : ""}`}>
                    <div className="overlay-canvas-nav" onClick={handleSidebar} />
                    <div className="inner-canvas-nav">
                        <div className="side-bar">
                            <Link href="/" rel="home" className="main-logo">
                                <img id="logo_header" src="/assets/images/logo/logo.png" data-retina="assets/images/logo/logo@2x.png" />
                            </Link>
                            <div className="canvas-nav-close" onClick={handleSidebar}>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="white" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 122.878 122.88" enableBackground="new 0 0 122.878 122.88" xmlSpace="preserve"><g><path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" /></g></svg>
                            </div>
                            <div className="widget-search mt-30">
                                <form action="#" method="get" role="search" className="search-form relative">
                                    <input type="search" id="search" className="search-field style-1" placeholder="Search..." name="s" title="Search for" required />
                                    <button className="search search-submit" type="submit" title="Search">
                                        <i className="icon-search" />
                                    </button>
                                </form>
                            </div>
                            <div className="widget widget-categories">
                                <h5 className="title-widget">Categories</h5>
                                <ul>
                                    <li>
                                        <div className="cate-item"><Link href="https://blockcityfi.substack.com/t/announcements">Announcements</Link></div>
                                        <div className="number">(1.483)</div>
                                    </li>
                                    <li>
                                        <div className="cate-item"><Link href="https://blockcityfi.substack.com/p/introduction">Introduction</Link></div>
                                        <div className="number">(97)</div>
                                    </li>
                                    <li>
                                        <div className="cate-item"><Link href=" https://blockcityfi.substack.com/p/join-the-waitlist">Waitlist</Link></div>
                                        <div className="number">(97)</div>
                                    </li>
                                 
                                </ul>
                            </div>
                            <div className="widget">
                                <h5 className="title-widget">Join the community</h5>
                                <li>
                                        <div className="cate-item"><Link href="https://discord.com/invite/AkQ59UFxRC">Discord</Link></div>
                                        <div className="number"></div>
                                    </li> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`mobile-nav-wrap ${isMobileMenu ? "active" : ""}`}>
                    <div className="overlay-mobile-nav" onClick={handleMobileMenu} />
                    <div className="inner-mobile-nav">
                        <Link href="/" rel="home" className="main-logo">
                            <img id="mobile-logo_header" src="/assets/images/logo/logo.png" data-retina="assets/images/logo/logo@2x.png" />
                        </Link>
                        <div className="mobile-nav-close" onClick={handleMobileMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="white" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 122.878 122.88" enableBackground="new 0 0 122.878 122.88" xmlSpace="preserve"><g><path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" /></g></svg>
                        </div>
                        <MobileMenu />
                    </div>
                </div>
            </header>
        </>
    );
}