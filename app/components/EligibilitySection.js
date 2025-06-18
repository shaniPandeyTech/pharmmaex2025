"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function EligibilitySection() {
  const items = [
    {
      title: "Allopathic",
      desc: "Allopathic professionals can attend to stay updated on pharmaceutical advancements and treatments.",
      image: "/images/p1.png",
    },
    {
      title: "Ayurvedic",
      desc: "Ayurvedic practitioners can showcase traditional remedies and holistic healing at our exhibitions.",
      image: "/images/p1.png",
    },
    {
      title: "Cosmetic",
      desc: "Cosmetic professionals can explore the latest trends in skincare and beauty.",
      image: "/images/p1.png",
    },
    {
      title: "Herbal",
      desc: "Herbal experts can connect over natural remedies and traditional medicine.",
      image: "/images/p1.png",
    },
    {
      title: "Allopathic",
      desc: "Allopathic professionals can attend to stay updated on pharmaceutical advancements and treatments.",
      image: "/images/p1.png",
    },
    {
      title: "Ayurvedic",
      desc: "Ayurvedic practitioners can showcase traditional remedies and holistic healing at our exhibitions.",
      image: "/images/p1.png",
    },
    {
      title: "Cosmetic",
      desc: "Cosmetic professionals can explore the latest trends in skincare and beauty.",
      image: "/images/p1.png",
    },
    {
      title: "Herbal",
      desc: "Herbal experts can connect over natural remedies and traditional medicine.",
      image: "/images/p1.png",
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Eligibility for Exhibitors
        </h2>
        </div>

        <Marquee speed={20} direction="right" pauseOnHover gradient={false}>
          {items.map((item, index) => (
            <div
              key={index}
              className="min-w-[280px] max-w-[280px] mx-3 bg-white shadow-md rounded overflow-hidden"
            >
              <div className="h-48 w-full relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t"
                />
              </div>
              <div className="bg-green-700 text-white text-center px-4 py-6 flex flex-col justify-start items-center ">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </Marquee>
     
    </section>
  );
}
