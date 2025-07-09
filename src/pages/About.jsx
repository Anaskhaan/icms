import { Banner } from "../components/AboutUs/Banner"
import { CampusFacilities } from "../components/AboutUs/CampusFacilities"
import CEOMessage from "../components/AboutUs/CEOMessage"
import OurMission from "../components/AboutUs/OurMission"
import { RulesAndRegulations } from "../components/AboutUs/RulesAndRegulations"

export const About = () => {
  return (
    <div>
      <Banner/>
      <OurMission/>
      <CEOMessage/>
      <CampusFacilities/>
      <RulesAndRegulations/>
    </div>
  )
}
