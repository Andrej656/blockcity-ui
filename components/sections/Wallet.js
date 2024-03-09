import Link from 'next/link'
import AutoSlider1 from '../slider/AutoSlider1'
import AutoSlider2 from '../slider/AutoSlider2'

export default function Wallet() {
    return (
        <>
            <div className="wrapper-content">
                <div className="inner-content">
                    <div className="action__body w-full mb-40">
                        <div className="tf-tsparticles">
                            <div id="tsparticles6" data-color="#161616" data-line="#000" />
                        </div>
                        <h2>Connect with your favourite Bitcoin wallet</h2>
                        <div className="flat-button flex">
                            <Link href="#" className="tf-button style-2 h50 w190 mr-10">Explore now<i className="icon-arrow-up-right2" /></Link>
                            <Link href="#" className="tf-button style-2 h50 w230">Connect<i className="icon-arrow-up-right2" /></Link>
                        </div>
                        <div className="bg-home7">
                            <AutoSlider1 />
                            <AutoSlider2 />
                            <AutoSlider1 />
                        </div>
                    </div>
                    <div className="heading-section">
                        <h2 className="tf-title">Connect your wallet</h2>
                    </div>
                    <p>If you don't have a wallet, you can select a provider and create one now. <span className="tf-color button-connect-wallet">LEarn 99$  per month more</span></p>
                    <div id="connect-wallet-grid">
                        <div className="wrap-box-card">
                            <div className="col-item">
                                <div className="box-wallet">
                                    <img src="assets/images/box-icon/wallet-01.png" alt="" />
                                    <h6><Link href="#">Leather</Link></h6>
                                    <p>Hiro wallet for Bitcoin and Stacks</p>
                                </div>
                            </div>
                            <div className="col-item">
                                <div className="box-wallet">
                                    <img src="assets/images/box-icon/wallet-02.png" alt="" />
                                    <h6><Link href="#">Xverse</Link></h6>
                                    <p>Multi token wallet for Bitcoin-like chains</p>
                                </div>
                            </div>
                            <div className="col-item">
                                <div className="box-wallet">
                                    <img src="assets/images/box-icon/wallet-03.png" alt="" />
                                    <h6><Link href="#">Coinbase Wallet</Link></h6>
                                    <p>CEX wallet for multiple token standards</p>
                                </div>
                            </div>
                           
                            </div>
                        </div>
                    </div>
                    <div id="connect-wallet-list">
                        <div className="box-wallet style-1">
                            <img src="assets/images/box-icon/wallet-01.png" alt="" />
                            <div className="info">
                                <h6><Link href="#">Glow</Link></h6>
                                <p>Popular</p>
                            </div>
                            <Link href="#" className="tf-button style-3">Connect <i className="icon-arrow-up-right2" /></Link>
                        </div>
                        <div className="box-wallet style-1">
                            <img src="assets/images/box-icon/wallet-02.png" alt="" />
                            <div className="info">
                                <h6><Link href="#">Coibase Wallet</Link></h6>
                            </div>
                            <Link href="#" className="tf-button style-3">Connect <i className="icon-arrow-up-right2" /></Link>
                        </div>
                        <div className="box-wallet style-1">
                            <img src="assets/images/box-icon/wallet-03.png" alt="" />
                            <div className="info">
                                <h6><Link href="#">WalletConnect</Link></h6>
                            </div>
                            <Link href="#" className="tf-button style-3">Connect <i className="icon-arrow-up-right2" /></Link>
                        </div>
                        <div className="box-wallet style-1">
                            <img src="assets/images/box-icon/wallet-04.png" alt="" />
                            <div className="info">
                                <h6><Link href="#">Ledger</Link></h6>
                            </div>
                            <Link href="#" className="tf-button style-3">Connect <i className="icon-arrow-up-right2" /></Link>
                        </div>
                        <div className="box-wallet style-1">
                            <img src="assets/images/box-icon/wallet-05.png" alt="" />
                            <div className="info">
                                <h6><Link href="#">Phantom</Link></h6>
                                <p>Solana</p>
                            </div>
                            <Link href="#" className="tf-button style-3">Connect <i className="icon-arrow-up-right2" /></Link>
                        </div>
                        <div className="box-wallet style-1">
                            <img src="assets/images/box-icon/wallet-06.png" alt="" />
                            <div className="info">
                                <h6><Link href="#">Bitkeep</Link></h6>
                                <p>BNB Chain</p>
                            </div>
                            <Link href="#" className="tf-button style-3">Connect <i className="icon-arrow-up-right2" /></Link>
                        </div>
                        <div className="box-wallet style-1">
                            <img src="assets/images/box-icon/wallet-07.png" alt="" />
                            <div className="info">
                                <h6><Link href="#">Core</Link></h6>
                                <p>Avalanche</p>
                            </div>
                            <Link href="#" className="tf-button style-3">Connect <i className="icon-arrow-up-right2" /></Link>
                        </div>
                        <div className="box-wallet style-1">
                            <img src="assets/images/box-icon/wallet-08.png" alt="" />
                            <div className="info">
                                <h6><Link href="#">Glow</Link></h6>
                                <p>Solana</p>
                            </div>
                            <Link href="#" className="tf-button style-3">Connect <i className="icon-arrow-up-right2" /></Link>
                        </div>
                        <div className="box-wallet style-1">
                            <img src="assets/images/box-icon/wallet-09.png" alt="" />
                            <div className="info">
                                <h6><Link href="#">Fortmatic</Link></h6>
                            </div>
                            <Link href="#" className="tf-button style-3">Connect <i className="icon-arrow-up-right2" /></Link>
                        </div>
                        <div className="box-wallet style-1">
                            <img src="assets/images/box-icon/wallet-10.png" alt="" />
                            <div className="info">
                                <h6><Link href="#">Kaikas</Link></h6>
                                <p>Klaytn</p>
                            </div>
                            <Link href="#" className="tf-button style-3">Connect <i className="icon-arrow-up-right2" /></Link>
                        </div>
                        <div className="box-wallet style-1">
                            <img src="assets/images/box-icon/wallet-11.png" alt="" />
                            <div className="info">
                                <h6><Link href="#">Bitski</Link></h6>
                            </div>
                            <Link href="#" className="tf-button style-3">Connect <i className="icon-arrow-up-right2" /></Link>
                        </div>
                        <div className="box-wallet style-1">
                            <img src="assets/images/box-icon/wallet-12.png" alt="" />
                            <div className="info">
                                <h6><Link href="#">Solflare</Link></h6>
                                <p>Solana</p>
                            </div>
                            <Link href="#" className="tf-button style-3">Connect <i className="icon-arrow-up-right2" /></Link>
                        </div>
                        <div className="box-wallet style-1">
                            <img src="assets/images/box-icon/wallet-13.png" alt="" />
                            <div className="info">
                                <h6><Link href="#">OperaTouch</Link></h6>
                                <p>Mobile only</p>
                            </div>
                            <Link href="#" className="tf-button style-3">Connect <i className="icon-arrow-up-right2" /></Link>
                        </div>
                        <div className="box-wallet style-1">
                            <img src="assets/images/box-icon/wallet-14.png" alt="" />
                            <div className="info">
                                <h6><Link href="#">OperaTouch</Link></h6>
                                <p>Mobile only</p>
                            </div>
                            <Link href="#" className="tf-button style-3">Connect <i className="icon-arrow-up-right2" /></Link>
                        </div>
                    </div>
                </div>
               
                
            
        </>
    )
}
