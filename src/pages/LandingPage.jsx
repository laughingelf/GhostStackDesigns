import FeatureOverview from "../components/Feature";
import FeaturedProjects from "../components/FeaturedProjects";
import GhostStackExpressPromo from "../components/GhoststackExpress";
import HeroMain from "../components/HeroMain";
import IntroSection from "../components/IntroSection";
import PricingCTASection from "../components/PricingCta";
import VideoOverlaySection from "../components/WebsiteVideo";


const LandingPage = () => {

    return (
        <>
        <HeroMain />
        <GhostStackExpressPromo />
        <IntroSection />
        <FeatureOverview />
        <FeaturedProjects />
        <PricingCTASection />
        <VideoOverlaySection />
        </>
    )
}

export default LandingPage;