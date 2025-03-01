import Link from "next/link"
import Layout from "@/components/layout/Layout"
import GallerySlider1 from '@/components/slider/GallerySlider1'
export default function Home() {

    return (
        <>
        <Layout headerStyle={5} footerStyle={1} breadcrumbTitle="Frappe">
        {/* Milkshake Section */}
        <section className="milkshake-section">
            <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/icons/icon-1.png)' }} ></div>
            <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/icons/icon-2.png)' }} ></div>
            <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/icons/icon-3.png)' }} ></div>
            <div className="auto-container">
                <div className="inner-container">
                    <div className="big-image">
                        <img src="assets/images/resource/frappe.jpg" alt="" />
                    </div>
                    <div className="lower-content">
                        <div className="section-text">yummy</div>
                        <div className="text">
                            <p>A frappe (pronounced frap-pay) is an iced beverage that has been shaken, blended or beaten to produce a tasty, foamy, and refreshing drink. It is served cold, often with whipped cream and toppings. You can add ice before or after beating the coffee and custom additives such as sugar, milk, vanilla, and sweet sauces.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Milkshake Section */}
        
        {/* Frape Variant Section */}
        <section className="frape-variant-section">
            <div className="auto-container">
                <div className="frape-image">
                    <img src="assets/images/resource/frape-5.jpg" alt="" />
                </div>
                {/* Sec Title */}
                <div className="sec-title centered">
                    <h2>MilkShake <span>Variation</span></h2>
                    <div className="separate"></div>
                </div>
                <div className="row clearfix">
                    
                    {/* Frape Block */}
                    <div className="frape-block col-lg-3 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image">
                                <Link href="restaurant"><img src="assets/images/resource/frape-1.jpg" alt="" /></Link>
                            </div>
                            <div className="lower-box">
                                <div className="price">$15</div>
                                <h6><Link href="restaurant">Chocolate Dutch Frappe</Link></h6>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod veniam, quis.nostrud</div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Frape Block */}
                    <div className="frape-block col-lg-3 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image">
                                <Link href="restaurant"><img src="assets/images/resource/frape-2.jpg" alt="" /></Link>
                            </div>
                            <div className="lower-box">
                                <div className="price">$120</div>
                                <h6><Link href="restaurant">Java Chip Frappuccino</Link></h6>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod veniam, quis.nostrud</div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Frape Block */}
                    <div className="frape-block col-lg-3 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image">
                                <Link href="restaurant"><img src="assets/images/resource/frape-3.jpg" alt="" /></Link>
                            </div>
                            <div className="lower-box">
                                <div className="price">$75</div>
                                <h6><Link href="restaurant">Vanilla frappe</Link></h6>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod veniam, quis.nostrud</div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Frape Block */}
                    <div className="frape-block col-lg-3 col-md-6 col-sm-12">
                        <div className="inner-box">
                            <div className="image">
                                <Link href="restaurant"><img src="assets/images/resource/frape-4.jpg" alt="" /></Link>
                            </div>
                            <div className="lower-box">
                                <div className="price">$25</div>
                                <h6><Link href="restaurant">Chocolate Dutch Frappe</Link></h6>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod veniam, quis.nostrud</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        {/* End Frape Variant Section */}
        
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