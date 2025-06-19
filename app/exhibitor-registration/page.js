"use client";

import BannerSection from "../components/BannerSection";
import MumbaiRegistration from "../components/Registration";
import ExhibitorRegistrationForm from "./ExhibitorRegistrationForm";

export default function Gallery() {


  return (
    <section className=" bg-white">
     <BannerSection
        imageUrl="/images/exhibitor-bg.jpg" 
        title="Exhibitor registration form"
        breadcrumb="Exhibitor registration form"
      />
     <ExhibitorRegistrationForm />
     <MumbaiRegistration />
    </section>
  );
}
