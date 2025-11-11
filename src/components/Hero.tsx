// src/components/Hero.tsx
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Slide1 from "../assets/images/registon.jpg";
import Slide2 from "../assets/images/registon2.jpg";
import Slide3 from "../assets/images/registon3.jpg";

const slides = [
  {
    image: Slide1,
    title: "Registon: Tarix va Buyuklik Uchragan Maskan",
    description:
      "Unutilmas sarguzashtlarga chiqing — keng sahrolarda hayajonli sayohatlardan tortib, siz uchun maxsus yaratilgan sokin tabiat bag‘ridagi dam olish joylarigacha.",
  },
  {
    image: Slide2,
    title: "Go‘ri Amir: Safarning Yuragi",
    description:
      "Tabiat mo‘jizalariga yaqinlashtiradigan, butun umr yodingizda qoladigan sarguzashtlarni kashf eting.",
  },
  {
    image: Slide3,
    title: "Siyob bozori: Tarix va Ulug‘vorlik Uchragan Joy",
    description:
      "1950-yillarda bu hududlarning barchasi bekor qilingan. 1976-yilda esa Bog‘ishamol barpo etilgan.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setImageLoaded(false); // Reset loading state for next slide
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Show next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setImageLoaded(false);
  };

  // Show previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setImageLoaded(false);
  };

  // When image loads, set loaded state to true
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          aria-hidden={currentSlide !== index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0 "
          }`}
        >
          {/* Background Image with loading skeleton */}
          <div
            className={`absolute inset-0 bg-cover bg-center ${
              imageLoaded ? "" : "bg-gray-300"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Hidden img to trigger onLoad */}
            <img
              src={slide.image}
              alt={slide.title}
              onLoad={handleImageLoad}
              className="hidden"
              loading="lazy"
            />
            {/* Overlay for darkening the image */}
            <div className="absolute inset-0 bg-black/40 z-10" />
          </div>

          {/* Slide content */}
          <div className="relative h-full flex items-center justify-center text-center text-white p-4 z-20">
            <div className="max-w-4xl animate-fadeIn">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                {slide.description}
              </p>
              <Link to="#">
                <Button className="bg-[#F9C80E] text-black hover:bg-[#bdb715] hover:text-white z-30">
                  Ko'proq o'rganish
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors z-30"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors z-30"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>
    </div>
  );
};

export default Hero;
