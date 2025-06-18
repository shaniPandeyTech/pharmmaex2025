// components/PharmaConnections.tsx
// import { BriefcaseMedical } from "lucide-react";

export default function PharmaConnections() {
  return (
    <section className="bg-white px-4 py-16 ">
        <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Pharma Connections Made Easy</h2>
          <p className="text-gray-700 mb-4">
            PharmmaEx is set to make history as the first-of-its-kind event in the bustling commercial capital of India – Mumbai.
            This three-day business extravaganza will showcase the very best of the pharmaceutical industry, featuring.
          </p>
          <p className="text-gray-700 mb-6">
            Mumbai, often referred to as the gateway to the Indian pharmaceutical industry, serves as the perfect backdrop for this monumental event. 
            With its strategic importance and global connections, the expo is expected to draw 8,000+ business delegates from around the world.
          </p>
          <button className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition">
            Pre-Registration
          </button>
        </div>

        {/* Right Cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {/* Visitor Profile */}
          <div className="border rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              {/* <BriefcaseMedical className="text-green-600" /> */}
              <h3 className="text-lg font-semibold">Visitor Profile</h3>
            </div>
            <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
              <li>Plant Management</li>
              <li>Plant Engineering</li>
              <li>Manufacturing / Production officers / Formulations</li>
              <li>Maintenance Engineering</li>
              <li>Packaging</li>
              <li>Pharmacists</li>
              <li>Contract Manufacturers</li>
            </ul>
          </div>

          {/* Exhibitor Profile */}
          <div className="border rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              {/* <BriefcaseMedical className="text-green-600" /> */}
              <h3 className="text-lg font-semibold">Exhibitor Profile</h3>
            </div>
            <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
              <li>Pharma Processing Machineries (Tablet / Capsule / Liquid / Injectable / Ointment / Dry Syrup)</li>
              <li>Packaging Machineries, Packaging Materials & Consumables</li>
              <li>Environment Control Equipment / Services, Clean Room Partitions, Equipment, Furniture & Services</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
