"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FeaturedCoursesPage() {
  const courses = [
    {
      id: 1,
      title: "Astrology for Beginners",
      price: 299,
      image: "/c1.png",
      alt: "Vintage astrology chart with sun, planets, and zodiac symbols",
    },
    {
      id: 2,
      title: "Meditation 101",
      price: 99,
      image: "/c2.png",
      alt: "Woman in white clothes meditating in lotus position",
    },
    {
      id: 3,
      title: "Yoga at Home",
      price: 199,
      image: "/c3.png",
      alt: "Group yoga class in a bright studio with large windows",
    },
    {
      id: 4,
      title: "Advanced Yoga",
      price: 249,
      image: "/c3.png",
      alt: "Yoga master performing an advanced pose outdoors",
    },
    {
        id: 5,
        title: "Advanced Yoga",
        price: 249,
        image: "/c3.png",
        alt: "Yoga master performing an advanced pose outdoors",
      },
  ];

  return (
    <div >
    <div className="py-12 relative bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold mb-8 text-pink-600">Featured Courses</h1>

        {/* Swiper with Navigation */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".arrow-right",
            prevEl: ".arrow-left",
          }}
          modules={[Navigation, Pagination]}
          className="w-full relative"
        >
          {courses.map((course) => (
           <SwiperSlide key={course.id}>
           <div className="flex flex-col items-center">
             <div className="relative w-90 h-90 overflow-hidden mb-4 group">
               <Image
                 src={course.image}
                 alt={course.alt}
                 layout="fill"
                 objectFit="cover"
                 className="transition duration-300 ease-in-out"
               />
               {/* Hover overlay */}
               <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-60 transition duration-300">
                 <h2 className="text-xl font-bold text-white mb-2">{course.title}</h2>
                 <button className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700">
                   Explore
                 </button>
               </div>
             </div>
           </div>
         </SwiperSlide>
         
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="arrow-left absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-pink-600 shadow-md rounded-full">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button className="arrow-right absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-pink-600 shadow-md rounded-full">
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
    </div>
  );
}
