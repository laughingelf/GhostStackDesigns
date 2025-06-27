import FAQPage from '../components/Faqs';
import HeroSection from '../components/Hero'

const Faq = () => {

    return (
        <>
        <HeroSection
        title="Got Questions? We’ve Got Answers."
        primaryText="Call Us Today"
        primaryLink="tel:9723380991"
        secondaryText="View Pricing"
        secondaryLink="/pricing"
        backgroundImage="/img/heroImg.png"
        />

        <FAQPage />
        </>
    )
}

export default Faq;