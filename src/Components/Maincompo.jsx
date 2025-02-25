import React from 'react';
import hero from '../assets/hero.svg';

const Maincompo = () => {
  return (
    <div className="relative flex items-center justify-center    ">
      {/* Background Blue Shape */}
      <div className="absolute right-0 top-1/2 translate-y-[-50%] w-2/3 h-1/2  bg-blue-600 rounded-tl-[100px] rounded-bl-[100px]"></div>

      {/* Relative Parent for Image */}
      <div className="relative w-[500px] h-[300px]">
        {/* Image inside its relative parent */}
        <img
          src={hero}
          alt="UI Mockup"
          className="absolute bottom-15 right-8 w-full h-auto z-10   rounded-xl"
        />
      </div>
    </div>
  );
};

export default Maincompo;
