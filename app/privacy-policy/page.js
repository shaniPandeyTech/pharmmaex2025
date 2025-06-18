"use client";

import BannerSection from "../components/BannerSection";
import MumbaiRegistration from "../components/Registration";
import PrivacyPolicytext from "./Privacytext";
import PrivacyPolicy from "./Privacytext";

export default function Gallery() {


  return (
    <section className=" bg-white">
      <BannerSection
        imageUrl="/images/privacy-bg.jpg" 
        title="Privacy Policy"
        breadcrumb="Privacy Policy"
      />
      <PrivacyPolicytext />
     <MumbaiRegistration />
    </section>
  );
}
