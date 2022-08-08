import Facebook from "../../assets/icon-facebook.svg";
import Twitter from "../../assets/icon-twitter.svg";
import Pinterest from "../../assets/icon-pinterest.svg";
import Instagram from "../../assets/icon-instagram.svg";
import "../../styles/FooterSocials.css";

const images = [
    {
        img: Facebook,
        name: "facebook"
    },
    {
        img: Twitter,
        name: "twitter"
    },
    {
        img: Pinterest,
        name: "pinterest"
    },
    {
        img: Instagram,
        name: "instagram"
    }
];

const FooterSocials = () => {

    const onLinkClick = (e) => {
        e.preventDefault();
        return;
    }

    return (  
        <div className="lp-footer-socials">
            {
                images.map((social, idx) => {
                    return (
                        <a
                            href={{}}
                            key={idx}
                            className="lp-footer-socials-link"
                            onClick={(e) => onLinkClick(e)}
                        >
                            <img 
                                className="lp-footer-socials-icon"
                                src={social.img}
                                alt={`${social.name}-icon`}
                            />
                        </a>
                    )
                })
            }
        </div>
    );
}

export default FooterSocials;