import FlatRateServicesSection from "../components/FlatRateServices";
import HeroSection from "../components/Hero";
import PricingIntroSection from "../components/PricingIntro";
import PricingPlansSection from "../components/PricingPlans";
import VideoOverlaySection from "../components/WebsiteVideo";

const Pricing = () => {

    return (
        <>
        <HeroSection
            title="No One-Size-Fits-All — Just What You Need"
            primaryText="Contact Us"
            primaryLink="/contact"
            secondaryText="View Pricing"
            secondaryLink="/pricing"
            backgroundImage="/img/heroImg.png"
        />
        <PricingIntroSection />
        <PricingPlansSection />
        <FlatRateServicesSection />
        <VideoOverlaySection />
        </>
    )
}

export default Pricing;