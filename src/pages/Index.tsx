// src/pages/Index.tsx
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
    document.title =
      "TourCraft – React Travel Agency & Tourism Website BookTemplate";

    // Description meta tag: create or update
    let descriptionTag = document.querySelector("meta[name='description']");
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute("content", "");

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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
