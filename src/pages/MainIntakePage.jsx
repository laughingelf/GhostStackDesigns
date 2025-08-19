import IntakeForm from "../components/WebsiteIntakeForm";
import HeroSection from "../components/Hero";


const MainIntakePage = () => {

    return (
        <>
        <HeroSection
        title="Made for Your Business, Not a Template"
        primaryText="Start Your Project"
        primaryLink="/contact"
        secondaryText="Call Us Now"
        secondaryLink="tel:9723380991"
        backgroundImage="/img/heroImg.png"
        />

        <IntakeForm />
        </>
    )
}

export default MainIntakePage;