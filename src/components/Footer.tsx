// src/components/Footer.tsx
import { MapPin, Phone, Mail } from "lucide-react";
import LogoLight from "../assets/images/waq.png";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#F9C80E]/90 text-black relative overflow-hidden">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          {/* Logo & About */}
          <div>
            <img
              src={LogoLight}
              alt="Logo | TourCraft Limited"
              className="p-1 rounded-lg mb-4"
              width={150}
              height={150}
            />

            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/"
                aria-label="Facebook"
                className="text-black hover:text-[#E0A800] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="https://www.instagram.com/"
                aria-label="Instagram"
                className="text-black hover:text-[#E0A800] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://www.twitter.com/"
                aria-label="Twitter"
                className="text-black hover:text-[#E0A800] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={30} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Popular Tours</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  3 Days Tour
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  4 Days Tour
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  5 Days Tour
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:underline">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@tourcraft.com" className="hover:underline">
                  info@tourcraft.com
                </a>
              </li>
              <li className="text-white/90 flex mt-2 items-center">
                <FaWhatsapp className="w-7 h-7 text-white" />
                <a
                  href="https://wa.me/+919876543210"
                  className="ml-2 hover:underline"
                >
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/20 mt-12 pt-6 flex flex-wrap justify-between items-center text-sm text-gray-700">
          <p>
            &copy; {new Date().getFullYear()} TourCraft. All rights reserved.
          </p>
          <Link to="#" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
