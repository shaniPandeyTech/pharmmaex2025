"use client";

import BannerSection from "../components/BannerSection";
import MumbaiRegistration from "../components/Registration";
import ReviewSection from "./ReviewSection";

export default function Gallery() {


  return (
    <section className="bg-white">
      <BannerSection
        imageUrl="/images/review-bg.jpg" 
        title="Reviews"
        breadcrumb="review"
      />
     <ReviewSection />
     <MumbaiRegistration />
    </section>
  );
}
