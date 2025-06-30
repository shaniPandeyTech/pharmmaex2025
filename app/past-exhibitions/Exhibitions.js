import React from "react";

const exhibitions = [
  {
    id: 1,
    edition: "1st Edition",
    city: "Bangalore",
    year: "2024",
    date: "02–03 February, 2024",
    venue: "Manpho Convention Centre, Bangalore",
    image: "/images/bang.jpg",
  },
  {
    id: 2,
    edition: "2nd Edition",
    city: "Pune",
    year: "2024",
    date: "21–22 June, 2024",
    venue: "Auto Cluster Exhibition Centre, Chinchwad–Pune",
    image: "/images/pune.jpg",
  },
  {
    id: 3,
    edition: "3rd Edition",
    city: "Ahmedabad",
    year: "2024",
    date: "14–15 December, 2024",
    venue: "Vigyan Bhawan, Science City, Ahmedabad",
    image: "/images/ahma.jpg",
  },
  {
    id: 4,
    edition: "4th Edition",
    city: "Hyderabad",
    year: "2025",
    date: "02–03 May, 2025",
    venue: "HITEX Exhibition Centre, Hyderabad",
    image: "/images/hyde.jpg",
  },
];

const Exhibitions = () => {
  return (
    <section className="py-12 px-4 md:px-12 bg-white">
      <div className="container mx-auto">
      <h2 className="text-3xl font-bold align-bottom mb-12">Past Exhibitions</h2>

      <div className="space-y-16">
        {exhibitions.map((item, index) => {
          const isEvenRow = index % 2 !== 0;

          return (
            <div
              key={item.id}
              className={`flex flex-col lg:flex-row ${
                isEvenRow ? "lg:flex-row-reverse" : ""
              } items-end gap-8`}
            >
              {/* Image */}
              <div className="w-[925px h-[480px] ">
                <img
                  src={item.image}
                  alt={item.city}
                  width={925}
                  height={480}
                  className="w-full object-cover rounded-lg "
                />
              </div>

              {/* Text */}
              <div
                className={`w-[420px] py-[130px] ${
                  isEvenRow ? "flex flex-col items-start" : "text-left"
                }`}
              >
                <span className="inline-block bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  {item.edition}
                </span>
                <h3 className="text-5xl font-bold text-green-700 mb-7">
                  {item.city}–{item.year}
                </h3>
                <p className="text-gray-700 text-2xl mb-1">{item.date}</p>
                <p className="text-gray-600 text-2xl ">{item.venue}</p>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
};

export default Exhibitions;
