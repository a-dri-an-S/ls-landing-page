import CreationsMobileGrid from "./CreationsMobileGrid";
import "../../styles/CreationsSections.css";

const CreationsSection = () => {
    return (
        <section className="lp-creations-section">
            <div className="lp-creations-mobile-section">
                <h2 className="lp-creations-title">
                    OUR CREATIONS
                </h2>
                <div>
                    <CreationsMobileGrid />
                </div>
                <button className="lp-creations-btn">
                    SEE ALL
                </button>
            </div>
        </section>
    );
}

export default CreationsSection;