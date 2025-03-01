'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import GallerySlider1 from '@/components/slider/GallerySlider1'
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
export default function Home() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout headerStyle={5} footerStyle={1} breadcrumbTitle="Menu">
               
            {/* Menu Page Section */}
            <section className="menu-page-section">
                <div className="auto-container">
                    <div className="row clearfix">
                    
                        {/* Menu Block Two */}
                        <div className="menu-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="side-icon">
                                    <img src="assets/images/icons/menu-icon-1.png" alt="" />
                                </div>
                                <div className="icon">
                                    <img src="assets/images/icons/menu-1.png" alt="" />
                                </div>
                                <h6><Link href="#">Awesome taste</Link></h6>
                                <div className="text">Us percipit urbanitas referrentur ea. Mei at numquam molestiae intellegam.</div>
                            </div>
                        </div>
                        
                        {/* Menu Block Two */}
                        <div className="menu-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="side-icon">
                                    <img src="assets/images/icons/menu-icon-2.png" alt="" />
                                </div>
                                <div className="icon">
                                    <img src="assets/images/icons/menu-2.png" alt="" />
                                </div>
                                <h6><Link href="#">Organic fruits</Link></h6>
                                <div className="text">Us percipit urbanitas referrentur ea. Mei at numquam molestiae intellegam.</div>
                            </div>
                        </div>
                        
                        {/* Menu Block Two */}
                        <div className="menu-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="side-icon">
                                    <img src="assets/images/icons/menu-icon-3.png" alt="" />
                                </div>
                                <div className="icon">
                                    <img src="assets/images/icons/menu-3.png" alt="" />
                                </div>
                                <h6><Link href="#">Healthy Blends</Link></h6>
                                <div className="text">Us percipit urbanitas referrentur ea. Mei at numquam molestiae intellegam.</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* End Restaurant Section */}
            
            {/* Video Section */}
            <section className="video-section-two">
                <div className="outer-container">
                    {/* Video Box */}
                    <div className="video-box">
                        <figure className="video-image">
                            <img src="assets/images/background/8.jpg" alt=""/>
                        </figure>
                        <a onClick={() => setOpen(true)} className="lightbox-image overlay-box"><span className="flaticon-play-arrow"><i className="ripple"></i></span></a>
                    </div>
                </div>
            </section>
            {/* End Video Section */}
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
            
            {/* Menus Section */}
            <section className="menus-section style-two">
                <figure className="menu-bottom-image">
                    <img src="assets/images/resource/menu-9.jpg" alt=""/>
                </figure>
                <div className="auto-container">
                    {/* Sec Title */}
                    <div className="sec-title centered">
                        <div className="title">Softly & Crunchy</div>
                        <h2>Menus</h2>
                        <div className="separate"></div>
                    </div>
                    <div className="row clearfix">
                    
                        {/* Menu Column */}
                        <div className="menu-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                            
                                {/* Menu Block */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <div className="menu-image">
                                            <Link href="menu"><img src="assets/images/resource/menu-1.jpg" alt="" /></Link>
                                        </div>
                                        <h6><Link href="menu">Grilled Toast Burger</Link></h6>
                                        <div className="title">Crispy black garlic</div>
                                        <div className="price-box">
                                            <span className="price">$15</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Menu Block */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <div className="menu-image">
                                            <Link href="menu"><img src="assets/images/resource/menu-3.jpg" alt="" /></Link>
                                        </div>
                                        <h6><Link href="menu">Fried snacks</Link></h6>
                                        <div className="title">Crispy black garlic</div>
                                        <div className="price-box">
                                            <span className="price">$15</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Menu Block */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <div className="menu-image">
                                            <Link href="menu"><img src="assets/images/resource/menu-5.jpg" alt="" /></Link>
                                        </div>
                                        <h6><Link href="menu">Pizza</Link></h6>
                                        <div className="title">Crispy black garlic</div>
                                        <div className="price-box">
                                            <span className="price">$15</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Menu Block */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <div className="menu-image">
                                            <Link href="menu"><img src="assets/images/resource/menu-7.jpg" alt="" /></Link>
                                        </div>
                                        <h6><Link href="menu">Sandwiches</Link></h6>
                                        <div className="title">Crispy black garlic</div>
                                        <div className="price-box">
                                            <span className="price">$15</span>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                        {/* Menu Column */}
                        <div className="menu-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                {/* Menu Block */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <div className="menu-image">
                                            <Link href="menu"><img src="assets/images/resource/menu-2.jpg" alt="" /></Link>
                                        </div>
                                        <h6><Link href="menu">Coca Cola</Link></h6>
                                        <div className="title">Carbonated Drinks</div>
                                        <div className="price-box">
                                            <span className="price">$15</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Menu Block */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <div className="menu-image">
                                            <Link href="menu"><img src="assets/images/resource/menu-4.jpg" alt="" /></Link>
                                        </div>
                                        <h6><Link href="menu">Papsi</Link></h6>
                                        <div className="title">Carbonated Drinks</div>
                                        <div className="price-box">
                                            <span className="price">$15</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Menu Block */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <div className="menu-image">
                                            <Link href="menu"><img src="assets/images/resource/menu-6.jpg" alt="" /></Link>
                                        </div>
                                        <h6><Link href="menu">Mirinda</Link></h6>
                                        <div className="title">Carbonated Drinks</div>
                                        <div className="price-box">
                                            <span className="price">$15</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Menu Block */}
                                <div className="menu-block">
                                    <div className="inner-box">
                                        <div className="menu-image">
                                            <Link href="menu"><img src="assets/images/resource/menu-8.jpg" alt="" /></Link>
                                        </div>
                                        <h6><Link href="menu">Fanta</Link></h6>
                                        <div className="title">Carbonated Drinks</div>
                                        <div className="price-box">
                                            <span className="price">$15</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* End Menus Section */}
            
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