import { FAQ } from "../components/Home/FAQ"
import { Gallery } from "../components/Home/Gallery"
import { GetInTouch } from "../components/Home/GetInTouch"
import Hero from "../components/Home/Hero"
import { LearningStages } from "../components/Home/LearningStages"
import { OurBenefits } from "../components/Home/OurBenifits"
import { ParentTestimonials } from "../components/Home/ParentTestimonials"
import { StartLearningJourney } from "../components/Home/StartLearningJourney"
import { WhyChooseUs } from "../components/Home/WhyChooseUs"

export const Home = () => {
  return (
    <div>
      <Hero />
      <LearningStages />
      <StartLearningJourney/>
      <OurBenefits />
      <WhyChooseUs />
      <Gallery/>
      <FAQ />
      <ParentTestimonials />
      <GetInTouch />
    </div>
  )
}
