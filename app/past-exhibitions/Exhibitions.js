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
      <h2 className="text-3xl font-bold text-center mb-12">Past Exhibitions</h2>

      <div className="space-y-16">
        {exhibitions.map((item, index) => {
          const isEvenRow = index % 2 !== 0;

          return (
            <div
              key={item.id}
              className={`flex flex-col lg:flex-row ${
                isEvenRow ? "lg:flex-row-reverse" : ""
              } items-center gap-8`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <img
                  src={item.image}
                  alt={item.city}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>

              {/* Text */}
              <div
                className={`w-full lg:w-1/2 ${
                  isEvenRow ? "text-right" : "text-left"
                }`}
              >
                <span className="inline-block bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  {item.edition}
                </span>
                <h3 className="text-2xl font-bold text-green-700 mb-1">
                  {item.city}–{item.year}
                </h3>
                <p className="text-gray-700 mb-1">{item.date}</p>
                <p className="text-gray-600 text-sm">{item.venue}</p>
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
