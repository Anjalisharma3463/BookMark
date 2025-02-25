import React from "react";
import Maincompo from "./Maincompo"; 
const Hero = () => {
  return (
    <section id="hero" className="h-screen flex items-center   justify-between    bg-white-100">
       <div className="font-bold  ml-15  ">
             <h1 className="text-4xl">A simple Bookmark </h1>
             <h1 className="text-4xl">Manager</h1>
             <p className="text-gray-400 text-2xl max-w-lg mt-4">
             A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.

             </p>
             <button className="bg-[#5469df] text-white p-3 mt-5 rounded ">Get It on Chrome</button>
             <button className="bg-[#505a67] ml-4 text-white p-3 mt-5 rounded ">Get It on Firefox</button>
       </div>

       <div className=" mt-15">
          <Maincompo />
       </div>
    </section>
  );
};

export default Hero;
