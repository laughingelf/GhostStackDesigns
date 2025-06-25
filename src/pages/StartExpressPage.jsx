import HeroSection from "../components/Hero";
import StartExpressProjectPage from '../components/StartExpressProjectPage'



const StartExpressProject = () => {

    return (
        <>
        <HeroSection
            title="You're Almost There – Let's Get Your Website Started"
            subTitle="We just need a few more details to kick things off. Complete this short form and we’ll take it from here."
            showSubLink={false}
            primaryText="Contact Us"
            primaryLink="/contact"
            secondaryText="View Pricing"
            secondaryLink="/pricing"
            backgroundImage="/img/heroImg.png"
        />
        <StartExpressProjectPage />        

        </>
    )
}

export default StartExpressProject;