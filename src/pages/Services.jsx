import HeroSection from "../components/Hero";
import ServicesSection from "../components/ServiceSection";
import VideoOverlaySection from '../components/WebsiteVideo'

const Services = () => {

    return (
        <>
        <HeroSection
            title="What We Offer"
            primaryText="Contact Us"
            primaryLink="/contact"
            secondaryText="View Pricing"
            secondaryLink="/pricing"
            backgroundImage="/img/heroImg.png"
        />
        <ServicesSection />
        <VideoOverlaySection />
        </>
    )
}

export default Services;