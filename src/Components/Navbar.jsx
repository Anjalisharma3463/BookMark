import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="  top-0 w-full bg-white   z-50 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Bookmark</h1>
        <ul className="flex space-x-6">
          {["hero", "features", "download", "faq", "login"].map((section) => (
            <li key={section}>
              <button 
                onClick={() => scrollToSection(section)}
                className=  {` ${section==="login" ? " bg-[#fa7878]  text-white px-6 py-2 rounded" : "text-gray-700 hover:text-blue-600 transition"} `}
 
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
