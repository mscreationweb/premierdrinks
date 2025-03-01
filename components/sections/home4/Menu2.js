'use client'
import Link from "next/link"
export default function Menu2() {
    return (
        <>

            {/* Menu Page Section */}
            <section className="menu-page-section">
                <div className="auto-container">
                    <div className="row clearfix">
                    
                        {/* Menu Block Two */}
                        <div className="menu-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="side-icon">
                                    <img src="assets/images/icons/menu-icon-1.png" alt="" />
                                </div>
                                <div className="icon">
                                    <img src="assets/images/icons/menu-1.png" alt="" />
                                </div>
                                <h6><Link href="#">Awesome taste</Link></h6>
                                <div className="text">Us percipit urbanitas referrentur ea. Mei at numquam molestiae intellegam.</div>
                            </div>
                        </div>
                        
                        {/* Menu Block Two */}
                        <div className="menu-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="side-icon">
                                    <img src="assets/images/icons/menu-icon-2.png" alt="" />
                                </div>
                                <div className="icon">
                                    <img src="assets/images/icons/menu-2.png" alt="" />
                                </div>
                                <h6><Link href="#">Organic fruits</Link></h6>
                                <div className="text">Us percipit urbanitas referrentur ea. Mei at numquam molestiae intellegam.</div>
                            </div>
                        </div>
                        
                        {/* Menu Block Two */}
                        <div className="menu-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="side-icon">
                                    <img src="assets/images/icons/menu-icon-3.png" alt="" />
                                </div>
                                <div className="icon">
                                    <img src="assets/images/icons/menu-3.png" alt="" />
                                </div>
                                <h6><Link href="#">Healthy Blends</Link></h6>
                                <div className="text">Us percipit urbanitas referrentur ea. Mei at numquam molestiae intellegam.</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* End Restaurant Section */}
        </>
    )
}
