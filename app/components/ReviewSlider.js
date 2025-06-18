import Image from "next/image";
import Marquee from "react-fast-marquee";

const reviews = [
  {
    name: "Tarmeet Singh",
    title: "Director, Wahoo Wellness",
    rating: 5,
    text: "We have been associating with PharmmaEx for the last many years, and every time they have come up with innovative ideas. They know what to deliver and that too on committed time.",
    image: "/images/avatar.png",
  },
  {
    name: "Tarmeet Singh",
    title: "Director, Wahoo Wellness",
    rating: 5,
    text: "PharmmaEx has consistently delivered outstanding results with creative ideas. They always stay on schedule.",
    image: "/images/avatar.png",
  },
  {
    name: "Tarmeet Singh",
    title: "Director, Wahoo Wellness",
    rating: 5,
    text: "Working with PharmmaEx has been a great experience. Very professional and always on time.",
    image: "/images/avatar.png",
  },
  {
    name: "Tarmeet Singh",
    title: "Director, Wahoo Wellness",
    rating: 5,
    text: "We have been associating with PharmmaEx for the last many years, and every time they have come up with innovative ideas. They know what to deliver and that too on committed time.",
    image: "/images/avatar.png",
  },
  {
    name: "Tarmeet Singh",
    title: "Director, Wahoo Wellness",
    rating: 5,
    text: "PharmmaEx has consistently delivered outstanding results with creative ideas. They always stay on schedule.",
    image: "/images/avatar.png",
  },
  {
    name: "Tarmeet Singh",
    title: "Director, Wahoo Wellness",
    rating: 5,
    text: "Working with PharmmaEx has been a great experience. Very professional and always on time.",
    image: "/images/avatar.png",
  },
  {
    name: "Tarmeet Singh",
    title: "Director, Wahoo Wellness",
    rating: 5,
    text: "We have been associating with PharmmaEx for the last many years, and every time they have come up with innovative ideas. They know what to deliver and that too on committed time.",
    image: "/images/avatar.png",
  },
  {
    name: "Tarmeet Singh",
    title: "Director, Wahoo Wellness",
    rating: 5,
    text: "PharmmaEx has consistently delivered outstanding results with creative ideas. They always stay on schedule.",
    image: "/images/avtar.png",
  },
  {
    name: "Tarmeet Singh",
    title: "Director, Wahoo Wellness",
    rating: 5,
    text: "Working with PharmmaEx has been a great experience. Very professional and always on time.",
    image: "/images/avatar.png",
  }
  // Add more if needed
];

export default function ReviewSlider() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Our Clients Reviews
      </h2>
      <div className="space-y-6">
        {[0, 1].map((rowIndex) => (
          <Marquee
            key={rowIndex}
            direction={rowIndex % 2 === 0 ? "left" : "right"}
            speed={30}
            gradient={false}
            pauseOnHover
          >
            {[...reviews, ...reviews].map((review, i) => (
              <div
                key={`${rowIndex}-${i}`}
                className="mx-4 w-[300px] max-w-xs p-4 bg-white/60 rounded-xl shadow-md"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-sm">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.title}</p>
                    <div className="text-yellow-500 text-xs">
                      {"⭐".repeat(review.rating)} {review.rating.toFixed(1)}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-800">{review.text}</p>
              </div>
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  );
}
