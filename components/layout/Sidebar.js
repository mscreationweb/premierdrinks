import Link from "next/link"

export default function Sidebar({ isSidebar, handleSidebar }) {
    return (
        <>
    <div className={`xs-sidebar-group info-group info-sidebar ${isSidebar ? "isActive" : ""}`}>
		<div className="xs-overlay xs-bg-black" onClick={handleSidebar}></div>
		<div className="xs-sidebar-widget">
			<div className="sidebar-widget-container">
				<div className="widget-heading">
					<Link href="#" className="close-side-widget"  onClick={handleSidebar}>
						X
					</Link>
				</div>
				<div className="sidebar-textwidget">
					
					
					<div className="sidebar-info-contents">
						<div className="content-inner">
							<div className="logo">
								<Link href="/"><img src="assets/images/logo.png" alt="" /></Link>
							</div>
							<div className="content-box">
								<h2>About Us</h2>
								<p className="text">The argument in favor of using filler text goes something like this: If you use real content in the Consulting Process, anytime you reach a review point you’ll end up reviewing and negotiating the content itself and not the design.</p>
								<Link href="contact" className="theme-btn btn-style-one clearfix"><span className="icon"></span>Consultation</Link>
							</div>
							<div className="contact-info">
								<h2>Contact Info</h2>
								<ul className="list-style-one">
									<li><span className="icon fa fa-location-arrow"></span>Chicago 12, Melborne City, USA</li>
									<li><span className="icon fa fa-phone"></span>(111) 111-111-1111</li>
									<li><span className="icon fa fa-envelope"></span>foodily@gmail.com</li>
									<li><span className="icon fa fa-clock-o"></span>Week Days: 09.00 to 18.00 Sunday: Closed</li>
								</ul>
							</div>
							<ul className="social-box">
								<li className="facebook"><Link href="#" className="fa fa-facebook-f"></Link></li>
								<li className="twitter"><Link href="#" className="fa fa-twitter"></Link></li>
								<li className="linkedin"><Link href="#" className="fa fa-linkedin"></Link></li>
								<li className="instagram"><Link href="#" className="fa fa-instagram"></Link></li>
								<li className="youtube"><Link href="#" className="fa fa-youtube"></Link></li>
							</ul>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>


        </>
    )
}
