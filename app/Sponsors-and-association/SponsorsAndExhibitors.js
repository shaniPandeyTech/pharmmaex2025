import React from "react";

const keySponsors = [
  { label: "Industry Leaders", logo: "/images/sponsors/bioaltus.png" },
  { label: "Top Rankers", logo: "/images/sponsors/semlon.png" },
  { label: "Pharma Player", logo: "/images/sponsors/angia.png" },
  { label: "Pharma Champion", logo: "/images/sponsors/nexkem.png" },
  { label: "Supported Partners", logo: "/images/sponsors/sigma.png" },
  { label: "Supported Partners", logo: "/images/sponsors/cynak.png" },
  { label: "Supported Partners", logo: "/images/sponsors/sb.png" },
  { label: "Pharma Champion", logo: "/images/sponsors/nexkem.png" },
];

const exhibitors = [
 "/images/sponsors/bioaltus.png",
 "/images/sponsors/semlon.png",
 "/images/sponsors/bioaltus.png",
 "/images/sponsors/semlon.png",
 "/images/sponsors/nexkem.png",
 "/images/sponsors/bioaltus.png",
 "/images/sponsors/bioaltus.png",
 "/images/sponsors/semlon.png",
 "/images/sponsors/bioaltus.png",
 "/images/sponsors/semlon.png",
 "/images/sponsors/bioaltus.png",
 "/images/sponsors/semlon.png",
 "/images/sponsors/nexkem.png",
 "/images/sponsors/semlon.png",
 "/images/sponsors/bioaltus.png",
 "/images/sponsors/semlon.png",
 "/images/sponsors/bioaltus.png",
 "/images/sponsors/bioaltus.png",
 "/images/sponsors/semlon.png",
 "/images/sponsors/bioaltus.png",
 "/images/sponsors/bioaltus.png",
 "/images/sponsors/nexkem.png",
 "/images/sponsors/bioaltus.png",
 "/images/sponsors/bioaltus.png",
 "/images/sponsors/bioaltus.png",
 "/images/sponsors/bioaltus.png",
 "/images/sponsors/bioaltus.png",
 "/images/sponsors/bioaltus.png",
 "/images/sponsors/bioaltus.png",
 "/images/sponsors/bioaltus.png",
 "/images/sponsors/bioaltus.png"
];

const SponsorsAndExhibitors = () => {
  return (
    <section className="py-16 px-4 md:px-12 bg-white">
      <div className="container mx-auto">
      {/* Key Sponsors */}
      <h2 className="text-3xl font-bold text-center mb-10">Our Key Sponsors</h2>
      <div className="mx-auto w-[1090px]">
      <div className="flex flex-wrap justify-center gap-6 mb-16 ">
        {keySponsors.map((sponsor, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-100 px-6 py-4 rounded-lg shadow-sm w-[240px] flex-wrap justify-center"
          >
            <span className="text-xs block font-semibold text-gray-600 text-center border-b border-gray-400 w-full mb-4 pb-2">
              {sponsor.label}
            </span>
            <img
              src={sponsor.logo}
              alt={sponsor.label}
              width={200}
              height={50}
              className="h-10 object-contain"
            />
          </div>
        ))}
      </div>

        </div>

      {/* Exhibitors */}
      <h2 className="text-3xl font-bold text-center mb-10">Our Exhibitors</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {exhibitors.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-gray-100 h-24 rounded-lg shadow-sm p-4"
          >
            <img src={logo} alt={`Exhibitor ${index + 1}`} className="h-full object-contain" />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default SponsorsAndExhibitors;
