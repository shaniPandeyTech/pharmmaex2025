import React from 'react';
import styles from './styles/marquee.module.scss';

import Marquee from 'react-fast-marquee';
const links = [
  {
    name: "PharmmaEx Coming to Mumbai",

  },
  {
    name: "PharmmaEx Coming to Mumbai",

  }, {
    name: "PharmmaEx Coming to Mumbai",

  }, {
    name: "PharmmaEx Coming to Mumbai",

  }, {
    name: "PharmmaEx Coming to Mumbai",

  }, {
    name: "PharmmaEx Coming to Mumbai",

  }, {
    name: "PharmmaEx Coming to Mumbai",

  }, {
    name: "PharmmaEx Coming to Mumbai",

  },
];

const MarqueeBanner = () => {
  const text = "PharmmaEx Coming to Mumbai";

  return (
    <div className="relative w-full bg-green-700 overflow-hidden h-12">
      {/* <div className="absolute whitespace-nowrap animate-marquee text-white font-medium text-base flex items-center gap-6">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="flex items-center gap-2">
            {text}
            <span className="text-lg">•</span>
          </span>
        ))}
      </div> */}



      <section className="relative w-full bg-green-700 overflow-hidden ">
        <div className="space-y-6">
          {[0, 1].map((rowIndex) => (
            <Marquee
              key={rowIndex}
              direction={rowIndex % 2 === 0 ? "left" : "right"}
              speed={30}
              gradient={false}
              pauseOnHover
            >
              {[...links, ...links].map((links, i) => (
                <div
                  key={`${rowIndex}-${i}`}
                  className="mx-4 w-auto max-w-xs "
                >
                  <div className={`flex items-center space-x-3 py-3 text-white ${styles.marqueeText}`}>
                   {links.name}
                  </div>
                </div>
              ))}
            </Marquee>
          ))}
        </div>
      </section>















    </div>
  );
};

export default MarqueeBanner;
