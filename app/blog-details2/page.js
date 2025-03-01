
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import GallerySlider1 from '@/components/slider/GallerySlider1'
export default function Home() {

    return (
        <>
            <Layout headerStyle={5} footerStyle={1} breadcrumbTitle="Blog No Image">
                {/* Sidebar Page Container */}
                <div className="sidebar-page-container">
                    <div className="section-text">yummy</div>
                    <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/icons/icon-1.png)' }} ></div>
                    <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/icons/icon-2.png)' }} ></div>
                    <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/icons/icon-3.png)' }} ></div>
                    <div className="auto-container">
                        <div className="row clearfix">
                            
                            {/* Content Side */}
                            <div className="content-side col-lg-8 col-md-12 col-sm-12">
                                <div className="blog-detail">
                                    <div className="inner-box">
                                        <div className="lower-content">
                                            <div className="category">smoothie</div>
                                            <h3>Broad bean and goats’ cheese bruschetta</h3>
                                            <ul className="post-info">
                                                <li>May 21, 2021</li>
                                                <li>2 Comments</li>
                                                <li><Link href="news-detail">Share</Link></li>
                                            </ul>
                                            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsannec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet velit.</p>
                                            <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat.</p>
                                            <blockquote>
                                                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsannec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet velit.
                                            </blockquote>
                                            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsannec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet velit.</p>
                                            <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat.</p>
                                            {/* Post Share Options*/}
                                            <div className="post-share-options">
                                                <ul className="tags">
                                                    <li><span className="icon fa fa-tag"></span></li>
                                                    <li><Link href="#">Colorful</Link></li>
                                                    <li><Link href="#">Fruit Bowl</Link></li>
                                                    <li><Link href="#">Healthy</Link></li>
                                                    <li><Link href="#">Ice Cream</Link></li>
                                                    <li><Link href="#">Mixed Shakes</Link></li>
                                                    <li><Link href="#">Smoothie</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Author Box */}
                                        <div className="author-box">
                                            <div className="box-inner">
                                                <div className="content">
                                                    <div className="author-image">
                                                        <img src="assets/images/resource/author-3.jpg" alt="" />
                                                    </div>
                                                    <h6>Amy Burton</h6>
                                                    <div className="text">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum.</div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Author Box */}
                                        
                                        {/* Comments Area */}
                                        <div className="comments-area">
                                            <div className="group-title">
                                                <h4>2 Comments</h4>
                                            </div>
                                            
                                            <div className="comment-box">
                                                <div className="comment">
                                                    <div className="author-thumb"><img src="assets/images/resource/author-4.jpg" alt=""/></div>
                                                    <div className="comment-info clearfix"><strong>Nikol</strong><div className="comment-time">7 months ago </div></div>
                                                    <div className="text">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum.</div>
                                                    <Link className="theme-btn reply-btn" href="#"><span className="fa fa-mail-reply"></span> Reply</Link>
                                                </div>
                                            </div>
                                            
                                            <div className="comment-box reply-comment">
                                                <div className="comment">
                                                    <div className="author-thumb"><img src="assets/images/resource/author-5.jpg" alt=""/></div>
                                                    <div className="comment-info clearfix"><strong>Randow</strong><div className="comment-time">7 months ago </div></div>
                                                    <div className="text">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum.</div>
                                                    <Link className="theme-btn reply-btn" href="#"><span className="fa fa-mail-reply"></span> Reply</Link>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        
                                        {/* Comment Form */}
                                        <div className="comment-form-box">
                                            <div className="group-title">
                                                <h4>Leave a Reply</h4>
                                                <div className="comment-text">Your email address will not be published. Required fields are marked *</div>
                                            </div>
                                            
                                            {/* Comment Form */}
                                            <div className="comment-form">
                                                {/* Contact Form */}
                                                <form method="post">
                                                    <div className="row clearfix">
                                                    
                                                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                            <textarea name="message" placeholder="Your Comment"></textarea>
                                                        </div>
                                                    
                                                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                            <input type="text" name="username" placeholder="Your Name"/>
                                                        </div>
                                                        
                                                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                            <input type="email" name="email" placeholder="Your Email"/>
                                                        </div>
                                                        
                                                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                            <input type="text" name="subject" placeholder="Subject"/>
                                                        </div>
                                                        
                                                        <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                            <div className="check-box"><input type="checkbox" name="shipping-option" id="account-option"/> &ensp; <label >Save my name, email, and website in this browser for the next time I comment.</label></div>
                                                        </div>
                                                        
                                                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                            <button type="submit" className="theme-btn btn-style-one clearfix"><span className="icon"></span>Post Comment</button>
                                                        </div>
                                                        
                                                    </div>
                                                </form>
                                                {/* Contact Form */}
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                                
                            {/* Sidebar Side */}
                            <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
                                <aside className="sidebar sticky-top">
                                    
                                    {/* Search */}
                                    <div className="sidebar-widget search-box">
                                        <div className="sidebar-title">
                                            <h6>Search Course</h6>
                                        </div>
                                        <form method="post" >
                                            <div className="form-group">
                                                <input type="search" name="search-field" placeholder="Your search"/>
                                                <button type="submit"><span className="icon fa fa-search"></span></button>
                                            </div>
                                        </form>
                                    </div>
                                    
                                    {/* About Widget */}
                                    <div className="sidebar-widget about-widget">
                                        <div className="widget-content">
                                            <div className="sidebar-title">
                                                <h6>About us</h6>
                                            </div>
                                            <div className="text">Pellentesque semper ut sem non aliquet. Nullam tincidunt vestibulum condimentum. Duis at mollis orci. Nulla facilisi. Pellentesque in mi ut diam consequat sollicitudin</div>
                                        </div>
                                    </div>
                                    
                                    {/* Category Widget */}
                                    <div className="sidebar-widget category-widget">
                                        <div className="widget-content">
                                            <div className="sidebar-title">
                                                <h6>Product categories</h6>
                                            </div>
                                            <ul className="cat-list">
                                                <li><Link href="#">Colorful</Link></li>
                                                <li><Link href="#">Fruit Bowl</Link></li>
                                                <li><Link href="#">Healthy</Link></li>
                                                <li><Link href="#">Ice Cream</Link></li>
                                                <li><Link href="#">Mixed</Link></li>
                                                <li><Link href="#">Shakes</Link></li>
                                                <li><Link href="#">Smoothie</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    {/* Popular Posts */}
                                    <div className="sidebar-widget popular-posts">
                                        <div className="widget-content">
                                            <div className="sidebar-title">
                                                <h6>Products</h6>
                                            </div>

                                            <article className="post">
                                                <figure className="post-thumb"><img src="assets/images/resource/post-thumb-1.jpg" alt=""/><Link href="news-detail" className="overlay-box"><span className="icon fa fa-link"></span></Link></figure>
                                                <div className="text"><Link href="news-detail">Hippie Chick</Link></div>
                                                <div className="post-info">$120</div>
                                            </article>

                                            <article className="post">
                                                <figure className="post-thumb"><img src="assets/images/resource/post-thumb-2.jpg" alt=""/><Link href="news-detail" className="overlay-box"><span className="icon fa fa-link"></span></Link></figure>
                                                <div className="text"><Link href="news-detail">Hippie Chick</Link></div>
                                                <div className="post-info">$120</div>
                                            </article>
                                            
                                            <article className="post">
                                                <figure className="post-thumb"><img src="assets/images/resource/post-thumb-3.jpg" alt=""/><Link href="news-detail" className="overlay-box"><span className="icon fa fa-link"></span></Link></figure>
                                                <div className="text"><Link href="news-detail">Hippie Chick</Link></div>
                                                <div className="post-info">$120</div>
                                            </article>
                                            
                                        </div>
                                    </div>
                                    
                                    {/* Tags Posts */}
                                    <div className="sidebar-widget tags-posts">
                                        <div className="widget-content">
                                            <div className="sidebar-title">
                                                <h6>Product tags</h6>
                                            </div>
                                            <ul className="tag-list clearfix">
                                                <li><Link href="#">Colorful</Link></li>
                                                <li><Link href="#">Fruit Bowl</Link></li>
                                                <li><Link href="#">Healthy</Link></li>
                                                <li><Link href="#">Ice Cream</Link></li>
                                                <li><Link href="#">Mixed</Link></li>
                                                <li><Link href="#">Shakes</Link></li>
                                                <li><Link href="#">Smoothie</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    {/* Social Widget */}
                                    <div className="sidebar-widget social-widget">
                                        <div className="sidebar-title">
                                            <h6>Share</h6>
                                        </div>
                                        <ul className="social-list">
                                            <li><Link href="#"><span className="icon fa fa-facebook"></span></Link></li>
                                            <li><Link href="#"><span className="icon fa fa-twitter"></span></Link></li>
                                            <li><Link href="#"><span className="icon fa fa-instagram"></span></Link></li>
                                            <li><Link href="#"><span className="icon fa fa-dribbble"></span></Link></li>
                                        </ul>
                                    </div>
                                    
                                </aside>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                {/* Gallery Section */}
                <section className="gallery-section">
                    <div className="outer-container">
                        <GallerySlider1/> 
                    </div>
                </section>
                {/* End Gallery Section */}

            </Layout>
        </>
    )
}