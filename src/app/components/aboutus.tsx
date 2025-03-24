import Image from "next/image";


export default function AboutUs() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
           style={{ backgroundImage: `url("/sky.jpg")` }}
    >
     
       <div className="flex flex-col md:flex-row items-center justify-between min-h-screen p-8 ">
      {/* Left Section */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <Image
          src="/image2.png"
          alt="Tech Illustration"
          className="w-full max-w-3xl" // Adjust size as needed
          width={200}
          height={200}
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-7xl font-bold text-pink-600"> About Us </h1>
        <h2 className="text-3xl font-bold text-gray-700">Empowering Souls Through Spiritual Enlightenment</h2>
        <p className="text-lg text-gray-600">
        At Celestials Healing, we are dedicated to guiding individuals on their journey of self-discovery and spiritual growth. 
            Our mission is to provide holistic learning experiences through expert-led Reiki certification courses, astrology & palmistry 
            consultations, tarot card readings, and sacred rituals. Explore our curated e-shop for spiritual tools that align with your inner energy.
        </p>
        <div className="space-x-4">
        <button className="px-6 py-3 bg-[#d9198e] text-white rounded-lg shadow-md hover:bg-[#d9198e]">

            Get Started
          </button>
          <button className="px-6 py-3 border border-[#d9198e] text-[#d9198e] rounded-lg shadow-md hover:bg-[#d9198e] hover:text-white">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Section - Image */}
     
    </div>
    </div>
  );
}
