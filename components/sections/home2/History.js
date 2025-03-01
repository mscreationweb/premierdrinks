
export default function History() {
    return (
        <>

        {/* History Section */}
        <section className="history-section" id="about">
            <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/resource/history-icon.png)' }} ></div>
            <div className="auto-container">
                <div className="row clearfix">
                
                    {/* Image Column */}
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="image">
                                <img src="assets/images/resource/history-1.jpg" alt="" />
                            </div>
                            <div className="image-two">
                                <img src="assets/images/resource/history-2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    
                    {/* Content Column */}
                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            {/* Sec Title */}
                            <div className="sec-title">
                                <div className="title">Our Vision and History</div>
                                <h2>On the street since <br/> 1990 <span className="theme_color">Owner Jay Martin</span></h2>
                                <div className="text">Us percipit urbanitas referrentur ea. Mei at numquam molestiae intellegam. Ansed dictas accumsan. Nam sint atqui voluptatibus an, pro ne malis semper perpetua. Nam sint atqui voluptatibus an, pro ne malis semper perpetua.</div>
                            </div>
                            <ul className="list-style-two">
                                <li>Cras at mi luctus, tincidunt urna eu, posuere enim</li>
                                <li>Vivamus elementum lorem vitae quam tincidunt</li>
                                <li>Suspendisse accumsan eros eu erat condimentum</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        {/* End History Section */}
        </>
    )
}
