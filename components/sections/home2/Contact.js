'use client'
import Link from "next/link"
export default function Features() {
    return (
        <>
        {/* Contact Section */}
            <section className="contact-section" id="contact">
                <div className="auto-container">
                    <div className="row clearfix">
                    
                        {/* Title Column */}
                        <div className="title-column col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-column">
                                {/* Sec Title */}
                                <div className="sec-title">
                                    <div className="title">Hire for outdoor party.</div>
                                    <h2>Contact</h2>
                                    <div className="separate"></div>
                                    <div className="text">Us percipit urbanitas referrentur ea. Mei at numquam molestiae intellegam. Ansed dictas accumsan.</div>
                                </div>
                                <ul className="info-list">
                                    <li>
                                        <span className="icon flaticon-telephone"></span>
                                        <strong>Phone</strong>
                                        <Link href="tel:+123-45678-900">+ 123 45678 900</Link>
                                    </li>
                                    <li>
                                        <span className="icon flaticon-message"></span>
                                        <strong>Email</strong>
                                        <Link href="mailto:info@gmail.com">info@gmail.com</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        {/* Form Column */}
                        <div className="form-column col-lg-7 col-md-12 col-sm-12">
                            <div className="inner-column">
                                
                                {/* Contact Form */}
                                <div className="contact-form">
                                    <form method="post" id="contact-form">
                                        <div className="row clearfix">
                                            
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <textarea className="" name="message" placeholder="Your Comment *"></textarea>
                                            </div>
                                            
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="text" name="username" placeholder="Your Name"/>
                                            </div>
                                            
                                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                <input type="email" name="email" placeholder="Your Email"/>
                                            </div>
                                            
                                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                <button className="theme-btn btn-style-four clearfix"><span className="icon flaticon-arrow-pointing-to-right"></span>Send</button>
                                            </div>
                                            
                                        </div>
                                    </form>
                                        
                                </div>
                                {/* End Contact Form */}
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* End Contact Section */}
        </>
    )
}
