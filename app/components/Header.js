"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"; // <-- install framer-motion
import Link from "next/link"; // Add this at the top with your imports

import styles from './styles/header.module.scss';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(""); // ✅ Now declared properly

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setOpenSubmenu(""); // also reset submenu when closing mobile menu
  };
  return (
    <header className={`w-full border-b border-gray-200 text-sm ${styles.header}`}>
      <div className={`hidden md:block flex flex-col sm:flex-row ${styles.topBar}`}>
        <div className={`mx-auto max-w-[1440px] ${styles.topBarContent}`}>
          <div className={styles.topBarLeft}>
            <span className={styles.callUs}>+91-92580 02828, +91-70173 36797</span>
            <span className={`hidden sm:inline-block ${styles.mailUs}`}>contact@pharmmaex.com</span>
          </div>
          <div className={styles.topBarRight}>
            Organized by: <span>Devasya Media Pvt. Ltd.</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px]">
        <div className={styles.navBar}>
          <div className="flex  gap-3">
            <div className="flex items-center gap-3">
              {/* Hamburger Icon */}
              <button
                className="md:hidden text-2xl text-gray-700"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
              >
                ☰
              </button>

              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/images/pharmmaexLogo.svg"
                  alt="PharmaEx Logo"
                  width={327}
                  height={54}
                />
              </Link>
            </div>


            <div className="hidden md:block text-gray-800 leading-tight">
              <p>02–03 October, 2025</p>
              <p>
                Bombay Exhibition Centre,<br />Mumbai
              </p>
            </div>
          </div>


          {/* Desktop Nav */}
          <nav className="hidden md:flex md:items-center gap-6 text-sm font-medium text-gray-700">
            <a href="#" className="text-green-700 font-semibold">Home</a>
            {["About Us", "Events", "Resources"].map((menu) => (
              <div className="relative group" key={menu}>
                <button className="hover:text-green-700">{menu}</button>
                <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-200 ease-in-out z-50">
                  <a href="#" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700">Our Team</a>
                  <a href="#" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700">Mission</a>
                  <a href="#" className="block px-4 py-2 hover:bg-green-50 hover:text-green-700">History</a>
                </div>
              </div>
            ))}
            <a href="/contact-us" className="hover:text-green-700">Contact Us</a>
          </nav>

          {/* CTA Buttons - Desktop only */}
          <div className="hidden md:flex items-center gap-3">
            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm transition">
              Pre-Registration
            </button>
            <button className="border border-green-600 text-green-700 px-5 py-2 rounded-full text-sm hover:bg-green-50 transition">
              Become Exhibitor
            </button>
          </div>
        </div>

        {/* Animated Mobile Nav */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden px-4 py-4 bg-white border-t border-gray-200 flex flex-col gap-4 text-sm text-gray-700"
            >
              <a onClick={closeMenu} href="#" className="text-green-700 font-semibold">Home</a>
              {/* About Us Accordion */}
              <div>
                <button
                  onClick={() => setOpenSubmenu((prev) => (prev === "about" ? "" : "about"))}
                  className="w-full text-left flex justify-between items-center py-2"
                >
                  <span>About Us</span>
                  <span>{openSubmenu === "about" ? "▲" : "▼"}</span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openSubmenu === "about" ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="pl-4 flex flex-col gap-2 py-2">
                    <a onClick={closeMenu} href="#">Our Team</a>
                    <a onClick={closeMenu} href="#">Mission</a>
                    <a onClick={closeMenu} href="#">History</a>
                  </div>
                </div>
              </div>

              <a onClick={closeMenu} href="#">Events</a>
              <a onClick={closeMenu} href="#">Resources</a>
              <a onClick={closeMenu} href="/contact-us">Contact Us</a>

              <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm transition">
                Pre-Registration
              </button>
              <button className="border border-green-600 text-green-700 px-5 py-2 rounded-full text-sm hover:bg-green-50 transition">
                Become Exhibitor
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
