"use client";

import MumbaiRegistration from "../components/Registration";
import ReviewSection from "../reviews/ReviewSection";

export default function Gallery() {


  return (
    <section className="py-16 bg-white">
      <BannerSection
        imageUrl="/images/reviews-bg.png" 
        title="Reviews"
        breadcrumb="review"
      />
      <ReviewSection />
     <MumbaiRegistration />
    </section>
  );
}


