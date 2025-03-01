'use client'
import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header3({ scroll, handlePopup, handleMobileMenu, handleSidebar  }) {
    return (
        <>



    {/* Main Header / Header Style Three */}
    <header className={`main-header header-style-three ${scroll ? "fixed-header" : ""}`}>
    	
            {/* Header Upper */}
            <div className="header-upper">
                <div className="auto-container clearfix">
                    
                    <div className="pull-left logo-box">
                        <div className="logo"><Link href="/"><img src="assets/images/logo-2.png" alt="" title=""/></Link></div>
                    </div>
                    
                    <div className="pull-right">
                        
                        {/* Search Box */}
                        <div className="search-box">
                            <form method="post">
                                <div className="form-group">
                                    {/* <input type="search" name="search-field" placeholder="Search"/> */}
                                    <button type="submit"><span className="icon flaticon-search"></span></button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            {/*End Header Upper*/}
            
            {/* Header Upper */}
            <div className="header-lower">
                <div className="auto-container clearfix">
                    <div className="nav-outer clearfix">
                        {/*Mobile Navigation Toggler*/}
                        <div className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon flaticon-menu"></span></div>
                        {/* Main Menu */}
                        <nav className="main-menu navbar-expand-md">
                        <Menu />
                        </nav>
                        
                        {/* Main Menu End*/}
                        <div className="outer-box clearfix">
                            {/* Social Box */}
                            <ul className="social-box">
                                <li><Link href="#" className="fa fa-facebook-f"></Link></li>
                                <li><Link href="#" className="fa fa-dribbble"></Link></li>
                                <li><Link href="#" className="fa fa-pinterest-p"></Link></li>
                                <li><Link href="#" className="fa fa-google"></Link></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
            {/* End Header Lower */}

            <div className="sticky-header">
                <div className="auto-container clearfix">
                    <div className="logo pull-left">
                        <Link href="/" title=""><img src="assets/images/logo-small.png" alt="" title="" /></Link>
                    </div>
                    <div className="pull-right">
                        <nav className="main-menu">
                            <Menu />
                        </nav>                       

                        <div className="outer-box clearfix">
                            <div className="search-box-btn search-box-outer"><span className="icon fa fa-search" onClick={handlePopup}></span></div>
						    <div className="nav-btn navSidebar-button"><span className="icon flaticon-menu-2" onClick={handleSidebar}></span></div>                            
                        </div>
                        
                    </div>
                </div>
            </div>

            <MobileMenu handleMobileMenu={handleMobileMenu} />
            
        
        </header>
        {/* End Main Header */}

        </>
    )
}
