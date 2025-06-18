import Pagination from '../components/Pagination';
import ReviewCard from './ReviewCard';


const testimonials = [
  {
    name: "Tarmeet Singh",
    role: "Director, Mahon Wellness",
    image: "/images/avtar.png", 
    text: "We have been associating with PharmaEx for the last many years, and every time they have come up with innovative ideas. They know what to deliver and that too on committed time.",
  },  {
    name: "Tarmeet Singh",
    role: "Director, Mahon Wellness",
    image: "/images/avtar.png", 
    text: "We have been associating with PharmaEx for the last many years, and every time they have come up with innovative ideas. They know what to deliver and that too on committed time.",
  },  {
    name: "Tarmeet Singh",
    role: "Director, Mahon Wellness",
    image: "/images/avtar.png", 
    text: "We have been associating with PharmaEx for the last many years, and every time they have come up with innovative ideas. They know what to deliver and that too on committed time.",
  },  {
    name: "Tarmeet Singh",
    role: "Director, Mahon Wellness",
    image: "/images/avtar.png", 
    text: "We have been associating with PharmaEx for the last many years, and every time they have come up with innovative ideas. They know what to deliver and that too on committed time.",
  },  {
    name: "Tarmeet Singh",
    role: "Director, Mahon Wellness",
    image: "/images/avtar.png", 
    text: "We have been associating with PharmaEx for the last many years, and every time they have come up with innovative ideas. They know what to deliver and that too on committed time.",
  },  {
    name: "Tarmeet Singh",
    role: "Director, Mahon Wellness",
    image: "/images/avtar.png", 
    text: "We have been associating with PharmaEx for the last many years, and every time they have come up with innovative ideas. They know what to deliver and that too on committed time.",
  },  {
    name: "Tarmeet Singh",
    role: "Director, Mahon Wellness",
    image: "/images/avtar.png", 
    text: "We have been associating with PharmaEx for the last many years, and every time they have come up with innovative ideas. They know what to deliver and that too on committed time.",
  },  {
    name: "Tarmeet Singh",
    role: "Director, Mahon Wellness",
    image: "/images/avtar.png", 
    text: "We have been associating with PharmaEx for the last many years, and every time they have come up with innovative ideas. They know what to deliver and that too on committed time.",
  },  {
    name: "Tarmeet Singh",
    role: "Director, Mahon Wellness",
    image: "/images/avtar.png", 
    text: "We have been associating with PharmaEx for the last many years, and every time they have come up with innovative ideas. They know what to deliver and that too on committed time.",
  },  {
    name: "Tarmeet Singh",
    role: "Director, Mahon Wellness",
    image: "/images/avtar.png", 
    text: "We have been associating with PharmaEx for the last many years, and every time they have come up with innovative ideas. They know what to deliver and that too on committed time.",
  },  {
    name: "Tarmeet Singh",
    role: "Director, Mahon Wellness",
    image: "/images/avtar.png", 
    text: "We have been associating with PharmaEx for the last many years, and every time they have come up with innovative ideas. They know what to deliver and that too on committed time.",
  },  {
    name: "Tarmeet Singh",
    role: "Director, Mahon Wellness",
    image: "/images/avtar.png", 
    text: "We have been associating with PharmaEx for the last many years, and every time they have come up with innovative ideas. They know what to deliver and that too on committed time.",
  },  {
    name: "Tarmeet Singh",
    role: "Director, Mahon Wellness",
    image: "/images/avtar.png", 
    text: "We have been associating with PharmaEx for the last many years, and every time they have come up with innovative ideas. They know what to deliver and that too on committed time.",
  },  {
    name: "Tarmeet Singh",
    role: "Director, Mahon Wellness",
    image: "/images/avtar.png", 
    text: "We have been associating with PharmaEx for the last many years, and every time they have come up with innovative ideas. They know what to deliver and that too on committed time.",
  },  {
    name: "Tarmeet Singh",
    role: "Director, Mahon Wellness",
    image: "/images/avtar.png", 
    text: "We have been associating with PharmaEx for the last many years, and every time they have come up with innovative ideas. They know what to deliver and that too on committed time.",
  }
  
];

export default function ReviewSection() {
  return (
    <section className="container mx-auto py-10">
      <h2 className="text-2xl font-bold text-center mb-8">What Our Clients Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-8">
        {testimonials.map((t, index) => (
          <ReviewCard key={index} {...t} />
        ))}
      </div>

      <Pagination />
    </section>
  );
}