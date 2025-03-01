import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header5({ scroll, handlePopup, handleMobileMenu, handleSidebar }) {
    return (
        <>

            {/* Main Header*/}
            <header className={`main-header header-style-four ${scroll ? "fixed-header" : ""}`}>
                
                {/* Header Upper */}
                <div className="header-upper">
                    <div className="auto-container clearfix">
                        
                        <div className="pull-left logo-box">
                            <div className="logo"><Link href="/"><img src="assets/images/logo-2.png" alt="" title=""/></Link></div>
                        </div>
                        
                        <div className="nav-outer clearfix">
                            {/*Mobile Navigation Toggler*/}
                            <div className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon flaticon-menu"></span></div>
                            {/* Main Menu */}
                            <nav className="main-menu navbar-expand-md">
                                <div className="navbar-header">
                                    {/* Toggle Button */}    	
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>
                                
                                <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                                    <ul className="navigation clearfix">
                                        <Menu/>
                                    </ul>
                                </div>
                            </nav>
                            
                            {/* Main Menu End*/}
                            <div className="outer-box clearfix">
                                
                                {/* <div className="search-box-btn search-box-outer"><span className="icon fa fa-search" onClick={handlePopup}></span></div> */}
                                <div className="nav-btn navSidebar-button"><span className="icon flaticon-menu-2" onClick={handleSidebar}></span></div>
                                    
                            </div>
                        </div>
                        
                    </div>
                </div>
                {/*End Header Upper*/}
                
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

                                {/* <div className="search-box-btn search-box-outer"><span className="icon fa fa-search" onClick={handlePopup}></span></div> */}
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
