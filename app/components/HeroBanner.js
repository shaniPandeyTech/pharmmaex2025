import Image from 'next/image';

export default function HeroBanner() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden rounded-t-3xl shadow-md bg-gray-300 flex items-center justify-center">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="https://pharmmaex.com/assets/img/phasramex-Videos.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="relative z-20 w-full bg-black/40">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Countdown */}
            <div className="bg-white/30 backdrop-blur-md text-white rounded-2xl p-6 min-w-[140px] text-center space-y-4 font-semibold">
              <div>
                <p className="text-3xl">130</p>
                <p className="text-sm">Days</p>
              </div>
              <div>
                <p className="text-2xl">3,105</p>
                <p className="text-sm">Hours</p>
              </div>
              <div>
                <p className="text-xl">1,86,347</p>
                <p className="text-sm">Minutes</p>
              </div>
            </div>

            {/* Text */}
            <div className="text-center md:text-left text-white flex-1">
              <p className="uppercase tracking-wide text-sm md:text-base mb-2">
                PharmaEx Presenting
              </p>
              <h1 className="text-2xl md:text-4xl font-bold leading-snug mb-4 max-w-2xl">
                India’s Largest Platform for Third Party Pharma Manufacturing and PCD Franchise Opportunities.
              </h1>
              <p className="text-sm md:text-base mb-6">
                02–03 October, 2025 | Bombay Exhibition Centre, Mumbai
              </p>

              <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium transition">
                  Pre-Registration
                </button>
                <button className="border border-white text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-black transition">
                  Become Exhibitor
                </button>
              </div>
            </div>

            {/* QR Code */}
            <div className="hidden md:block">
              <div className="bg-white rounded-xl p-2 text-center shadow-xl">
                <Image
                  src="/images/qr.png"
                  alt="QR Code"
                  width={100}
                  height={100}
                  className="rounded-md"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
