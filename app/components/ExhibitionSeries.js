// components/ExhibitionSeries.tsx
"use client"
import Image from "next/image";
// import { CalendarDays, Clock } from "lucide-react";
 
import { useEffect, useState } from "react";

const exhibitions = [
  {
    date: "02–03 May, 2025",
    location: "HITEX Exhibition Centre, Hyderabad",
    image: "/images/image1.png",
  },
  {
    date: "14–15 December, 2024",
    location: "Vigyan Bhawan, Science City, Ahmedabad",
    image: "/images/image2.png",
  },
  {
    date: "21–22 June, 2024",
    location: "Auto Cluster Exhibition Centre, Chinchwad–Pune",
    image: "/images/image3.png",
  },
  {
    date: "02–03 February, 2024",
    location: "Manpho Convention Centre, Bangalore",
    image: "/images/image5.png",
  },
];

export default function ExhibitionSeries() {

    const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(getTimeRemaining());
      }, 1000);

      return () => clearInterval(timer);
    }, []);

    function getTimeRemaining() {
      const targetDate = new Date("2025-12-31T23:59:59"); // 🎯 Change target here
      const now = new Date();
      const total = targetDate - now;

      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));

      return {
        total,
        days,
        hours,
        minutes,
        seconds,
      };
    }
    if (timeLeft.total <= 0) {
      return <p className="text-red-600 font-bold text-xl">Time's up!</p>;
    }



    return (
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-16 px-4 md:px-16">
        <div className="">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">
              PharmmaEx Exhibitions Searies
            </h2>

            {/* Upcoming Exhibition */}
            <div className="mb-14">
              <h3 className="text-xl font-semibold mb-4 border-b border-green-200 inline-block pb-1">
                Upcoming Exhibition
              </h3>
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <Image
                  src="/images/4.png"
                  alt="Bombay Exhibition Centre"
                  width={280}
                  height={180}
                  className="rounded-xl object-cover"
                />
                <div className="flex  items-center justify-between gap-3">
                  <div className="flex gap-2">
                    <div className="bg-green-600/80 rounded-lg px-4 py-2 text-center">
                      <p className="text-2xl font-bold">{timeLeft.days}</p>
                      <p className="text-sm">Days</p>
                    </div>
                    <div className="bg-green-600/80 rounded-lg px-4 py-2 text-center">
                      <p className="text-2xl font-bold">{timeLeft.hours}</p>
                      <p className="text-sm">Hours</p>
                    </div>
                    <div className="bg-green-600/80 rounded-lg px-4 py-2 text-center">
                      <p className="text-2xl font-bold">{timeLeft.minutes}</p>
                      <p className="text-sm">Minutes</p>
                    </div>
                    <div className="bg-green-600/80 rounded-lg px-4 py-2 text-center">
                      <p className="text-2xl font-bold">{timeLeft.seconds}</p>
                      <p className="text-sm">Seconds</p>
                    </div>
                  </div>
                  <div className="text-white mt-1 text-sm">
                    <p className="font-bold">02–03 October, 2025</p>
                    <p>Bombay Exhibition Centre, Mumbai</p>
                  </div>
                  <div className="flex gap-3 mt-2">
                    <button className="px-5 py-2 border border-white rounded-full hover:bg-white hover:text-green-700 transition text-sm">
                      Pre-Registration
                    </button>
                    <button className="px-5 py-2 border border-white rounded-full hover:bg-white hover:text-green-700 transition text-sm">
                      Become Exhibitor
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Past Exhibitions */}
            <div>
              <h3 className="text-xl font-semibold mb-4 border-b border-green-200 inline-block pb-1">
                Past Exhibitions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {exhibitions.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 text-white"
                  >
                    <Image
                      src={item.image}
                      alt={item.location}
                      width={320}
                      height={200}
                      className="rounded-lg w-full h-40 object-cover"
                    />
                    <div className="mt-3 text-xl">
                      <p className="font-medium">{item.date}</p>
                      <p className="text-white/90">{item.location}</p>
                    </div>
                    <button className="mt-3 text-base w-full bg-white/20 hover:bg-white/30 transition px-4 py-2 max-w-[160px] rounded-full cursor-pointer flex items-center justify-center gap-2">
                      {/* <CalendarDays size={16} /> */}
                      View Gallery
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

