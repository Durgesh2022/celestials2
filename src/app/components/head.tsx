import Image from "next/image";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-orange-100"
           style={{ backgroundImage: `url("/sky.jpg")` }}
    >
     
       <div className="flex flex-col md:flex-row items-center justify-between min-h-screen p-8 ">
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-5xl font-bold text-gray-800">Welcome to <div className="text-7xl text-pink-600"> Celestials Healing </div></h1>
        <h2 className="text-3xl font-bold text-gray-700">Your Gateway to Spiritual Growth & Wellness</h2>
        <p className="text-lg text-gray-600">
        Celestials Healing is your one-stop destination for holistic learning, spiritual guidance, and transformative experiences. 
        Explore expert-led Reiki certification courses, astrology & palmistry consultations, tarot card reading sessions, puja & rituals services, 
        and a curated e-shop for spiritual products.
        </p>
        <div className="space-x-4">
        <button className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600">

            Get Started
          </button>
          <button className="px-6 py-3 border border-pink-500 text-pink-500 rounded-lg shadow-md hover:bg-[#d9198e] hover:text-white">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <Image
          src="/background (1).png"
          alt="Tech Illustration"
          className="w-full max-w-3xl" // Adjust size as needed
          width={200}
          height={200}
        />
      </div>
    </div>
    </div>
  );
}
