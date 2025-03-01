'use client'
import Link from "next/link"
export default function Testimonial() {
    return (
        <>

            {/* About News Section */}
            <section className="about-news-section">
                <div className="auto-container">
                    <div className="row clearfix">
                    
                        {/* News Column */}
                        <div className="news-column col-lg-8 col-md-12 col-sm-12">
                            <div className="inner-column">
                                
                                {/* News Block Two */}
                                <div className="news-block-two">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="assets/images/resource/news-9.jpg" alt="" />
                                            {/* Overlay Box */}
                                            <div className="overlay-box">
                                                <div className="overlay-inner">
                                                    <div className="content">
                                                        <Link href="assets/images/resource/recipe-9.jpg" data-fancybox="news" data-caption="" className="icon flaticon-gallery"></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="category">smoothie</div>
                                            <h6><Link href="news-detail">Broad bean and goats’ cheese bruschetta</Link></h6>
                                            <ul className="post-info">
                                                <li>May 21, 2021</li>
                                                <li>2 Comments</li>
                                                <li><Link href="news-detail">Share</Link></li>
                                            </ul>
                                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* News Block Two */}
                                <div className="news-block-two">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="assets/images/resource/news-9.jpg" alt="" />
                                            {/* Overlay Box */}
                                            <div className="overlay-box">
                                                <div className="overlay-inner">
                                                    <div className="content">
                                                        <Link href="assets/images/resource/recipe-9.jpg" data-fancybox="news" data-caption="" className="icon flaticon-gallery"></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="category">smoothie</div>
                                            <h6><Link href="news-detail">Broad bean and goats’ cheese bruschetta</Link></h6>
                                            <ul className="post-info">
                                                <li>May 21, 2021</li>
                                                <li>2 Comments</li>
                                                <li><Link href="news-detail">Share</Link></li>
                                            </ul>
                                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                        {/* About Column */}
                        <div className="about-column col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-column">
                                <h6>About us</h6>
                                <div className="author-image">
                                    <img src="assets/images/resource/author-2.jpg" alt="" />
                                </div>
                                <div className="author-name">Hi Marria</div>
                                <div className="text">ut sem non aliquet. Nullam tincidunt vestibulum condimentum. </div>
                                {/* Social Box */}
                                <ul className="social-box">
                                    <li className="share">Share</li>
                                    <li><Link href="#" className="fa fa-facebook-f"></Link></li>
                                    <li><Link href="#" className="fa fa-dribbble"></Link></li>
                                    <li><Link href="#" className="fa fa-pinterest-p"></Link></li>
                                    <li><Link href="#" className="fa fa-google"></Link></li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* End About News Section */}
    
        </>
    )
}
