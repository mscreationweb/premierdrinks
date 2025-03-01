'use client'
import Link from "next/link"
export default function Location() {
    return (
        <>
    

            {/* Location Section */}
            <section className="location-section" id="location">
                {/* Title Box */}
                <div className="title-box" style={{ backgroundImage: 'url(assets/images/background/3.jpg)' }} >
                    <div className="auto-container">
                        {/* Sec Title */}
                        <div className="sec-title light centered">
                            <div className="title">Find Us</div>
                            <h2>Location and Time</h2>
                            <div className="separate"></div>
                        </div>
                    </div>
                </div>
                {/* End Title Box */}
                
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="row clearfix">
                        
                            {/* Location Block */}
                            <div className="location-block col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="content">
                                        <div className="post-date">20 - 27 October</div>
                                        <h3><Link href="slushy">Brooklyn</Link></h3>
                                        <ul className="post-info">
                                            <li><span className="icon fa fa-map-marker"></span>20 Cooper Square, NY 10003</li>
                                            <li><span className="icon fa fa-clock-o"></span>09:00 - 18:00.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Location Block */}
                            <div className="location-block col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="content">
                                        <div className="post-date">20 - 27 October</div>
                                        <h3><Link href="slushy">The Bronx</Link></h3>
                                        <ul className="post-info">
                                            <li><span className="icon fa fa-map-marker"></span>20 Cooper Square, NY 10003</li>
                                            <li><span className="icon fa fa-clock-o"></span>09:00 - 18:00.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Location Block */}
                            <div className="location-block col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="content">
                                        <div className="post-date">20 - 27 October</div>
                                        <h3><Link href="slushy">Manhattan</Link></h3>
                                        <ul className="post-info">
                                            <li><span className="icon fa fa-map-marker"></span>20 Cooper Square, NY 10003</li>
                                            <li><span className="icon fa fa-clock-o"></span>09:00 - 18:00.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Location Block */}
                            <div className="location-block col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="content">
                                        <div className="post-date">20 - 27 October</div>
                                        <h3><Link href="slushy">Staten Island</Link></h3>
                                        <ul className="post-info">
                                            <li><span className="icon fa fa-map-marker"></span>20 Cooper Square, NY 10003</li>
                                            <li><span className="icon fa fa-clock-o"></span>09:00 - 18:00.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Location Block */}
                            <div className="location-block col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="content">
                                        <div className="post-date">20 - 27 October</div>
                                        <h3><Link href="slushy">Brooklyn</Link></h3>
                                        <ul className="post-info">
                                            <li><span className="icon fa fa-map-marker"></span>20 Cooper Square, NY 10003</li>
                                            <li><span className="icon fa fa-clock-o"></span>09:00 - 18:00.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Location Block */}
                            <div className="location-block col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="content">
                                        <div className="post-date">20 - 27 October</div>
                                        <h3><Link href="slushy">Queens</Link></h3>
                                        <ul className="post-info">
                                            <li><span className="icon fa fa-map-marker"></span>20 Cooper Square, NY 10003</li>
                                            <li><span className="icon fa fa-clock-o"></span>09:00 - 18:00.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            {/* End Location Section */}
        </>
    )
}
