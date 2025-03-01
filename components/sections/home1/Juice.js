'use client'
import Link from "next/link"
import Fluid from "./Fluid"
export default function Juice() {
    
    return (
        <>


        {/* Juice Section */}
        <section className="juice-section">
            {/* <div className="section-text">yummy</div> */}
            <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/background/1.png)' }} ></div>
            {/* <div className="pattern-layer-two" style={{ backgroundImage: 'url(assets/images/resource/juice-glass.png)' }} ></div> */}
            <div className="auto-container">
                <div className="row clearfix">
                
                    {/* Image Column */}
                    <div className="image-column col-lg-7 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="image">
                                <img src="./assets/images/allimg/homepage/Habout1.webp" alt=""/>
                            </div>
                        </div>
                    </div>
                    
                    {/* Content Column */}
                    <div className="content-column col-lg-5 col-md-12 col-sm-12">
                        <div className="inner-column">
                            {/* Sec Title */}
                            <div className="sec-title">
                                <div className="title">Drink for Health</div>
                                <h2>100% <span className="theme_color">Natural</span></h2>
                                <div className="separate"></div>
                                <div className="text">Enjoy the goodness of real fruits in every sip! No preservatives, just pure refreshment to keep you energized all day
                                </div>
                            </div>
                            {/* <div  className="theme-btn btn-style-one clearfix" style={{borderRadius:'1px', backgroundColor:'#45B653'}}><span className="icon"></span>Buy Now</div> */}
                            <Link href="menu" className="theme-btn btn-style-two clearfix" ><span className="icon"></span>100% UV Treated RO Water</Link>
                        </div>
                    </div>
                    
                </div>



                
            </div>
            {/* <Fluid/> */}
        </section>




        <section className="juice-section">
            {/* <div className="section-text">yummy</div> */}
            <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/background/1.png)' }} ></div>
            {/* <div className="pattern-layer-two" style={{ backgroundImage: 'url(assets/images/resource/juice-glass.png)' }} ></div> */}
            <div className="auto-container">
                <div className="row clearfix">
                
                    {/* Image Column */}
                    <div className="image-column col-lg-7 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="image">
                                <img src="./assets/images/allimg/homepage/Habout2.webp" alt=""/>
                            </div>
                        </div>
                    </div>
                    
                    {/* Content Column */}
                    <div className="content-column col-lg-5 col-md-12 col-sm-12">
                        <div className="inner-column">
                            {/* Sec Title */}
                            <div className="sec-title">
                                <div className="title">Drink for Health</div>
                                <h2>Naturally <span className="theme_color">Delicious
                                </span></h2>
                                <div className="separate"></div>
                                <div className="text">Enjoy our delicious juices with added preservatives for extended freshness and great taste in every sip! Stay refreshed, stay energized.
                                </div>
                            </div>
                            {/* <div  className="theme-btn btn-style-one clearfix" style={{borderRadius:'1px', backgroundColor:'#45B653'}}><span className="icon"></span>Buy Now</div> */}
                            <Link href="menu" className="theme-btn btn-style-two clearfix" ><span className="icon"></span>100% UV Treated RO Water</Link>
                        </div>
                    </div>
                    
                </div>



                
            </div>
            {/* <Fluid/> */}
        </section>
        {/* End Juice Section */}
        </>
    )
}
