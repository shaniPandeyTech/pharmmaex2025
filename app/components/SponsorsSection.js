import Image from "next/image"; // For Next.js Image optimization

export default function SponsorsSection() {
  const sponsors = [
    { title: "Industry Leaders", logo: "/images/logos/logo1.png" },
    { title: "Top Rankers", logo: "/images/logos/logo2.png" },
    { title: "Pharma Player", logo: "/images/logos/logo3.png" },
    { title: "Pharma Champion", logo: "/images/logos/logo5.png" },
    { title: "Supported Partners", logo: "/images/logos/logo1.png" },
    { title: "Supported Partners", logo: "/images/logos/logo2.png" },
    { title: "Supported Partners", logo: "/images/logos/logo3.png" },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Key Sponsors</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-white w-[250px] rounded-2xl shadow border p-4 flex flex-col items-center text-center"
            >
              <p className="text-sm font-medium mb-2 border-b pb-1 w-full">
                {sponsor.title}
              </p>
              <div className="w-full h-[80px] flex items-center justify-center">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.title}
                  width={160}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
