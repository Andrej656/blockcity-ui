import Link from 'next/link'
import AutoSlider1 from '../slider/AutoSlider1'
import AutoSlider2 from '../slider/AutoSlider2'

export default function Settings() {
    return (
        <>
            <div className="wrapper-content">
                <div className="inner-content">
                    <div className="action__body w-full mb-40">
                        <div className="tf-tsparticles">
                            <div id="tsparticles8" data-color="#161616" data-line="#000" />
                        </div>
                        <h2>Discover, create and sell your own NFT</h2>
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
                    <div className="heading-section">
                        <h2 className="tf-title pb-30">Setting</h2>
                    </div>
                    <div className="widget-edit mb-30 avatar">
                        <div className="title">
                            <h4>Edit your avatar</h4>
                            <i className="icon-keyboard_arrow_up" />
                        </div>
                        <form action="#">
                            <div className="uploadfile flex">
                                <img src="assets/images/avatar/avatar-07.png" alt="" />
                                <div>
                                    <h6>Upload a new avatar”</h6>
                                    <label>
                                        <input type="file" name="file" />
                                        <span className="text filename">No files selected</span>
                                    </label>
                                    <p className="text">JPEG 100x100</p>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="widget-edit mb-30 profile">
                        <div className="title">
                            <h4>Edit your profile</h4>
                            <i className="icon-keyboard_arrow_up" />
                        </div>
                        <form id="commentform" className="comment-form" noValidate="novalidate">
                            <div className="flex gap30">
                                <fieldset className="name">
                                    <label>Your name*</label>
                                    <input type="text" id="name" placeholder="Enter your name" name="name" tabIndex={2} aria-required="true" required />
                                </fieldset>
                                <fieldset className="email">
                                    <label>Email address*</label>
                                    <input type="email" id="email" placeholder="Your email" name="email" tabIndex={2} aria-required="true" required />
                                </fieldset>
                              </div>
                            <fieldset className="message">
                                <label>Your Bio</label>
                                <textarea id="message" name="message" rows={4} placeholder="Say something about yourself" tabIndex={4} aria-required="true" required />
                            </fieldset>
                            
                        </form>
                    </div>
                    <div className="widget-edit mb-30 password">
                        <div className="title">
                            <h4>Change password</h4>
                            <i className="icon-keyboard_arrow_up" />
                        </div>
                        <form id="commentform" className="comment-form" noValidate="novalidate">
                            <div className="flex gap30">
                                <fieldset className="tel">
                                    <label>Phone number</label>
                                    <input type="tel" id="tel" placeholder="Your phone" name="tel" tabIndex={2} aria-required="true" required />
                                </fieldset>
                                <fieldset className="email">
                                    <label>Email address</label>
                                    <input type="email" id="email" placeholder="Your email" name="email" tabIndex={2} aria-required="true" required />
                                </fieldset>
                            </div>
                            <fieldset className="password">
                                <label>Old password</label>
                                <input type="text" id="password" placeholder="Enter your Old password" name="password" tabIndex={2} aria-required="true" required />
                            </fieldset>
                            <fieldset className="password">
                                <label>New password</label>
                                <input type="text" id="password" placeholder="Enter your New password" name="password" tabIndex={2} aria-required="true" required />
                            </fieldset>
                            <fieldset className="password">
                                <label>Confirm password</label>
                                <input type="text" id="password" placeholder="Confirm password" name="password" tabIndex={2} aria-required="true" required />
                            </fieldset>
                            <div className="btn-submit">
                                <button className="w242 active mr-30">Cancel</button>
                                <button className="w242" type="submit">Save</button>
                            </div>
                        </form>
                    </div>
                    <div className="widget-edit mb-30 setting">
                        <div className="title">
                            <h4>Notification setting</h4>
                            <i className="icon-keyboard_arrow_up" />
                        </div>
                        <form id="commentform" className="comment-form" noValidate="novalidate">
                            <div className="notification-setting-item">
                                <div className="content">
                                    <h6>Order confirmation</h6>
                                    <p>User will be notified when customer order any product</p>
                                </div>
                                <input className="check" type="checkbox" defaultValue="checkbox" name="check" defaultChecked />
                            </div>
                            <div className="notification-setting-item">
                                <div className="content">
                                    <h6>POX cycle starts</h6>
                                    <p>Notification and email for notify that POX cycle started</p>
                                </div>
                                <input className="check" type="checkbox" defaultValue="checkbox" name="check" />
                            </div>
                            <div className="notification-setting-item">
                                <div className="content">
                                    <h6>Payment sucsesfull</h6>
                                    <p>Notification for sucsesfull payment</p>
                                </div>
                                <input className="check" type="checkbox" defaultValue="checkbox" name="check" defaultChecked />
                            </div>
                            <div className="notification-setting-item">
                                <div className="content">
                                    <h6>Notification for approving product</h6>
                                    <p>Prdouct apporved and listed on market</p>
                                </div>
                                <input className="check" type="checkbox" defaultValue="checkbox" name="check" />
                            </div>
                            <div className="notification-setting-item">
                                <div className="content">
                                    <h6>Email notification</h6>
                                    <p>POX cycle starts and ending and distribution of rewards</p>
                                </div>
                                <input className="check" type="checkbox" defaultValue="checkbox" name="check" />
                            </div>
                            <div className="btn-submit">
                                <button className="w242 active mr-30">Cancel</button>
                                <button className="w242" type="submit">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
               
                </div>
            
        </>
    )
}
