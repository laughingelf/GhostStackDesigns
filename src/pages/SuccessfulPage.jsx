import HeroSection from "../components/Hero";
import SuccessPage from "../components/Success";


const SuccessfulPage = () => {

    return (
        <>
        <HeroSection
        title="You're All Set!"
        primaryText="Start Your Project"
        primaryLink="/start-express-project"
        secondaryText="Need to Send Files?"
        secondaryLink="/contact"
        backgroundImage="/img/heroImg.png"
        />

        <SuccessPage />        

        </>
    )
}

export default SuccessfulPage;