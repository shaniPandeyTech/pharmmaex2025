import React from "react";
import MarqueeBanner from "../components/MarqueeBanner";

const ContactSection = () => {
  return (
    <>
    <section className="bg-white pb-16 px-6 md:px-20">
      <div className="container mx-auto">
      {/* Contact Info & Form */}
      <div className=" flex gap-x-12 items-center mb-[100px]">
        {/* Left Info Box */}
        <div className="bg-green-700  max-w-full lg:max-w-2xl   text-white p-8 pt-20 pb-20 rounded-lg space-y-6  -mt-12">
          <h2 className="text-4xl font-bold">Devasya Media Pvt. Ltd.</h2>
          <div className="text-2xl fle gap-2">
          <span className="inline-block mr-2"><icon src="/images/icon/location.svg" width={40} height={40}  /></span>
           <span> Bhardwaj Complex, Near Mobile Tower, Behind HDFC Bank, Krishna Nagar, Bulandshahr (U.P.)-203001</span>
          </div>
          <div className="text-2xl fle gap-2 my-12">
          <span className="inline-block mr-2"><icon src="/images/icon/message.svg"  width={40} height={40}/></span>
           <span> contact@pharmmaex.com </span>
          </div>
          <div className="text-2xl fle gap-2">
            <span className="inline-block mr-2"><icon src="/images/icon/phone.svg"  width={40} height={40}/></span>
           <span> (207) 555-0119, +91-701 733 6797 </span>
          </div>
          <hr className="border-white/50 mt-12 mb-12"  />
          <div>
            <h3 className="text-4xl font-semibold mb-8">Exhibition Venue–Mumbai</h3>
            <p className="text-2xl mb-6">Bombay Exhibition Centre (NESCO), Mumbai</p>
            <p className="text-2xl">02–03 October, 2025</p>
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
            <div className="">
           <img src="/images/captcha.png" width={272} height={72}  />
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
        <h2 className="text-5xl font-bold text-center mb-8">Exhibition Queries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Shivam */}
          <div className="flex items-center gap-4 border-1 border-green-400 p-4 rounded-lg">
            <img
              src="/images/shivam.png"
              alt="Shivam Sharma"
              width={209}
              height={209}
              
              className="w-[209px] h-[209px]  object-cover"
            />
            <div>
              <h3 className="font-bold text-3xl">Shivam Sharma</h3>
              <p className="text-sm text-gray-600 mb-5">Managing Director – PharmaEx</p>
              <p className="text-xl text-gray-700 mt-1">
                M. +91-9258002828, +91-701 733 6797 <br />
                E. shivam.sharma@pharmmaex.com
              </p>
            </div>
          </div>

          {/* Vivek */}
          <div className="flex items-center gap-4 border-1 border-green-400 p-4 rounded-3xl">
            <img
              src="/images/vivek.png"
              width={209}
              height={209}
              alt="Vivek Agarwal"
              className="w-[209px] h-[209px]  object-cover"
            />
            <div>
              <h3 className="font-bold text-3xl">Vivek Agarwal</h3>
              <p className="text-sm text-gray-600 mb-5">Operation Manager – PharmaEx</p>
              <p className="text-xl text-gray-700 mt-1">
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
