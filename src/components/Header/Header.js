import MobileMenu from "./MobileMenu";
import Logo from "../../assets/logo.svg"
import "../../styles/Header.css";

const Header = () => {
    return (
        <header className="lp-header">
            <img 
                className="lp-header-img"
                src={Logo}
                alt="loopstudios-logo"
            />
            <MobileMenu />
        </header>
    );
}

export default Header;