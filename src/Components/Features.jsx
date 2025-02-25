
import React from "react";
import search from "../assets/search.svg";
import bookmark from "../assets/simpleBokkmarking.svg";
import share from "../assets/easysharing.svg";
import   { useState } from "react";

const tabs = [
  { id: "bookmarking",label: "Simple Bookmarking", image:  bookmark , content: "Simple Bookmarking content..." },
  { id: "searching",label:"Speedy Searching" ,image:  search , content: "Speedy Searching content..." },
  { id: "sharing",label:"Easy Sharing" ,image:  share , content: "Easy Sharing content..." },
];


const Tabs = () => {
  const [activeTab, setActiveTab] = useState("sharing"); // Default tab

  return (
    <div className="  max-w-4xl  mx-auto">
      {/* Navigation Tabs */}
      <div className="flex space-x-8 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`pb-2 px-3 text-gray-600 font-medium ${
              activeTab === tab.id ? "border-b-2 border-red-500 text-black" : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
             {tab.label }
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="  mt-6 p-4">
        {tabs.map((tab) => (
          <div key={tab.id} className={activeTab === tab.id ? "block flex justify-between" : "hidden"}>
            {/* <h2 className="text-2xl font-bold"> {tab.image} </h2> */}
            <img  src={tab.image}  className="w-120 h-90" alt="" />
            <p className="text-gray-600 mt-2">{tab.content}</p>
          </div>
        ))}
      </div>
    </div>
  );

};
 
const Features = () => {
    return (
       <section  id="features" className=" h-screen flex flex-col h-screen -mt-45   items-center ">
        <h2  className="text-3xl font-semibold text-gray-800">Features</h2>
        <p className="text-gray-600 max-w-lg text-center mt-4">
        Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your  devices so you can access them on the go.
        </p>
     

         <Tabs/>
        
      </section>
    );
  };
  
  export default Features;
  