import Header from "./Header/Header";
import Hero from "./Header/Hero";
import IntroSection from "./Content/IntroSection";
import CreationsSection from "./Content/CreationsSections";
import Footer from "./Footer/Footer";

import "../styles/LandingPage.css";

const LandingPage = () => {

    

    return (
        <main className="landing-page">
            <Header />
            <Hero />
            <IntroSection />
            <CreationsSection />
            <Footer />
        </main>
    );
}

export default LandingPage;