import FooterMenu from "./FooterMenu";
import FooterSocials from "./FooterSocials";
import Logo from "../../assets/logo.svg";
import "../../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="lp-footer">
            <div className="lp-footer-section-1">
                <img 
                    className="lp-footer-logo"
                    src={Logo}
                    alt="loopstudios-logo"
                />
                <FooterMenu />
            </div>
            <div className="lp-footer-section-2">
                <FooterSocials />
                <p className="lp-footer-copyright">
                    © 2021 Loopstudios. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;