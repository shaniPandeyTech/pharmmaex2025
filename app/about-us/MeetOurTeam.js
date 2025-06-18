'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';

const events = [
  {
  name: 'Shivam Sharma',
  dessination: 'Marketing Manager',
    image: '/images/team1.jpg',
  },
  {
    name: 'Shivam Sharma',
    dessination: 'Marketing Manager',
    image: '/images/team1.jpg',
  },
  {
    name: 'Shivam Sharma',
    dessination: 'Marketing Manager',
    image: '/images/team1.jpg'
  },
  {
    name: 'Shivam Sharma',
    dessination: 'Marketing Manager',
    image: '/images/team1.jpg',
  },
  {
    name: 'Shivam Sharma',
    dessination: 'Marketing Manager',
    image: '/images/team1.jpg',
  },
];

export default function MeetOurTeam() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 4,
      spacing: 16,
    },
    slideChanged: (slider) => {
      setCurrentSlide(Math.floor(slider.track.details.rel / 3));
    },
  });
  const cities = ['01 Bangalore 2024', '02 Pune 2024', '03 Ahmedabad 2024', '04 Hyderabad 2025'];
  return (
    <section className="px-4 py-12 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Our Past Exhibitions</h2>

 
      {/* Image Slider */}
      <div className="keen-slider" ref={sliderRef}>
        {events.map((event, idx) => (
          <div key={idx} className="keen-slider__slide rounded-2xl overflow-hidden relative">
            <img src={event.image} alt={event.location} className="w-full h-80 object-cover" />
           
  <div class="absolute inset-0 bg-black/30"></div>


  <div class="absolute bottom-0 left-0 right-0 text-white text-center p-4">
    <p class="text-lg font-semibold">{event.name}</p>
    <p class="text-sm text-gray-300">{event.dessination}</p>
  </div>
           
          </div>
        ))}
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: Math.ceil(events.length / 3) }).map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full cursor-pointer ${currentSlide === idx ? 'bg-green-600' : 'bg-gray-300'}`}
            onClick={() => instanceRef.current?.moveToIdx(idx * 3)}
          ></button>
        ))}
      </div>
    </section>
  );
}
