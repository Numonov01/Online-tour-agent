// src/components/ImageCard.tsx
import { Link } from "react-router-dom";

interface Item {
  id: number | string;
  img: string;
  title: string;
  url: string;
}

interface ImageCardProps {
  arr: Item[];
}

const ImageCard: React.FC<ImageCardProps> = ({ arr }) => {
  return (
    <div className="flex justify-center flex-wrap">
      {arr.map((item) => (
        <div
          key={item.id}
          className="w-full md:w-2/4 lg:w-1/4 pb-5 px-2 md:px-5"
        >
          <div className="bg-white shadow-md rounded">
            {/* Image */}
            <img
              src={item.img}
              alt={`${item.title} | TourCraft`}
              className="w-full h-auto object-cover rounded-t relative z-10"
              loading="lazy"
            />
            {/* Title with link */}
            <div className="flex flex-col items-center px-5 pt-2 pb-2 text-center">
              <Link
                to={item.url}
                className="flex items-center text-[#F9C80E] font-medium hover:text-[#E0A800] transition-colors duration-200 cursor-pointer"
              >
                <h3 className="text-[18px] font-semibold">{item.title}</h3>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageCard;
