'use client'
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({ status: false, key: "", subMenuKey: "" });
    } else {
      setIsActive({ status: true, key, subMenuKey });
    }
  };

  return (
    <>  
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu}></div>
        <div className="close-btn" onClick={handleMobileMenu}>
          <span className="icon flaticon-multiply"></span>
        </div>

        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/" onClick={handleMobileMenu}>
              <img 
                src="./assets/images/allimg/logo/logo.png" 
                alt="logo" 
                title="premierdrinks"  
                style={{ height: '70px' }} 
              />
            </Link>
          </div>
          <div className="menu-outer">
            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
              <ul className="navigation">
                <li>
                  <Link href="/" onClick={handleMobileMenu}>Home</Link>
                </li>
                <li>
                  <Link href="/contact" onClick={handleMobileMenu}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
