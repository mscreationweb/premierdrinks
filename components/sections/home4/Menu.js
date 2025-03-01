'use client'
import Link from "next/link"
export default function Menu() {
    return (
        <>

            {/* Menu Section Two */}
            <section className="menu-section-two">
                <div className="auto-container">
                    <div className="row clearfix">
                        
                        {/* Menu Block Three */}
                        <div className="menu-block-three col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="content">
                                    <div className="menu-title">morning</div>
                                    <h4>Breakfast</h4>
                                    {/* Menu Item */}
                                    <div className="menu-item">
                                        <h6><Link href="#">young keeps & Asparagus</Link></h6>
                                        <div className="sub-title">Crispy black garlic</div>
                                        <div className="price-box">
                                            <div className="price">$15</div>
                                        </div>
                                    </div>
                                    {/* Menu Item */}
                                    <div className="menu-item">
                                        <h6><Link href="#">young keeps & Asparagus</Link></h6>
                                        <div className="sub-title">Crispy black garlic</div>
                                        <div className="price-box">
                                            <div className="price">$15</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="image">
                                    <Link href="#"><img src="assets/images/resource/menu-35.jpg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        
                        {/* Menu Block Three */}
                        <div className="menu-block-three col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="content">
                                    <div className="menu-title">noon</div>
                                    <h4>lunch</h4>
                                    {/* Menu Item */}
                                    <div className="menu-item">
                                        <h6><Link href="#">young keeps & Asparagus</Link></h6>
                                        <div className="sub-title">Crispy black garlic</div>
                                        <div className="price-box">
                                            <div className="price">$15</div>
                                        </div>
                                    </div>
                                    {/* Menu Item */}
                                    <div className="menu-item">
                                        <h6><Link href="#">young keeps & Asparagus</Link></h6>
                                        <div className="sub-title">Crispy black garlic</div>
                                        <div className="price-box">
                                            <div className="price">$15</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="image">
                                    <Link href="#"><img src="assets/images/resource/menu-36.jpg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        
                        {/* Menu Block Three */}
                        <div className="menu-block-three col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="content">
                                    <div className="menu-title">Night</div>
                                    <h4>Dinner</h4>
                                    {/* Menu Item */}
                                    <div className="menu-item">
                                        <h6><Link href="#">young keeps & Asparagus</Link></h6>
                                        <div className="sub-title">Crispy black garlic</div>
                                        <div className="price-box">
                                            <div className="price">$15</div>
                                        </div>
                                    </div>
                                    {/* Menu Item */}
                                    <div className="menu-item">
                                        <h6><Link href="#">young keeps & Asparagus</Link></h6>
                                        <div className="sub-title">Crispy black garlic</div>
                                        <div className="price-box">
                                            <div className="price">$15</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="image">
                                    <Link href="#"><img src="assets/images/resource/menu-37.jpg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* End Menu Section Two */}
           
        </>
    )
}
