// src/components/Navigation.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import { itineraryData } from "../../src/data";
import Logo from "../assets/images/waq.png";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMainOpen, setIsMainOpen] = useState(false);
  const [openCountries, setOpenCountries] = useState({});

  const toggleCountry = (country) => {
    setOpenCountries((prev) => ({
      ...prev,
      [country]: !prev[country],
    }));
  };
  const ArrowIcon = ({ isOpen, className = "" }) => (
    <svg
      className={`w-4 h-4 transition-transform duration-200 ${
        isOpen ? "rotate-180" : ""
      } ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm overflow-h">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[80px]">
          <Link to="/" className="text-2xl font-bold text-[#F9C80E]">
            <img
              src={Logo}
              alt="Logo | TourCraft Limited"
              className="p-2"
              width={100}
              height={150}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="#">About Us</NavLink>
            {/* Itineraries Button */}
            <NavLink to="#">Gallery</NavLink>
            <NavLink to="#">Contact Us</NavLink>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#F9C80E]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white z-50 shadow-md transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col justify-between`}
      >
        <div>
          <div className="flex items-center justify-between p-4">
            <Link to="/" className="text-xl font-bold text-[#F9C80E] ">
              <img src={Logo} alt="Logo | TourCraft Limited" className="p-5" />
            </Link>
            <button onClick={() => setMenuOpen(false)} aria-label="Close Menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-700 bg-[#e9ebea] rounded-full p-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col space-y-4 p-4">
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="#" onClick={() => setMenuOpen(false)}>
              Gallery
            </NavLink>
            <NavLink to="#" onClick={() => setMenuOpen(false)}>
              Contact Us
            </NavLink>
          </div>
        </div>

        {/* Bottom Contact Section */}
        <div className="p-4">
          <div>
            <ul className="space-y-4 text-[#F9C80E]">
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0" />
                <span>info@tourcraft.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.facebook.com/"
              className="text-[#F9C80E] hover:text-gray-700 transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="/https://www.instagram.com/"
              className="text-[#F9C80E] hover:text-gray-700 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="/#"
              className="text-[#F9C80E] hover:text-gray-700 transition-colors"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-[#F9C80E] font-medium hover:text-[#E0A800] transition-colors duration-200"
  >
    {children}
  </Link>
);

export default Navigation;
