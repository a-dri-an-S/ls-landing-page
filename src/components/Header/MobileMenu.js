import HamburgerMenu from "../../assets/icon-hamburger.svg";
import "../../styles/MobileMenu.css";

const MobileMenu = () => {
    return (
        <nav className="lp-mobile-navbar">
            <button className="lp-mobile-navbar-btn">
                <img 
                    className="lp-mobile-navbar-btn-img"
                    src={HamburgerMenu}
                    alt="hamburger-icon"
                />
            </button>
        </nav>
    );
}

export default MobileMenu;