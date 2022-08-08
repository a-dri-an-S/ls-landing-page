import "../../styles/FooterMenu.css";

const FooterMenu = () => {

    const onLinkClick = (e) => {
        e.preventDefault();
        return;
    }

    return (
        <div className="lp-footer-menu">
            <a 
                href={{}}
                className="lp-footer-menu-link"
                onClick={(e) => onLinkClick(e)}
            >
                About
            </a>
            <a 
                href={{}}
                className="lp-footer-menu-link"
                onClick={(e) => onLinkClick(e)}
            >
                Careers
            </a>
            <a 
                href={{}}
                className="lp-footer-menu-link"
                onClick={(e) => onLinkClick(e)}
            >
                Events
            </a>
            <a 
                href={{}}
                className="lp-footer-menu-link"
                onClick={(e) => onLinkClick(e)}
            >
                Products
            </a>
            <a 
                href={{}}
                className="lp-footer-menu-link"
                onClick={(e) => onLinkClick(e)}
            >
                Support
            </a>
        </div>
    );
}

export default FooterMenu;