"use client";

import { useState } from "react";
import MumbaiRegistration from "../components/Registration";
import ReviewSection from "../reviews/ReviewSection";
import BannerSection from "../components/BannerSection";
const locations = [
  { name: "Hyderabad, 2025", id: "hyderabad" },
  { name: "Ahmedabad, 2024", id: "ahmedabad" },
  { name: "Pune, 2024", id: "pune" },
  { name: "Bangalore, 2024", id: "bangalore" },
];

const images = {
  hyderabad: [
    "/images/image1.png",
    "/images/image1.png",
    "/images/image1.png",
    "/images/image1.png",
    "/images/image1.png",
    "/images/image1.png",
    "/images/image1.png",
    "/images/image1.png",
    "/images/image1.png",
    "/images/image1.png",
    "/images/image1.png",
    "/images/image1.png",
  ],
  ahmedabad: [
     "/images/image2.png",
    "/images/image2.png",
   "/images/image2.png",
    "/images/image2.png",
    "/images/image2.png",
    "/images/image2.png",
    "/images/image2.png",
    "/images/image2.png",
    "/images/image2.png",
    "/images/image2.png",
    "/images/image2.png",
    "/images/image2.png",
  ],
  pune: [
    "/images/image3.png",
    "/images/image3.png",
    "/images/image3.png",
    "/images/image3.png",
     "/images/image3.png",
    "/images/image3.png",
     "/images/image3.png",
    "/images/image3.png",
     "/images/image3.png",
    "/images/image3.png",
     "/images/image3.png",
    "/images/image3.png",
  ],
  bangalore: [
    "/images/image1.png",
    "/images/image1.png",
    "/images/image1.png",
    "/images/image1.png",
    "/images/image1.png",
    "/images/image1.png",
    "/images/image1.png",
    "/images/image1.png",
    "/images/image1.png",
    "/images/image1.png",
    "/images/image1.png",
    "/images/image1.png",
  ]
};
export default function Gallery() {
  const [activeLocation, setActiveLocation] = useState("hyderabad");

  return (
    <section className="py-16 bg-white">
      <BannerSection
        imageUrl="/images/reviews-bg.png" 
        title="Gallery"
        breadcrumb="gallery"
      />
      <div className="p-4 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">Our Exhibition Photos Gallery</h1>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {locations.map((loc) => (
            <button
              key={loc.id}
              className={`px-4 py-1 rounded-full border ${activeLocation === loc.id
                  ? "bg-green-600 text-white"
                  : "bg-white border-gray-300"
                }`}
              onClick={() => setActiveLocation(loc.id)}
            >
              {loc.name}
            </button>
          ))}
        </div>

        {/* Images */}
        <div className="py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images[activeLocation]?.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${activeLocation} Exhibition Photo ${i + 1}`}
              className="rounded-lg shadow-md object-fill w-full h-44"
            />
          ))}
        </div>
      </div>
       
     <MumbaiRegistration />
    </section>
  );
}


