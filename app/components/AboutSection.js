// File: components/AboutPharmaEx.tsx

import Image from 'next/image';
import styles from './styles/about.module.scss';

export default function AboutPharmaEx() {
  return (
    <section className={`lg:px-4 p-4 lg:p-16 bg-white ${styles.aboutSection}`}>
      {/* Top Heading Section */}
      <div className="container mx-auto">
      <div className={`text-center max-w-3xl mx-auto mb-16 ${styles.joinSection}`}>
        <h2>Join This Pharma Exhibition to Network With Leading Industry Professionals.</h2>
        <p>
          Connect with top pharma manufacturers, suppliers, and innovators at this exclusive exhibition. Explore the latest trends, expand your business network, and discover new growth opportunities. Whether you're in PCD, third-party manufacturing, or bulk supply, this event is your gateway to meaningful collaborations and success in the pharmaceutical industry.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-green-600 text-white px-6 py-2 rounded-full font-medium">Pre-Registration</button>
          <button className="border border-gray-800 px-6 py-2 rounded-full font-medium text-black">
            Become Exhibitor
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className={`md:grid md:grid-cols-2 md:gap-10 items-center ${styles.aboutSection}`}>
        {/* Text */}
        <div>
          <h2>About PharmaEx</h2>
          <p className="text-gray-700 mb-6">
            PharmaEx is India’s leading pharmaceutical exhibition focused exclusively on Third-Party Manufacturing and
            PCD Franchise Business. We bring together manufacturers, distributors, wholesalers, and industry
            professionals from across the country under one roof to explore new partnerships, expand networks, and grow
            their pharma businesses.
          </p>

          <ul className="space-y-4 mb-6">
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1 mr-3">
               <span className="bg-green-600 text-white  flex p-3 items-center justify-center rounded-full">
               <Image src="/images/about-icon.svg" width={24} height={24} />
                </span>
              </div>
              <p className="text-gray-700">
                <strong>Global Networking Opportunities:</strong> Connect with top industry stakeholders, researchers,
                and decision-makers from across the globe.
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1 mr-3">
                <span className="bg-green-600 text-white  p-3 flex items-center justify-center rounded-full">
                <Image src="/images/about-icon1.svg" width={24} height={24} />
                </span>
              </div>
              <p className="text-gray-700">
                <strong>Showcase Innovations:</strong> Explore the latest advancements in pharmaceutical technologies,
                formulations, and manufacturing processes.
              </p>
            </li>
          </ul>

          <button className="border border-gray-800 text-black px-5 py-2 rounded-full hover:bg-gray-100">Read More</button>
        </div>

        {/* Images */}
        <div className="mt-10 md:mt-0 grid grid-cols-2 gap-4">
          <Image
            src="/images/hyderabad.png"
            alt="Hyderabad group"
            className="rounded-xl col-span-2"
            width={600}
            height={400}
          />
          <Image
            src="/images/about2.png"
            alt="People at booth"
            className="rounded-xl"
            width={300}
            height={200}
          />
          <Image
            src="/images/about2.png"
            alt="Visitors"
            className="rounded-xl"
            width={300}
            height={200}
          />
        </div>
      </div>

      </div>
    </section>
  );
}
