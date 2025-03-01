'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import GallerySlider1 from '@/components/slider/GallerySlider1'

export default function Home() {

    return (
        <>
            <Layout headerStyle={5} footerStyle={1} breadcrumbTitle="Milk Shake">
                {/* Milkshake Section */}
                <section className="milkshake-section">
                    <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/icons/icon-1.png)' }} ></div>
                    <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/icons/icon-2.png)' }} ></div>
                    <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/icons/icon-3.png)' }} ></div>
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="big-image">
                                <img src="assets/images/resource/milkshake.jpg" alt="" />
                            </div>
                            <div className="lower-content">
                                <div className="section-text">yummy</div>
                                <div className="text">
                                    <p>A milkshake is a sweet drink made by blending milk, ice cream, and flavorings or sweeteners such as butterscotch, caramel sauce, chocolate syrup, fruit syrup, or whole fruit into a thick, sweet, cold mixture. It may also be made using other types of milk such as almond milk, coconut milk, or soy milk.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo <Link href="#">inventore veritatis et quasi architecto beatae vitae</Link> dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Milkshake Section */}
                
                {/* Menus Section */}
                <section className="menus-section style-two">
                    <figure className="menu-bottom-image">
                        <img src="assets/images/resource/menu-10.png" alt=""/>
                    </figure>
                    <div className="auto-container">
                        {/* Sec Title */}
                        <div className="sec-title centered">
                            <h2>MilkShake <span>Variation</span></h2>
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
                                                <Link href="menu"><img src="assets/images/resource/menu-11.jpg" alt="" /></Link>
                                            </div>
                                            <h6><Link href="menu"> Banana Milkshake</Link></h6>
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
                                                <Link href="menu"><img src="assets/images/resource/menu-12.jpg" alt="" /></Link>
                                            </div>
                                            <h6><Link href="menu">Vanilla Milkshake. </Link></h6>
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
                                                <Link href="menu"><img src="assets/images/resource/menu-13.jpg" alt="" /></Link>
                                            </div>
                                            <h6><Link href="menu">Mango Milkshake</Link></h6>
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
                                                <Link href="menu"><img src="assets/images/resource/menu-14.jpg" alt="" /></Link>
                                            </div>
                                            <h6><Link href="menu">Banana Khajur Milkshake.</Link></h6>
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
                                                <Link href="menu"><img src="assets/images/resource/menu-15.jpg" alt="" /></Link>
                                            </div>
                                            <h6><Link href="menu">Chocolate Milkshake.</Link></h6>
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
                                                <Link href="menu"><img src="assets/images/resource/menu-16.jpg" alt="" /></Link>
                                            </div>
                                            <h6><Link href="menu">Strawberry Milkshake.</Link></h6>
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
                                                <Link href="menu"><img src="assets/images/resource/menu-17.jpg" alt="" /></Link>
                                            </div>
                                            <h6><Link href="menu">Chocolate-Banana Milkshake.</Link></h6>
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
                                                <Link href="menu"><img src="assets/images/resource/menu-18.jpg" alt="" /></Link>
                                            </div>
                                            <h6><Link href="menu">Cookies and Cream Milkshake.</Link></h6>
                                            <div className="title">Crispy black garlic</div>
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