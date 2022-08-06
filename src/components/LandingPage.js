import Header from "./Header/Header";
import Hero from "./Header/Hero";
import IntroSection from "./Content/IntroSection";
import "../styles/LandingPage.css";

const LandingPage = () => {
    return (
        <main className="landing-page">
            <Header />
            <Hero />
            <IntroSection />
        </main>
    );
}

export default LandingPage;