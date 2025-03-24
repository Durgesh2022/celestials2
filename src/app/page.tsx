
import Hero from "./components/head";
import Services from "./components/service";
import FeaturedCoursesPage from "./components/feature";
import AstroCarousel from "./components/allastro";
import AboutUs from "./components/aboutus";

export default function Home() {
  return (
    <div
     
    >
      <Hero />
       <Services />
      <AboutUs />
       <FeaturedCoursesPage /> 
       <div
      className="min-h-screen bg-cover bg-center"
           style={{ backgroundImage: `url("/sky.jpg")` }}
    >
       <AstroCarousel /> 
       </div>
    </div>
  );
}
