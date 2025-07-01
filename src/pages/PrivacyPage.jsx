import PrivacyPolicy from "../components/PrivacyPolicy"
import HeroSection from "../components/Hero";


const PrivacyPage = () => {

    return (
        <>
        <HeroSection
        title="Your Privacy Matters to Us"
        primaryText="Back to Home"
        primaryLink="/"
        secondaryText="Contact Support"
        secondaryLink="/contact"
        backgroundImage="/img/heroImg.png"
        />
        <PrivacyPolicy />
        </>
    )
}

export default PrivacyPage;