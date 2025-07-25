import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import Footer from "../components/Footer";
import ImageCard from "@/components/ImageCard";

import { itinerariesCard } from "../data";

const Index = () => {
  // Set document head metadata on mount
  useEffect(() => {
    document.title = "TourCraft – React Travel Agency & Tourism Website BookTemplate";

    // Description meta tag: create or update
    let descriptionTag = document.querySelector("meta[name='description']");
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute(
      "content",
      ""
    );

    // Canonical link tag: create or update
    let canonicalTag = document.querySelector("link[rel='canonical']");
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", "https://tourcraft.com/");
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Site navigation */}
      <Navigation />

      {/* Hero/banner section */}
      <Hero />

      {/* Welcome introduction */}
      <Welcome />

      {/* Curated tours section */}
      <section className="relative py-[120px] bg-white bg-cover bg-no-repeat bg-center">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#c9cebd] rounded-full px-4 py-2 mx-auto">
              <h3 className="font-AlbertSans font-semibold text-PrimaryColor-0 flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-[#4a5c23] rounded-full"></span>
                The Curated
              </h3>
            </div>
            <h2 className="font-AlbertSans text-4xl md:text-4xl font-bold text-HeadingColor-0 mt-3">
              Explore Nature with Expert-Planned Adventures Tour
            </h2>
          </div>

          {/* Display itinerary cards */}
          <ImageCard arr={itinerariesCard} />
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
