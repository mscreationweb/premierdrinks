import Link from "next/link"
import Menu2 from "../Menu2"
import Menu3 from "../Menu3"
import MobileMenu from "../MobileMenu"

export default function Header2({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>

        
    {/* Main Header / Header Style Two */}
	<header className={`main-header header-style-two ${scroll ? "fixed-header" : ""}`}>
    	
		{/* Header Upper */}
        <div className="header-upper">
			<ul className="social-list">
				<li><Link href="#"><span className="icon fa fa-facebook"></span></Link></li>
				<li><Link href="#"><span className="icon fa fa-twitter"></span></Link></li>
				<li><Link href="#"><span className="icon fa fa-instagram"></span></Link></li>
			</ul>
        	<div className="auto-container">
            	<div className="clearfix">
                	
                	<div className="pull-left logo-box">
                    	<div className="logo"><Link href="/"><img src="assets/images/logo.png" alt="" title=""/></Link></div>
                    </div>
					
                   	<div className="nav-outer clearfix">
						{/* Mobile Navigation Toggler */}
                        <div className="mobile-nav-toggler"><span className="icon flaticon-menu" onClick={handleMobileMenu}></span></div>
						{/* Main Menu */}
						<nav className="main-menu navbar-expand-md">
							<div className="navbar-header">
								<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
							</div>

							<div className="navbar-collapse scroll-nav show collapse clearfix" id="navbarSupportedContent">
								<Menu2 />
								<Menu3 />
								
							</div>
							
						</nav>
						
					</div>
                   
                </div>
            </div>
        </div>
        {/* End Header Upper */}
		<MobileMenu handleMobileMenu={handleMobileMenu} />
        

	
    </header>
    {/* End Main Header */}

        </>
    )
}
