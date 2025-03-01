'use client'
import Link from "next/link"
export default function Recipe2() {
    return (
        <>
            {/* Recipe Section Three */}
            <section className="recipe-section-three">
                <div className="auto-container">
                    <div className="row clearfix">
                        {/* Column */}
                        <div className="column col-lg-6 col-md-12 col-sm-12">
                            {/* Sec Title Two */}
                            <div className="sec-title-two">
                                <div className="title">All post</div>
                                <h4>Featured recipes</h4>
                                <div className="separator"></div>
                            </div>
                            
                            {/* Recipe Block Three */}
                            <div className="recipe-block-three">
                                <div className="inner-box">
                                    <div className="image">
                                        <img src="assets/images/resource/recipe-8.jpg" alt="" />
                                        {/* Overlay Box */}
                                        <div className="overlay-box">
                                            <div className="overlay-inner">
                                                <div className="content">
                                                    <Link href="assets/images/resource/recipe-8.jpg" data-fancybox="news" data-caption="" className="icon flaticon-gallery"></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lower-content">
                                        <div className="category">smoothie</div>
                                        <ul className="post-info">
                                            <li>May 21, 2021</li>
                                            <li>2 Comments</li>
                                            <li><Link href="news-detail">Share</Link></li>
                                        </ul>
                                        <h6><Link href="news-detail">Broad bean and goats’ cheese bruschetta</Link></h6>
                                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        {/* Column */}
                        <div className="column col-lg-6 col-md-12 col-sm-12">
                            {/* Sec Title Two */}
                            <div className="sec-title-two">
                                <div className="title">All post</div>
                                <h4>Recent Recipes</h4>
                                <div className="separator"></div>
                            </div>
                            
                            {/* Recipe Block Four */}
                            <div className="recipe-block-four">
                                <div className="inner-box">
                                    <div className="image">
                                        <img src="assets/images/resource/recipe-9.jpg" alt="" />
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
                                        <ul className="post-info">
                                            <li>May 21, 2021</li>
                                            <li>2 Comments</li>
                                            <li><Link href="news-detail">Share</Link></li>
                                        </ul>
                                        <h6><Link href="news-detail">Broad bean and goats’ cheese bruschetta</Link></h6>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Recipe Block Four */}
                            <div className="recipe-block-four">
                                <div className="inner-box">
                                    <div className="image">
                                        <img src="assets/images/resource/recipe-10.jpg" alt="" />
                                        {/* Overlay Box */}
                                        <div className="overlay-box">
                                            <div className="overlay-inner">
                                                <div className="content">
                                                    <Link href="assets/images/resource/recipe-10.jpg" data-fancybox="news" data-caption="" className="icon flaticon-gallery"></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <div className="category">smoothie</div>
                                        <ul className="post-info">
                                            <li>May 21, 2021</li>
                                            <li>2 Comments</li>
                                            <li><Link href="news-detail">Share</Link></li>
                                        </ul>
                                        <h6><Link href="news-detail">Broad bean and goats’ cheese bruschetta</Link></h6>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Recipe Block Four */}
                            <div className="recipe-block-four">
                                <div className="inner-box">
                                    <div className="image">
                                        <img src="assets/images/resource/recipe-11.jpg" alt="" />
                                        {/* Overlay Box */}
                                        <div className="overlay-box">
                                            <div className="overlay-inner">
                                                <div className="content">
                                                    <Link href="assets/images/resource/recipe-11.jpg" data-fancybox="news" data-caption="" className="icon flaticon-gallery"></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <div className="category">smoothie</div>
                                        <ul className="post-info">
                                            <li>May 21, 2021</li>
                                            <li>2 Comments</li>
                                            <li><Link href="news-detail">Share</Link></li>
                                        </ul>
                                        <h6><Link href="news-detail">Broad bean and goats’ cheese bruschetta</Link></h6>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            {/* End Recipe Section Three */}
        </>
    )
}
