export default function WhoWeServe() {
    return (
      <section className="py-12 px-4 container mx-auto !mb-[100px]">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="/images/serve.jpg" // Place your image in /public
              alt="Professionals at event"
              className="rounded-xl w-full object-cover"
              width={720}
              height={720}
            />
          </div>
  
          {/* Right Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="heading mb-4">Who We Serve</h2>
            <p className="text-gray-700 mb-4 text-[22px]">
              PharmmaEx serves as a dynamic platform for a diverse range of professionals in the pharmaceutical sector, including:
            </p>
  
            <ul className="list-disc list-inside space-y-2  text-[22px] text-gray-800">
              <li>Pharmaceutical Manufacturers</li>
              <li>Suppliers, Distributors, Wholesalers, and Retailers</li>
              <li>Pharma Facilitating Management Companies</li>
              <li>PCD / Franchise Operators</li>
              <li>Medical Officers and Hospital Purchase Personnel</li>
              <li>CEOs, Decision Makers, and Product Managers</li>
              <li>Pharma Marketing and Ethical Companies</li>
            </ul>
  
            <p className="text-gray-700 mt-4 text-[22px]">
              Our events attract professionals from various specialties, such as Allopathic, Ayurvedic, Cosmetic, Herbal, Injectable, and Nutraceuticals, providing them with opportunities to network, learn, and showcase their innovations.
            </p>
          </div>
        </div>
      </section>
    );
  }
  