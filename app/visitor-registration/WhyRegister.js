// components/WhyRegister.tsx

import Image from "next/image";


const reasons = [
  "Free Entry for Registered Visitors",
  "Meet 250+ Exhibitors from Across the Pharma Industry",
  "Explore the Latest Trends in Formulations & Technologies",
  "Discover New Business Opportunities & Partnerships",
  "Held at Helipad Exhibition Centre, Ahmedabad",
];

export default function WhyRegister() {
  return (
    <section className="py-12 px-4 bg-white text-center max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-10">Why Register for PharmmaEx?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {reasons.map((text, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center border border-[#bebebe] rounded-2xl p-6 py-12 bg-[#fafafa]"
          >
            {/* Green Circle with Star */}
            <div className="bg-[#00833D] text-white rounded-full p-3 mb-4">
              <Image src={"/images/star.svg"} alt="Star Icon" width={24} height={24} />
            </div>

            {/* Text */}
            <p className="text-sm font-medium text-gray-800">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
