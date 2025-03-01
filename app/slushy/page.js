'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import GallerySlider1 from '@/components/slider/GallerySlider1'


export default function Home() {

    return (
        <>
            <Layout headerStyle={5} footerStyle={1} breadcrumbTitle="Slushy">
                <div>
                    {/* Milkshake Section */}
                    <section className="milkshake-section">
                        <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/icons/icon-1.png)' }} ></div>
                        <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/icons/icon-2.png)' }} ></div>
                        <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/icons/icon-3.png)' }} ></div>
                        <div className="auto-container">
                            <div className="inner-container">
                                <div className="big-image">
                                    <img src="assets/images/resource/slushy.jpg" alt="" />
                                </div>
                                <div className="lower-content">
                                    <div className="section-text">yummy</div>
                                    <div className="text">
                                        <p>A slushy, sometimes spelt as slushie and slushie, also commonly referred to as a slush, frozen beverage, or frozen drink, is a type of beverage made of flavored ice and a drink, commonly soda, similar to granitas. A slushy can either be carbonated or non-carbonated.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
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
                                <h2>Slushy <span>Variation</span></h2>
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
                                                    <Link href="menu"><img src="assets/images/resource/menu-27.jpg" alt="" /></Link>
                                                </div>
                                                <h6><Link href="menu">Strawberry</Link></h6>
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
                                                    <Link href="menu"><img src="assets/images/resource/menu-28.jpg" alt="" /></Link>
                                                </div>
                                                <h6><Link href="menu">Sour Apple</Link></h6>
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
                                                    <Link href="menu"><img src="assets/images/resource/menu-29.jpg" alt="" /></Link>
                                                </div>
                                                <h6><Link href="menu">Bubblegum</Link></h6>
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
                                                    <Link href="menu"><img src="assets/images/resource/menu-30.jpg" alt="" /></Link>
                                                </div>
                                                <h6><Link href="menu">Blue Raspberry</Link></h6>
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
                                                    <Link href="menu"><img src="assets/images/resource/menu-31.jpg" alt="" /></Link>
                                                </div>
                                                <h6><Link href="menu">Grape</Link></h6>
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
                                                    <Link href="menu"><img src="assets/images/resource/menu-32.jpg" alt="" /></Link>
                                                </div>
                                                <h6><Link href="menu">Cherry</Link></h6>
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
                                                    <Link href="menu"><img src="assets/images/resource/menu-33.jpg" alt="" /></Link>
                                                </div>
                                                <h6><Link href="menu">Sour Cherry</Link></h6>
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
                                                    <Link href="menu"><img src="assets/images/resource/menu-34.jpg" alt="" /></Link>
                                                </div>
                                                <h6><Link href="menu">Lemon and Lime</Link></h6>
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
                </div>

            </Layout>
        </>
    )
}