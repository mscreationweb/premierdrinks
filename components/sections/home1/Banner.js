
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}

export default function Banner() {
    return (
        <>

        {/* Banner Section */}
        <section className="banner-section">
            <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/main-slider/pattern-1.png)' }} ></div>
            <Swiper {...swiperOptions} className="main-slider-carousel ">
                
                {/* Slide */}
                <SwiperSlide>
                <div className="slide">
                    <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/main-slider/icon-1.png)' }} ></div>
                    {/* <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/main-slider/icon-2.png)' }} ></div> */}
                    <div className="auto-container">
                        <div className="row clearfix">
                        
                            {/* Content Column */}
                            <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <h1><span className="first-letter">Refreshing </span><span className="second-letter">flavors</span></h1>
                                    <div className="text">Bursting with real fruit goodness, our juices are pure, natural, and refreshing—no preservatives, just fresh taste! Stay cool, stay healthy!
                                    </div>
                                    <div className="btns-box">
                                        <Link href="contact" className="theme-btn btn-style-one clearfix"><span className="icon"></span>Contact Now</Link>
                                    </div>
                                    {/* <div className="icons-box" style={{display:'flex'}}>
                                        <img src="./assets/images/allimg/homepage/Banner1.webp" alt="" />
                                        <img src="./assets/images/allimg/homepage/Banner1.webp" alt="" />
                                    </div> */}
                                </div>
                            </div>
                            
                            {/* Image Column */}
                            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/main-slider/icon-3.png)' }} ></div>
                                    <div className="image">
                                        <img src="./assets/images/allimg/homepage/Banner1.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                </SwiperSlide>

                {/* Slide */}
                <SwiperSlide>
                <div className="slide">
                    {/* <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/main-slider/icon-1.png)' }} ></div> */}
                    {/* <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/main-slider/icon-6.png)' }} ></div> */}
                    <div className="auto-container">
                        <div className="row clearfix">
                        
                            {/* Content Column */}
                            <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <h1><span className="first-letter">Authentic </span><span className="second-letter">Goli Soda  </span></h1>
                                    <div className="text">Refreshing, fizzy, and packed with nostalgia—enjoy the authentic taste of Goli Soda!</div>
                                    <div className="btns-box">
                                        <Link href="contact" className="theme-btn btn-style-one clearfix"><span className="icon"></span>Contact Now</Link>
                                    </div>
                                    {/* <div className="icons-box" style={{display:'flex'}}>
                                        <img src="./assets/images/allimg/homepage/Banner2.webp" alt="" />
                                        <img src="./assets/images/allimg/homepage/Banner2.webp" alt="" />
                                    </div> */}
                                </div>
                            </div>
                            
                            {/* Image Column */}
                            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/main-slider/icon-3.png)' }} ></div>
                                    <div className="image">
                                        <img src="./assets/images/allimg/homepage/Banner2.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                {/* Slide */}
                {/* <SwiperSlide>
                <div className="slide style-two">
                    <div className="icon-layer-one" style={{ backgroundImage: 'url(assets/images/main-slider/icon-1.png)' }} ></div>
                    <div className="icon-layer-two" style={{ backgroundImage: 'url(assets/images/main-slider/icon-7.png)' }} ></div>
                    <div className="auto-container">
                        <div className="row clearfix">
                        
                            <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <h1><span className="first-letter">Heathly</span><span className="second-letter">Smoothie</span></h1>
                                    <div className="text">Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>
                                    <div className="btns-box">
                                        <Link href="menu" className="theme-btn btn-style-one clearfix"><span className="icon"></span>Buy Now</Link>
                                    </div>
                                    <div className="icons-box">
                                        <img src="assets/images/main-slider/icons.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="icon-layer-three" style={{ backgroundImage: 'url(assets/images/main-slider/icon-3.png)' }} ></div>
                                    <div className="image">
                                        <img src="assets/images/main-slider/content-image-3.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                </SwiperSlide> */}
            </Swiper>
            
        </section>
        {/* End Banner Section */}
            
        </>
    )
}
