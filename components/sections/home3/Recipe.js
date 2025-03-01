'use client'
import Link from "next/link"
export default function Recipe() {
    return (
        <>


        {/* Recipe Section */}
        <section className="recipe-section-two">
            <div className="auto-container">
                {/* Sec Title */}
                <div className="sec-title centered">
                    <div className="title">News & Recipe</div>
                    <h2>Popular Recipes</h2>
                    <div className="separate"></div>
                </div>
                <div className="row clearfix">
                
                    {/* Recipe Block Two */}
                    <div className="recipe-block-two col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="image">
                                <img src="assets/images/resource/recipe-5.jpg" alt="" />
                                {/* Overlay Box */}
                                <div className="overlay-box">
                                    <div className="overlay-inner">
                                        <div className="content">
                                            <Link href="assets/images/resource/recipe-5.jpg" data-fancybox="news" data-caption="" className="icon flaticon-gallery"></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lower-content">
                                <div className="category">smoothie</div>
                                <h6><Link href="news-detail">Broad bean and goats’ cheese bruschetta</Link></h6>
                                <ul className="post-info">
                                    <li>May 21, 2021</li>
                                    <li>2 Comments</li>
                                    <li><Link href="news-detail">Share</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    {/* Recipe Block Two */}
                    <div className="recipe-block-two col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="image">
                                <img src="assets/images/resource/recipe-6.jpg" alt="" />
                                {/* Overlay Box */}
                                <div className="overlay-box">
                                    <div className="overlay-inner">
                                        <div className="content">
                                            <Link href="assets/images/resource/recipe-6.jpg" data-fancybox="news" data-caption="" className="icon flaticon-gallery"></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lower-content">
                                <div className="category">smoothie</div>
                                <h6><Link href="news-detail">Broad bean and goats’ cheese bruschetta</Link></h6>
                                <ul className="post-info">
                                    <li>May 21, 2021</li>
                                    <li>2 Comments</li>
                                    <li><Link href="news-detail">Share</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    {/* Recipe Block Two */}
                    <div className="recipe-block-two col-lg-4 col-md-6 col-sm-12">
                        <div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="image">
                                <img src="assets/images/resource/recipe-7.jpg" alt="" />
                                {/* Overlay Box */}
                                <div className="overlay-box">
                                    <div className="overlay-inner">
                                        <div className="content">
                                            <Link href="assets/images/resource/recipe-7.jpg" data-fancybox="news" data-caption="" className="icon flaticon-gallery"></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lower-content">
                                <div className="category">smoothie</div>
                                <h6><Link href="news-detail">Broad bean and goats’ cheese bruschetta</Link></h6>
                                <ul className="post-info">
                                    <li>May 21, 2021</li>
                                    <li>2 Comments</li>
                                    <li><Link href="news-detail">Share</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </section>
        {/* End Recipe Section Two */}
            

        </>
    )
}
