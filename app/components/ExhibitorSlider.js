import Image from "next/image";
import Marquee from "react-fast-marquee";

const logos = [
  [
    "/images/slideimg/1.jpg",
    "/images/slideimg/2.jpg",
    "/images/slideimg/3.jpg",
    "/images/slideimg/4.jpg",
    "/images/slideimg/5.jpg",
    "/images/slideimg/6.jpg",
    "/images/slideimg/7.jpg",
    "/images/slideimg/8.jpg",
    "/images/slideimg/9.jpg",
    "/images/slideimg/10.jpg",
    "/images/slideimg/11.jpg",
    "/images/slideimg/12.jpg",
    "/images/slideimg/13.jpg",
    "/images/slideimg/14.jpg",
    "/images/slideimg/15.jpg",
    "/images/slideimg/16.jpg",
    "/images/slideimg/17.jpg",
    "/images/slideimg/18.jpg",
    
    
  ],
  [
    "/images/slideimg/19.jpg",
    "/images/slideimg/20.jpg",
    "/images/slideimg/21.jpg",
    "/images/slideimg/22.jpg",
    "/images/slideimg/23.jpg",
    "/images/slideimg/24.jpg",
    "/images/slideimg/25.jpg",
    "/images/slideimg/26.jpg",
    "/images/slideimg/27.jpg",
    "/images/slideimg/28.jpg",
    "/images/slideimg/29.jpg",
    "/images/slideimg/30.jpg",
    "/images/slideimg/31.jpg",
    "/images/slideimg/32.jpg",
    "/images/slideimg/33.jpg",
    "/images/slideimg/34.jpg",
    "/images/slideimg/35.jpg",
    "/images/slideimg/36.jpg",
  ],
  [
    "/images/slideimg/37.jpg",
    "/images/slideimg/38.jpg",
    "/images/slideimg/39.jpg",
    "/images/slideimg/40.jpg",
    "/images/slideimg/41.jpg",
    "/images/slideimg/42.jpg",
    "/images/slideimg/43.jpg",
    "/images/slideimg/44.jpg",
    "/images/slideimg/45.jpg",
    "/images/slideimg/46.jpg",
    "/images/slideimg/47.jpg",
    "/images/slideimg/48.jpg",
    "/images/slideimg/49.jpg",
    "/images/slideimg/50.jpg",
    "/images/slideimg/51.jpg",
    "/images/slideimg/52.jpg",
    "/images/slideimg/53.jpg",
    "/images/slideimg/54.jpg",
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
