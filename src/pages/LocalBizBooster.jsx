import LocalBusinessBooster from "../components/BusinessBooster"
import HeroSection from "../components/Hero"


const LocalBizBooster = () => {

  return (
    <>
    <HeroSection
      title="Boost Your Local Business Website in Minutes"
      primaryText="View Website Packages"
      primaryLink="pricing"          // anchor to the form section
      secondaryText="Schedule a Call"
      secondaryLink="/contact"
      backgroundImage="/img/heroImg.png"
    />
    <LocalBusinessBooster/> 
    </>
  )
}

export default LocalBizBooster