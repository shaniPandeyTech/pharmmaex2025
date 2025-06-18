"use client";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [openMenu, setOpenMenu] = useState("");

  const toggleMenu = () => {
    setOpenMenu(openMenu === menu ? "" : menu);
  };

  return (
    <header className="w-full border-b border-gray-200 text-sm">
      <div className="container mx-auto max-w-[1440px]">
        {/* Top Contact Bar */}
        <div className="flex justify-between items-center px-4 md:px-12 py-2 text-gray-700 text-xs bg-white border-b border-gray-100">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <span>+91-92580 02828, +91-70173 36797</span>
            </div>
            <div className="hidden sm:flex items-center gap-1">
              <span>contact@pharmmaex.com</span>
            </div>
          </div>
          <div className="text-right text-green-700 font-medium">
            Organized by:{" "}
            <span className="font-semibold">Devasya Media Pvt. Ltd.</span>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between px-4 md:px-12 py-4 bg-white relative">
          {/* Logo and Date */}
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <Image
              src="/images/logo.png"
              alt="PharmaEx Logo"
              width={260}
              height={54}
            />
            <div className="text-xs md:text-sm text-gray-800 leading-tight">
              <p>02–03 October, 2025</p>
              <p>
                Bombay Exhibition Centre,
                <br />
                Mumbai
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-6 items-center justify-center text-sm font-medium text-gray-700 relative z-50">
            <a href="#" className="text-green-700 font-semibold">
              Home
            </a>

            {/* About Us Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleMenu("about")}
                className="hover:text-green-700"
              >
                About Us
              </button>
              {openMenu === "about" && (
                <div className="absolute bg-white shadow-md border mt-2 py-2 w-48 z-50">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Who We Are
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Our Team
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Press Release
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Privacy Policy
                  </a>
                </div>
              )}
            </div>

            {/* Events Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleMenu("events")}
                className="hover:text-green-700"
              >
                Events
              </button>
              {openMenu === "events" && (
                <div className="absolute bg-white shadow-md border mt-2 py-2 w-48 z-50">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Upcoming Events
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Past Exhibitors
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Sponsors & Associations
                  </a>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleMenu("resources")}
                className="hover:text-green-700"
              >
                Resources
              </button>
              {openMenu === "resources" && (
                <div className="absolute bg-white shadow-md border mt-2 py-2 w-48 z-50">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Download
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Review
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Testimonial
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Gallery
                  </a>
                </div>
              )}
            </div>

            <a href="#" className="hover:text-green-700">
              Contact Us
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm transition">
              Pre-Registration
            </button>
            <button className="border border-green-600 text-green-700 px-5 py-2 rounded-full text-sm hover:bg-green-50 transition">
              Become Exhibitor
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
