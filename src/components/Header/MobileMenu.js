import { useState } from "react";
import HamburgerMenuIcon from "../../assets/icon-hamburger.svg";
import CloseMenuIcon from "../../assets/icon-close.svg";
import "../../styles/MobileMenu.css";

const MobileMenu = () => {

    const [toggleMobileMenu, setToggleMobileMenu] = useState(true);

    const onToggleMenuBtn = () => {
        setToggleMobileMenu(!toggleMobileMenu);
        return;
    }
    const onLinkClick = (e) => {
        e.preventDefault();
        return;
    }

    return (
        <nav className="lp-mobile-navbar">
            <button 
                className={`lp-mobile-navbar-btn ${toggleMobileMenu ? null : 'lp-mobile-btn-active'}`}
                onClick={() => onToggleMenuBtn()}
            >
                {
                    toggleMobileMenu ? 
                    <img 
                        className="lp-mobile-navbar-btn-img"
                        src={HamburgerMenuIcon}
                        alt="hamburger-icon"
                    />
                        :
                    <img 
                        className="lp-mobile-navbar-btn-img"
                        src={CloseMenuIcon}
                        alt="close-icon"
                    />

                }
            </button>
            {
                toggleMobileMenu ? 
                null
                    :
                <div className="lp-mobile-nav-menu">
                    <list className="lp-mobile-nav-menu-list">
                        <a
                            href={{}}
                            className="lp-mobile-nav-menu-link"
                            onClick={(e) => onLinkClick(e)}
                        >
                            ABOUT
                        </a>
                        <a
                            href={{}}
                            className="lp-mobile-nav-menu-link"
                            onClick={(e) => onLinkClick(e)}
                        >
                            CAREERS
                        </a>
                        <a
                            href={{}}
                            className="lp-mobile-nav-menu-link"
                            onClick={(e) => onLinkClick(e)}
                        >
                            EVENTS
                        </a>
                        <a
                            href={{}}
                            className="lp-mobile-nav-menu-link"
                            onClick={(e) => onLinkClick(e)}
                        >
                            PRODUCTS    
                        </a>
                        <a
                            href={{}}
                            className="lp-mobile-nav-menu-link"
                            onClick={(e) => onLinkClick(e)}
                        >
                            SUPPORT
                        </a>
                    </list>
                </div>
            }
        </nav>
    );
}

export default MobileMenu;