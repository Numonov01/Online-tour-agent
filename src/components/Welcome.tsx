import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CloseCheetah from "../assets/images/cheetah-close.webp";

const Welcome = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left text content */}
        <div className="space-y-6">
          {/* Highlighted label */}
          <h3 className="inline-flex items-center gap-2 bg-[#c9cebd] rounded-full px-4 py-2">
            <span className="w-2 h-2 bg-[#4a5c23] rounded-full"></span>
            <span className="text-sm font-medium">Welcome to TourCraft</span>
          </h3>

          {/* Main heading */}
          <h2 className="text-4xl md:text-4xl font-bold">
            Where Nature and Adventure Begin Together
          </h2>

          {/* Paragraphs */}
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            odio illum magni vero, fugiat tenetur ipsam doloremque suscipit,
            harum voluptatibus sequi cum modi laboriosam architecto iusto unde
            accusamus libero ipsa quas quod. Voluptas error magnam, possimus
            dicta quaerat veniam, aliquam, necessitatibus ullam fugit quasi eum
            nostrum tenetur! Iure ex harum eius veniam, voluptatem rerum sint a
            quaerat, amet.
          </p>
          <p>
            <b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</b>
          </p>

          {/* Call to action button */}
          <Link to="#" aria-label="Learn more about TourCraft">
            <Button className="bg-[#4A5C23] hover:bg-[#85BC03] text-white mt-4">
              More About
            </Button>
          </Link>
        </div>

        {/* Right image content */}
        <div className="relative">
          <img
            src={CloseCheetah}
            alt="Close-up of a cheetah"
            className="w-full h-auto rounded-lg relative z-10 object-cover"
          />
          {/* Decorative background circle */}
          <div className="bg-[#95D103]/10 absolute -bottom-4 -right-4 w-32 h-32 rounded-full z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
