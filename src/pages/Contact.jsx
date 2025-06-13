import ContactForm from "../components/ContactForm";
import HeroSection from "../components/Hero";

const Contact = () => {

    return (
        <>
        <HeroSection
            title="Questions? Ideas? Let’s Talk."
            primaryText="Call Us Today"
            primaryLink="/contact"
            secondaryText="View Pricing"
            secondaryLink="/pricing"
            backgroundImage="/img/heroImg.png"
        />
        <ContactForm />
        </>
    )
}

export default Contact;