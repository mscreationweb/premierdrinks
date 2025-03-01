import Link from "next/link"
export default function Footer3() {
    return (
        <>
        {/* Footer Style Three */}
            <footer className="footer-style-three">
                <div className="auto-container">
                    {/* Widgets Section */}
                    <div className="widgets-section">
                        <div className="row clearfix">
                            
                            {/*Footer Column*/}
                            <div className="footer-column col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget social-widget">
                                    <h6>Follow Us Now</h6>
                                    <ul className="social-list">
                                        <li><Link href="https://www.facebook.com/people/Premier-Drinks/61571314627887/?mibextid=wwXIfr&rdid=oNGiWvlS4HC3M9ri&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15n6zahrf2%2F%3Fmibextid%3DwwXIfr"><span className="icon fa fa-facebook"></span></Link></li>
                                        
                                        <li><Link href="https://www.instagram.com/premierdrinks.in/?igsh=MWNueWdwNmZkOWFxZw%3D%3D#"><span className="icon fa fa-instagram"></span></Link></li>
                                        <li>
  <Link href="https://wa.me/919845039771" target="_blank">
    <span className="icon fa fa-whatsapp"></span>
  </Link>
</li>
<li>
  <Link href="mailto:emailinfo@premierdrinks">
    <span className="icon fa fa-envelope"></span>
  </Link>
</li>

                                    </ul>
                                </div>
                            </div>
                            
                            {/*Footer Column*/}
                            <div className="footer-column col-lg-4 col-md-12 col-sm-12">
                                <div className="footer-widget logo-widget">
                                    <div className="logo">
                                        <Link href="/"><img src="./assets/images/allimg/logo/whitelogo.png" alt=""  style={{height:'80px'}}/></Link>
                                    </div>
                                    <div className="copyright">&copy; 2025 <Link href="/">Premier Food & Beverages
                                    </Link> </div>
                                </div>
                            </div>
                            
                            {/*Footer Column*/}
                            <div className="footer-column col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget visit-widget">
                                    <h6>Visit</h6>
                                    <div className="text">Premier Food & Beverages

 <br/> Mangalore, D.K, Karnataka</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </footer>



        </>
    )
}
