import AboutUsSection from "../components/AboutUs";
import HeroSection from "../components/Hero";
import OurProcessSection from "../components/OurProcess";
import VideoOverlaySection from "../components/WebsiteVideo";


const About = () => {

    return (
        <>
        <HeroSection
            title="The Story Behind GhostStack"
            primaryText="Contact Us"
            primaryLink="/contact"
            secondaryText="View Pricing"
            secondaryLink="/pricing"
            backgroundImage="/img/heroImg.png"
        />
        <AboutUsSection />
        <OurProcessSection />
        <VideoOverlaySection />

        </>
    )
}

export default About;