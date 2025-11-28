
import SearchBar from "./Navbar";
import ViewAllBtn from "./ViewAllBtn";
import sweaterImg from "/img/sueter one-place.jpg";

function Hero() {
  return (
    <div className="relative w-full min-h-screen flex flex-col bg-gray-50">
     
      <div className="absolute top-0 left-0 w-full z-20">
        <SearchBar />
      </div>

     
      <div className="w-full flex flex-col md:flex-row h-screen">
        
        <div
          className="w-full md:w-1/2 h-64 sm:h-80 md:h-full bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${sweaterImg})` }}
        ></div>

        
        <div className="w-full md:w-1/2 flex flex-col items-center md:items- justify-center sm:px-8 md:px-16 py-8 sm:py-12 text-center md:text-left bg-gray-100 transition-all duration-300">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-ligt text-black leading-tight">
            WINTER
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-8 sm:mb-10 tracking-wide">
            COLLECTION
          </h1>

          <ViewAllBtn />
        </div>
      </div>
    </div>
  );
}

export default Hero;