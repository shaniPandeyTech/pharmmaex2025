// components/ExhibitionSeries.tsx
"use client"
import Image from "next/image";
// import { CalendarDays, Clock } from "lucide-react";

import { useEffect, useState } from "react";

import styles from "./styles/exhibition.module.scss"
import { Sofadi_One } from "next/font/google";

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
    return <p className="text-red-600 font-bold text-xl">{"Time's up!"}</p>;
  }



  return (
    <section className={`bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-16 px-4 md:px-16 ${styles.exhibitionSection}`}>
      <div className="container mx-auto">
        <h2>PharmmaEx Exhibitions Searies</h2>

        {/* Upcoming Exhibition */}
        <div className={styles.content}>
          <h3>
            <span>Upcoming Exhibition</span>
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
              <div className={`flex ${styles.countdown}`}>

                <div className={styles.countdownItem}>
                  <strong>{timeLeft.days}</strong>
                  <span>Days</span>
                </div>

                <div className={styles.countdownItem}>
                  <strong>{timeLeft.hours}</strong>
                  <span>Hours</span>
                </div>

                <div className={styles.countdownItem}>
                  <strong>{timeLeft.minutes}</strong>
                  <span>Minutes</span>
                </div>

                {/* <div className={styles.countdownItem}>
                  <strong>{timeLeft.seconds}</strong>
                  <span>Seconds</span>
                </div> */}
              </div>

              <div className={styles.exhibitionDetails}>
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
        <div className={styles.content}>
          <h3>
            <span> Past Exhibitions</span>
          </h3>
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ${styles.exhibitionGrid}`}>
            {exhibitions.map((item, idx) => (
              <div
                key={idx}
                className={styles.exhibitionCard}
              >
                <span className={styles.imageWrapper}>
                  <Image
                    src={item.image}
                    alt={item.location}
                    width={350}
                    height={250}
                    className="object-cover"
                  />
                </span>
                <div className={`mt-3 ${styles.exhibitionInfo}`}>
                  <p>{item.date}</p>
                  <p>{item.location}</p>
                </div>
                <a href="#" className="btnWhite_op25">View Gallery</a>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

