import InteractiveVRImage from "../../assets/mobile/image-interactive.jpg";
import "../../styles/IntroSection.css";

const IntroSection = () => {
    return (
        <section className="lp-intro-section">
            <img 
                className="lp-intro-image"
                src={InteractiveVRImage}
                alt="interactive-vr"
            />
            <article className="lp-intro-info">
                <h2 className="lp-intro-title">
                    THE LEADER IN INTERACTIVE VR
                </h2>
                <p className="lp-intro-text">
                    Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed business through digital experiences that bind to their brand.
                </p>
            </article>
        </section>
    );
}

export default IntroSection;