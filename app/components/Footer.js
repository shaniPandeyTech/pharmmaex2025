import Image from "next/image";
import Link from "next/link";

// import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-4 border-t border-gray-800 relative">
      <div className="container mx-auto">
      <div className=" mx-auto grid md:grid-cols-4 gap-8">

        {/* Logo & About */}
        <div>
          <Image src="/images/footer-logo.png" alt="PharmmaEx Logo" width={327} height={54} />
          <h3 className="text-lg font-bold mt-4 text-green-500">About Us</h3>
          <p className="mt-2 text-sm text-gray-300">
            PharmmaEx is India’s leading pharmaceutical exhibition focused exclusively on Third-Party Manufacturing and PCD Franchise Business.
          </p>
          <div className="flex space-x-4 mt-4">
            {/* <a href="#" className="text-xl"><FaFacebookF /></a> */}
            <a href="#" className="text-xl text-pink-500"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            {/* <a href="#" className="text-xl text-white"><FaTwitter /></a> */}
            {/* <a href="#" className="text-xl text-blue-400"><FaLinkedin /></a> */}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-green-500">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            <li><Link href="/exhibitor-registration">Exhibitor Form</Link></li>
            <li><Link href="/visitor-registration">Visitor Registration</Link></li>
            <li><Link href="/gallery">Photo Gallery</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/past-exhibitions">Past Events</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
          </ul>
        </div>

        {/* Helpful Links */}
        <div>
          <h3 className="text-lg font-bold text-green-500">Helpful Links</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            <li><Link href="#">Sitemap</Link></li>
            <li><Link href="#">Terms & Condition</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-green-500">Contact Us</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            <li className="flex items-start">
              <i className="fas fa-map-marker-alt mr-2 mt-1 text-green-500"></i>
              Bhardwaj Complex, Near Mobile Tower, Behind HDFC Bank,<br />
              Krishna Nagar, Bulandshahr (U.P.) - 203001
            </li>
            <li className="flex items-center">
              <i className="fas fa-envelope mr-2 text-green-500"></i>
              contact@pharmmaex.com
            </li>
            <li className="flex items-center">
              <i className="fas fa-phone-alt mr-2 text-green-500"></i>
              +91-92580 02828, +91-70173 36797
            </li>
          </ul>
        </div>
      </div>
     
   

      {/* Bottom Line */}
      <div className="border-t border-gray-800 mt-10 pt-4 flex justify-between text-sm text-gray-500">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Image src="/images/brand-logo.png" alt="Devasya Media" width={80} height={20} />
        </div>
        <p>Copyright © 2025 PharmmaEx. All rights reserved.</p>
      </div>
      </div>
    </footer>
  );
}
