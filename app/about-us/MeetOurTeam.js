'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';

const events = [
  {
    name: 'Shivam Sharma',
    designation: 'Marketing Manager',
    image: '/images/icon/meetteam/shivam.png',
  },
  {
    name: 'Vivek Agrawal',
    designation: 'Operation Manager',
    image: '/images/icon/meetteam/vivek.png',
  },
  {
    name: 'Pankaj Sharma',
    designation: 'Marketing Manager',
    image: '/images/icon/meetteam/pankaj.png',
  },
  {
    name: 'Vijendra Kumar',
    designation: 'Event Manager',
    image: '/images/icon/meetteam/vijendra.png',
  },
];

export default function MeetOurTeam() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      '(min-width: 1024px)': {
        slides: { perView: 4, spacing: 16 },
      },
      '(min-width: 768px)': {
        slides: { perView: 4, spacing: 12 },
      },
    },
    slides: { perView: 1, spacing: 8 },
    slideChanged: (slider) => {
      setCurrentSlide(Math.floor(slider.track.details.rel));
    },
  });

  return (
    <section className="px-4 py-12 container mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-8">Our Past Exhibitions</h2>

      {/* Image Slider */}
      <div className="keen-slider" ref={sliderRef}>
        {events.map((event, idx) => (
          <div key={idx} className="keen-slider__slide rounded-2xl overflow-hidden relative">
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute bottom-0 left-0 right-0 text-white text-center p-4">
              <p className="text-lg font-semibold">{event.name}</p>
              <p className="text-sm text-gray-300">{event.designation}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: events.length }).map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              currentSlide === idx ? 'bg-green-600' : 'bg-gray-300'
            }`}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
          ></button>
        ))}
      </div>
    </section>
  );
}
