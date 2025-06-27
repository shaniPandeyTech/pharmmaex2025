"use client";

import BannerSection from "../components/BannerSection";
import MarqueeBanner from "../components/MarqueeBanner";
import MumbaiRegistration from "../components/Registration";
import ContactSection from "./ContactSection";


export default function Index() {


  return (
    <section className="bg-white">
      <BannerSection
        imageUrl="/images/review-bg.jpg" 
        title="Contact us"
        breadcrumb="Contact-us"
      />
      <ContactSection />
      <MarqueeBanner />
     {/* <ReviewSection /> */}
     <MumbaiRegistration />
    </section>
  );
}
