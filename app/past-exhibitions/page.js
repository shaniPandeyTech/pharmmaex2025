"use client";


import BannerSection from "../components/BannerSection";
import MumbaiRegistration from "../components/Registration";
import Exhibitions from "./Exhibitions";


export default function index() {


  return (
    <section className="bg-white">
      <BannerSection
        imageUrl="/images/review-bg.jpg" 
        title="Past Exhibitions"
        breadcrumb="Past Exhibitions"
      />
     <Exhibitions />
     <MumbaiRegistration />
    </section>
  );
}
