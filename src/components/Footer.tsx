// src/components/Footer.tsx
import { Phone, Mail } from "lucide-react";
import LogoLight from "../assets/images/waq.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#F9C80E]/90 text-black relative overflow-hidden">
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          {/* Logo */}
          <div>
            <img
              src={LogoLight}
              alt="Logo | TourCraft"
              className="p-1 rounded-lg mb-4"
              width={150}
              height={150}
            />
          </div>

          {/* Tezkor havolalar */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Tezkor havolalar</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Bosh sahifa
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Biz haqimizda
                </Link>
              </li>
            </ul>
          </div>

          {/* Mashhur sayohatlar */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Mashhur sayohatlar</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  3 kunlik sayohat
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  4 kunlik sayohat
                </a>
              </li>
            </ul>
          </div>

          {/* Aloqa ma'lumotlari */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Aloqa maʼlumotlari</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0" />
                <a href="tel:+998901234567" className="hover:underline">
                  +998 90 123 45 67
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@tourcraft.uz" className="hover:underline">
                  info@tourcraft.uz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Quyidagi qism */}
        <div className="border-t border-black/20 mt-2 pt-2 flex flex-wrap justify-between items-center text-sm text-gray-700">
          <p>
            &copy; {new Date().getFullYear()} TourCraft. Barcha huquqlar
            himoyalangan.
          </p>
          <Link to="#" className="hover:text-white transition-colors">
            Maxfiylik siyosati
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
