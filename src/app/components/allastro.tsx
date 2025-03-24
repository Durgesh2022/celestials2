"use client"
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const products = [
  {
    
        name: "Pandit Raghunath Sharma",
        description:
          "With over 25 years of experience, Pandit Raghunath Sharma is a renowned Vedic astrologer specializing in marriage compatibility, career guidance, and planetary remedies.",
        price: "Consultation Fee: $49.99",
        rating: 4.9,
        ratingsCount: 320,
        reviewsCount: 1500,
        imageSrc: "/c1.png",
      },
      {
        name: "Dr. Meera Joshi",
        description:
          "A highly respected palmist and astrologer, Dr. Meera Joshi has helped thousands of individuals uncover their true potential through palm reading and horoscope analysis.",
        price: "Consultation Fee: $39.99",
        rating: 4.8,
        ratingsCount: 280,
        reviewsCount: 1200,
        imageSrc: "/c2.png",
      },
      {
        name: "Acharya Vivek Anand",
        description:
          "An expert in numerology and tarot reading, Acharya Vivek Anand provides deep insights into your past, present, and future to help you navigate life's challenges.",
        price: "Consultation Fee: $45.99",
        rating: 4.7,
        ratingsCount: 250,
        reviewsCount: 1100,
        imageSrc: "/c3.png",
      },
      {
        name: "Guru Devendra Tiwari",
        description:
          "Guru Devendra Tiwari specializes in spiritual healing, planetary alignments, and Vedic rituals to bring prosperity and peace into your life.",
        price: "Consultation Fee: $55.99",
        rating: 4.9,
        ratingsCount: 340,
        reviewsCount: 1800,
        imageSrc: "/image.png",
      },
    
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <div
   
  >
    
    <div className="flex flex-col w-full min-h-[800px]  flex justify-center items-center p-8 md:p-10">
    <h1 className="text-5xl font-bold mb-4 text-pink-600 text-center">Meet our top Astrologers</h1>
      
      <p className="mb-12 text-lg text-gray-700 text-center">
      A wide range of astrological services are provided to help you understand yourself better and make better life decisions.

      </p>
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-4/5 relative min-h-[500px]">
          <div className="relative w-full h-full flex justify-center items-center">
            {products.map((product, i) => {
              const indexDiff = (i - activeIndex + products.length) % products.length;

              return (
                <img
                  key={i}
                  src={product.imageSrc}
                  alt={product.name}
                  className={`absolute transition-all duration-500 ease-in-out rounded-lg shadow-lg
                    ${indexDiff === 0 ? "w-[350px] h-[350px] left-[65%] z-30 left-1/2 transform -translate-x-1/2" : ""}
                    ${indexDiff === 1 ? "w-[300px] h-[300px] left-[33%] z-20 brightness-75" : ""}
                    ${indexDiff === 2 ? "w-[250px] h-[250px] left-[23%] z-10 brightness-50" : ""}
                    ${indexDiff === 3 ? "w-[200px] h-[200px] left-[13%] z-0 brightness-30" : ""}
                   ${indexDiff > 3 ? "hidden" : ""}
                  `}
                />
              );
            })}
          </div>
        </div>

        <div className="w-full md:w-2/5 p-4 md:p-0 md:pr-8 text-left flex flex-col justify-center">
          <h2 className="text-4xl text-pink-600 font-bold mb-2">{products[activeIndex].name}</h2>
          <p className="text-black mb-4">{products[activeIndex].description}</p>

        

          <p className="text-2xl text-black font-bold mb-4">{products[activeIndex].price}</p>

          <div className="flex items-center space-x-2">
            <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
              {products[activeIndex].rating} ★
            </span>
            <span className="text-gray-600 text-sm">
              {products[activeIndex].ratingsCount} ratings · {products[activeIndex].reviewsCount} reviews
            </span>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center py-4 relative left-[-60px]">
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="p-4 bg-pink-600 rounded-full shadow-md text-white hover:bg-pink-800 transition"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="p-4 bg-pink-600 rounded-full shadow-md text-white hover:bg-pink-800 transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Carousel;
