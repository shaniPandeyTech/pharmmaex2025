"use client";

import BannerSection from "../components/BannerSection";
import MumbaiRegistration from "../components/Registration";

import SponsorsAndExhibitors from "./SponsorsAndExhibitors";

export default function Index() {


  return (
    <section className="bg-white">
      <BannerSection
        imageUrl="/images/review-bg.jpg" 
        title="Sponsors & Association"
        breadcrumb="Sponsors-and-association"
      />
     <SponsorsAndExhibitors />
     <MumbaiRegistration />
    </section>
  );
}
