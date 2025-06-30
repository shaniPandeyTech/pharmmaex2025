'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';

const events = [
  {
    date: '02–03 May, 2025',
    location: 'HITEX Exhibition Centre, Hyderabad',
    image: '/images/past-image1.jpg',
  },
  {
    date: '14–15 December, 2024',
    location: 'Vigyan Bhawan, Science City, Ahmedabad',
    image: '/images/past-image1.jpg',
  },
  {
    date: '21–22 June, 2024',
    location: 'Auto Cluster Chinchwad, Pune',
    image: '/images/past-image1.jpg',
  },
  {
    date: '10–11 March, 2024',
    location: 'Pragati Maidan, Delhi',
    image: '/images/past-image1.jpg',
  },
  {
    date: '05–06 August, 2024',
    location: 'Bangalore Convention Centre',
    image: '/images/past-image1.jpg',
  },
];

const cities = [
  '01 Bangalore 2024',
  '02 Pune 2024',
  '03 Ahmedabad 2024',
  '04 Hyderabad 2025',
];

export default function PastExhibitions() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 16 },
      },
      '(min-width: 768px)': {
        slides: { perView: 4, spacing: 12 },
      },
    },
    slides: { perView: 1, spacing: 10 },
    slideChanged: (slider) => {
      setCurrentSlide(Math.floor(slider.track.details.rel));
    },
  });

  return (
    <section className=" py-4 lg:py-12 container mx-auto mt-[80px]">
      {/* Top Row */}
      <div className="flex flex-col lg:flex-row justify-between gap-8 mb-8">
        {/* Left Column */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-2">Our Past Exhibitions</h2>
          <p className="text-sm sm:text-base text-gray-700">
            PharmmaEx organizes exhibitions and trade shows that highlight
            industry innovations, breakthroughs, and trends. These events foster
            collaboration, learning, and growth, offering a unique platform for
            professionals, businesses, and organizations to succeed in the
            pharmaceutical industry.
          </p>
        </div>

        {/* Right Column - Timeline */}
        <div className="lg:w-1/2 flex flex-wrap gap-3 items-center justify-center lg:justify-end">
          {cities.map((city, idx) => (
            <div
              key={idx}
              className="bg-green-700 text-white text-sm rounded-full flex items-center justify-center h-[120px] w-[120px] sm:h-[140px] sm:w-[140px] text-center px-2"
            >
              <div className="text-center font-medium leading-tight break-words">
                {city.split(' ').map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Slider */}
      <div className="keen-slider" ref={sliderRef}>
        {events.map((event, idx) => (
          <div
            key={idx}
            className="keen-slider__slide rounded-2xl overflow-hidden relative"
          >
            <img
              src={event.image}
              alt={event.location}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 p-4 text-white flex flex-col justify-between">
              <div>
                <p className="font-medium">{event.date}</p>
                <p className="text-lg font-semibold">{event.location}</p>
              </div>
              <button className="bg-white/20 hover:bg-white/30 transition px-4 py-2 text-sm rounded-2xl w-[150px]">
                📷 View Gallery
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: events.length }).map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition ${
              currentSlide === idx ? 'bg-green-600' : 'bg-gray-300'
            }`}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
          ></button>
        ))}
      </div>
    </section>
  );
}
