import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, handlePopup, handleMobileMenu, handleSidebar }) {
    return (
        <>
            


    {/* Main Header*/}
	<header className={`main-header header-style-one ${scroll ? "fixed-header" : ""}`}>
    	
		{/* Header Upper */}
        <div className="header-upper" style={{backgroundColor:"white",marginTop:'-20px'}}>
        	<div className="auto-container clearfix">
            	
				<div className="pull-left logo-box">
					<div className="logo"><Link href="/"><img src="./assets/images/allimg/logo/logo.png" alt="logo" title="premierdrinks"  style={{height:'70px'}}/></Link></div>
				</div>
				
				<div className="nav-outer clearfix">
					<div className="mobile-nav-toggler"><span className="icon flaticon-menu" onClick={handleMobileMenu} ></span></div>
					{/* Main Menu */}
					<nav className="main-menu navbar-expand-md">
					<Menu />

					</nav>
					
					{/* Main Menu End*/}
					<div className="outer-box clearfix">
						
						{/* Search Btn */}
						{/* <div className="search-box-btn search-box-outer"><span className="icon fa fa-search" onClick={handlePopup}></span></div> */}
						
						{/* Nav Btn */}
						{/* <div className="nav-btn navSidebar-button"><span className="icon flaticon-menu-2" onClick={handleSidebar}></span></div> */}
							
					</div>
				</div>
				
            </div>
        </div>

		<div className="sticky-header">
            <div className="auto-container clearfix">
                <div className="logo pull-left">
                    <Link href="/" title=""><img src="./assets/images/allimg/logo/logo.png" alt="logo" title="premierdrinks"  style={{height:'70px'}}/></Link>
                </div>
                <div className="pull-right">
                    <nav className="main-menu">
						<Menu />
                    </nav>
					

					<div className="outer-box clearfix">
					{/* <div className="mobile-nav-toggler"><span className="icon flaticon-menu" onClick={handleMobileMenu} style={{color:'black'}}></span></div> */}
						{/* <div className="search-box-btn search-box-outer"><span className="icon fa fa-search" onClick={handlePopup}></span></div> */}
						<div className="nav-btn navSidebar-button"><span className="icon flaticon-menu-2" onClick={handleMobileMenu} style={{color:'black'}}></span></div>
						
					</div>
					
                </div>
            </div>
        </div>
        {/*End Header Upper*/}
		<MobileMenu handleMobileMenu={handleMobileMenu} />
        
		
	
    </header>
    {/* End Main Header */}
     
        </>
    )
}