"use client";

import BannerSection from "../components/BannerSection";
import HighlightExhibitions from "../components/HighlightExhibitions";
import MumbaiRegistration from "../components/Registration";
import VisitorForm from "./VisitorForm";
import WhyRegister from "./WhyRegister";

export default function VisitorRegistration() {


  return (
    <section className="py-8 bg-white">
         <BannerSection
        imageUrl="/images/visitor-bg.jpg" 
        title="Visitor Registration"
        breadcrumb="Visitor Registration"
      />
        <VisitorForm />  
        <WhyRegister />
     <HighlightExhibitions />
     <MumbaiRegistration />
    </section>
  );
}
