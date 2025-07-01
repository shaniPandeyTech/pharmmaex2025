

// import Footer from '@/components/Footer';

import AboutPharmaEx from "./components/AboutSection";
import EligibilitySection from "./components/EligibilitySection";
import ExhibitionSeries from "./components/ExhibitionSeries";
import ExhibitionStats from "./components/ExhibitionStats";
import ExhibitorSlider from "./components/ExhibitorSlider";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import MarqueeBanner from "./components/MarqueeBanner";
import PharmaConnections from "./components/PharmaConnections";
import MumbaiRegistration from "./components/Registration";
import ReviewSlider from "./components/ReviewSlider";
import SponsorsSection from "./components/SponsorsSection";


export default function Home() {
  
  return (
    <main>
    <HeroBanner />
    <MarqueeBanner />
    <AboutPharmaEx />
    <ExhibitionSeries />
    <ExhibitionStats />
    <PharmaConnections />
    <EligibilitySection />
    <SponsorsSection />
    <ExhibitorSlider />
    <ReviewSlider />
    <MumbaiRegistration />
    </main>
  );
}
