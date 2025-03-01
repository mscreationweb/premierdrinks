'use client'
export default function Newsletter() {
    return (
        <>

        {/* Newsletter Section */}
        <section className="newsletter-section">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="row clearfix">
                    
                        {/* Title Column */}
                        <div className="title-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="send-icon fa fa-send"></div>
                                <h4>Join Our Newsletter</h4>
                                <div className="title">We'll keep you posted and updates!</div>
                            </div>
                        </div>
                        
                        {/* Newsletter Column */}
                        <div className="newsletter-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                {/* Newsletter Form Two */}
                                <div className="newsletter-form-two">
                                    <form method="post">
                                        <div className="form-group">
                                            <input type="email" name="email" placeholder="Enter Your E-mail ..."/>
                                            <button type="submit" className="theme-btn btn-style-one clearfix"><span className="icon"></span>Buy Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        {/* End Newsletter Section */}

        </>
    )
}
