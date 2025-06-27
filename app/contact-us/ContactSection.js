import React from "react";
import MarqueeBanner from "../components/MarqueeBanner";

const ContactSection = () => {
  return (
    <>
    <section className="bg-white pb-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
      {/* Contact Info & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        {/* Left Info Box */}
        <div className="bg-green-700 text-white p-8 rounded-lg space-y-6">
          <h2 className="text-2xl font-bold">Devasya Media Pvt. Ltd.</h2>
          <p>
            <span className="inline-block mr-2">📍</span>
            Bhardwaj Complex, Near Mobile Tower, Behind HDFC Bank, Krishna Nagar, Bulandshahr (U.P.)-203001
          </p>
          <p>
            <span className="inline-block mr-2">📧</span>
            contact@pharmmaex.com
          </p>
          <p>
            <span className="inline-block mr-2">📞</span>
            (207) 555-0119, +91-701 733 6797
          </p>
          <hr className="border-white/50" />
          <div>
            <h3 className="text-lg font-semibold">Exhibition Venue–Mumbai</h3>
            <p>Bombay Exhibition Centre (NESCO), Mumbai</p>
            <p>02–03 October, 2025</p>
          </div>
          <div className="flex gap-4 mt-4">
            <button className="border border-white text-white px-4 py-2  hover:bg-white hover:text-green-700 transition">
              Pre-Registration
            </button>
            <button className="border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-green-700 transition">
              Become Exhibitor
            </button>
          </div>
        </div>

        {/* Right Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full name" className="inputStyle" />
              <input type="email" placeholder="Email Address" className="inputStyle" />
              <input type="text" placeholder="Phone" className="inputStyle" />
              <input type="text" placeholder="Company/Organization" className="inputStyle" />
              <input type="text" placeholder="Designation/Job Title" className="inputStyle" />
              <input type="text" placeholder="City" className="inputStyle" />
            </div>
            <textarea placeholder="Your message" className="input h-28 resize-none" />
            <div className="bg-gray-100 border p-4 rounded-md text-sm text-gray-600">
              ☐ I’m not a robot (Google reCAPTCHA placeholder)
            </div>
            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Contact Cards */}
      <div>
        <h2 className="text-2xl font-bold text-center mb-8">Exhibition Queries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Shivam */}
          <div className="flex items-center gap-4 border-1 border-green-400 p-4 rounded-lg">
            <img
              src="/images/shivam.png"
              alt="Shivam Sharma"
              width={209}
              height={209}
              className="w-20 h-20  object-cover"
            />
            <div>
              <h3 className="font-bold text-lg">Shivam Sharma</h3>
              <p className="text-sm text-gray-600">Managing Director – PharmaEx</p>
              <p className="text-sm text-gray-700 mt-1">
                M. +91-9258002828, +91-701 733 6797 <br />
                E. shivam.sharma@pharmmaex.com
              </p>
            </div>
          </div>

          {/* Vivek */}
          <div className="flex items-center gap-4 border-1 border-green-400 p-4 rounded-lg">
            <img
              src="/images/vivek.png"
              width={209}
              height={209}
              alt="Vivek Agarwal"
              className="w-20 h-20  object-cover"
            />
            <div>
              <h3 className="font-bold text-lg">Vivek Agarwal</h3>
              <p className="text-sm text-gray-600">Operation Manager – PharmaEx</p>
              <p className="text-sm text-gray-700 mt-1">
                M. +91-9258002828, +91-701 733 6797 <br />
                E. vivek.agarwal@pharmmaex.com
              </p>
            </div>
          </div>
        </div>
      </div>
</div>

    </section>

    <div className="">
<img
              src="/images/map.jpg"
              width={1920}
              height={720}
              alt="map"
              className="w-full h-auto  object-cover"
            />

</div>



    </>
  );
};

export default ContactSection;
