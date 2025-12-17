import LocalBusinessBooster from "../components/BusinessBooster"
import HeroSection from "../components/Hero"


const LocalBizBooster = () => {

  return (
    <>
    <HeroSection
      title="Boost Your Local Business Website in Minutes"
      primaryText="View Website Packages"
      primaryLink="/pricing"          
      secondaryText="Schedule a Call"
      secondaryLink="/contact"
      backgroundImage="/img/heroImg.png"
    />
    <LocalBusinessBooster/> 
    </>
  )
}

export default LocalBizBooster