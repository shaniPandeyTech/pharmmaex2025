import Image from "next/image";
import Marquee from "react-fast-marquee";

const logos = [
  [
    "/images/logos/logo1.png",
    "/images/logos/logo2.png",
    "/images/logos/logo3.png",
    "/images/logos/logo3.png",
    "/images/logos/logo1.png",
    "/images/logos/logo2.png",
    "/images/logos/logo3.png",
    "/images/logos/logo3.png",
    "/images/logos/logo2.png",
    "/images/logos/logo3.png",
    "/images/logos/logo3.png",
  ],
  [
    "/images/logos/logo1.png",
    "/images/logos/logo2.png",
    "/images/logos/logo3.png",
    "/images/logos/logo3.png",
    "/images/logos/logo1.png",
    "/images/logos/logo2.png",
    "/images/logos/logo3.png",
    "/images/logos/logo3.png",
    "/images/logos/logo2.png",
    "/images/logos/logo3.png",
    "/images/logos/logo3.png",
  ],
  [
    "/images/logos/logo1.png",
    "/images/logos/logo2.png",
    "/images/logos/logo3.png",
    "/images/logos/logo3.png",
    "/images/logos/logo1.png",
    "/images/logos/logo2.png",
    "/images/logos/logo3.png",
    "/images/logos/logo3.png",
    "/images/logos/logo2.png",
    "/images/logos/logo3.png",
    "/images/logos/logo3.png",
  ],
];

export default function ExhibitorSlider() {
  return (
    <section className="bg-white py-16 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Exhibitors</h2>
      <div className="space-y-6">
        {logos.map((row, i) => (
          <Marquee
            key={i}
            direction={i % 2 === 0 ? "left" : "right"}
            speed={30}
            gradient={false}
            pauseOnHover
          >
            {row.map((src, j) => (
              <div key={j} className="mx-6 p-3 bg-white border rounded-xl shadow-sm min-w-[140px] h-[100px] flex items-center justify-center">
                <Image
                  src={src}
                  alt={`logo-${j}`}
                  width={100}
                  height={60}
                  className="object-contain max-h-[60px]"
                />
              </div>
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  );
}
