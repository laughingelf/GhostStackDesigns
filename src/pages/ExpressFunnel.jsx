import GhostStackExpressAdPage from "../components/ExpressAdPage";
import HeroSection from "../components/Hero";

const ExpressFunnel = () => {

    return (

        <>
        <HeroSection
        title="Launch Fast. Look Pro. No Headaches."
        primaryText="Start My Site Now"
        primaryLink="/pricing"
        secondaryText="See What’s Included"
        secondaryLink="/services"
        backgroundImage="/img/heroImg.png"
        />

        <GhostStackExpressAdPage />
        </>
    )
}

export default ExpressFunnel;