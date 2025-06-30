"use client";

import { useEffect, useState } from "react";

export default function ExhibitionStats() {
  const stats = [
    { value: 6000, label: "Attendees" },
    { value: 120, label: "Exhibitors" },
    { value: 7500, label: "Product on Display" },
    { value: 10, label: "Media Coverage" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, idx) => {
          const target = stats[idx].value;
          const increment = Math.ceil(target / 50); // Control speed
          if (count < target) {
            const newVal = count + increment;
            return newVal > target ? target : newVal;
          }
          return count;
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[url('/images/bg-what.jpg')] bg-cover bg-center py-4 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between lg:mb-10">
          <div>
            <h2 className="text-white text-2xl md:text-3xl font-bold leading-snug whitespace-nowrap mb-8">
              What’s in the  Exhibition
            </h2>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#2b2b2b]/80 backdrop-blur-md text-white rounded-xl px-4 py-10 text-center min-w-[150px] lg:min-w-[240px]"
              >
                <div className="text-3xl font-bold mb-1">
                  {counts[idx].toLocaleString()}+
                </div>
                <div className="text-sm font-medium opacity-90">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
