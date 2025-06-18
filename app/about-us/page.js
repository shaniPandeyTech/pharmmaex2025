"use client";

import BannerSection from "../components/BannerSection";
import MumbaiRegistration from "../components/Registration";
import HeroInnovation from "./HeroInnovation";
import MeetOurTeam from "./MeetOurTeam";
import MissionSection from "./MissionStatement";
import PastExhibitions from "./PastExhibitions";
import WhoWeServe from "./WhoweServe";

export default function Aboutus() {


  return (
    <section className="bg-white ">
      <BannerSection
        imageUrl="/images/whoweare-bg.png" 
        title="Who we are"
        breadcrumb="Who we are"
      />

<HeroInnovation />
<MissionSection />
<WhoWeServe />
      <PastExhibitions />
      <MeetOurTeam />
     
     <MumbaiRegistration />
    </section>
  );
}
