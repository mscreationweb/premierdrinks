'use client'
import Link from "next/link"
export default function Fluid() {
    return (
        <>

            <section className="fluid-section-one">
                <div className="outer-container clearfix">
                    
                    <div className="content-column">
                        {/* <div className="icon-box" style={{ backgroundImage: 'url(./assets/images/allimg/homepage/Habout1.webp)' }} ></div> */}
                        <div className="inner-column">
                            
                            <div className="sec-title">
                            <div className="title">Drink for Health</div>
                                <h2>100% Natural</h2>
                                <div className="separate"></div>
                                <div className="text">Enjoy the goodness of real fruits in every sip! No preservatives, just pure refreshment to keep you energized all day.                                </div>
                            </div>
                            
                            <div className="button-box">
                                <div className="theme-btn btn-style-two clearfix"><span className="icon"></span>100% UV Treated RO Water</div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="image-column" style={{ backgroundImage: 'url(./assets/images/allimg/homepage/Habout1.webp)' }} >
                        <figure className="image-box"><img src="./assets/images/allimg/homepage/Habout1.webp" alt=""/></figure>
                    </div>
                    
                </div>
            </section>


            
            <section className="fluid-section-one" style={{marginTop:'10px'}}>
                <div className="outer-container clearfix">
                    
                    <div className="content-column">
                        {/* <div className="icon-box" style={{ backgroundImage: 'url(./assets/images/allimg/homepage/Habout1.webp)' }} ></div> */}
                        <div className="inner-column">
                            
                            <div className="sec-title">
                            <div className="title">Drink for Health</div>
                                <h2>Naturally  Delicious</h2>
                                <div className="separate"></div>
                                <div className="text">Enjoy our delicious juices with added preservatives for extended freshness and great taste in every sip! Stay refreshed, stay energized.</div>
                            </div>
                            
                            <div className="button-box">
                                <div className="theme-btn btn-style-two clearfix"><span className="icon"></span>100% UV Treated RO Water</div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="image-column" style={{ backgroundImage: 'url(./assets/images/allimg/homepage/Habout2.webp)' }} >
                        <figure className="image-box"><img src="./assets/images/allimg/homepage/Habout2.webp" alt=""/></figure>
                    </div>
                    
                </div>
            </section>
        </>
    )
}
