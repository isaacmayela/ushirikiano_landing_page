import Navigations from "../navigations/Navigations"
import HeroSectionDescription from "../heroSectionDescription/HeroSectionDescription"


export default function HeroSection() {
  return (
    <div className="w-full flex flex-col items-center bg-[url('src/assets/images/bg-hero-section.jpg')] bg-no-repeat bg-center bg-cover pb-[2em]">
      <Navigations/>
      <HeroSectionDescription/>
    </div>
  )
}
