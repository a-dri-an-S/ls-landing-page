import Header from "./Header/Header";
import Hero from "./Header/Hero";
import "../styles/LandingPage.css";

const LandingPage = () => {
    return (
        <main className="landing-page">
            <Header />
            <Hero />
        </main>
    );
}

export default LandingPage;