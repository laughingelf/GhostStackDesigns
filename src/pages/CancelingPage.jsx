import CancelPage from "../components/CancelPage";
import HeroSection from "../components/Hero";



const CancelingPage = () => {

    return (
        <>
        <HeroSection
        title="Changed Your Mind?"
        primaryText="Try Again"
        primaryLink="/pricing"
        secondaryText="Need Help?"
        secondaryLink="/contact"
        backgroundImage="/img/heroImg.png"
        />

        <CancelPage />        

        </>
    )
}

export default CancelingPage;