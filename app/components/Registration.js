import Image from "next/image";
// import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function MumbaiRegistration() {
  return (
    <section className="relative w-full py-16">
      {/* Background Image */}
      <Image
        src="/images/bg-registration.jpg" // Update this with your actual image path
        alt="Mumbai Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
        className="z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Overlay Content */}
      <div className=" relative z-20 flex items-center justify-start px-6 md:px-20">
        <div className="bg-green-900 bg-opacity-80 text-white rounded-3xl p-8 max-w-xl w-full space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Registration for Mumbai</h2>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex items-center gap-3">
              {/* <FaCalendarAlt className="text-2xl" /> */}
              <div>
                <p className="text-lg font-semibold">02–03 October,</p>
                <p className="text-lg">2025</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* <FaMapMarkerAlt className="text-2xl" /> */}
              <div>
                <p className="text-lg font-semibold">Bombay Exhibition Centre,</p>
                <p className="text-lg">Mumbai</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 flex-wrap">
            <button className="border border-white rounded-full px-6 py-2 hover:bg-white hover:text-green-900 transition">
              Pre-Registration
            </button>
            <button className="border border-white rounded-full px-6 py-2 hover:bg-white hover:text-green-900 transition">
              Become Exhibitor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
