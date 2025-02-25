import React from "react";
import opera from "../assets/opera.svg";
const Card = ({title  }) => {
  return (
      <>
       <div className="border-2 border-gray-200 rounded-lg p-5 w-70 h-80 flex flex-col items-center justify-center">
        <img src={opera } alt="" className="w-20 h-20"/>
        <h1>Add to {title}</h1>
        <h3 className="text-gray-200">Minimum version 62</h3>
        <button className="bg-blue-800 rounded text-white font-bold py-2 px-4  "> Add to extension</button>
       </div>
      </>
  );
}

const Download = () => {
    return (
      <section id="download" className=" h-screen flex   flex-col items-center justify-center ">
        <div className="text-center">
          <h2 className="text-3xl font-bold  text-gray-800">Download the extension</h2>
          <p className="text-gray-600 max-w-lg mt-4">
          We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize. 
          </p>
        </div>
         <div className="flex space-x-8 mt-8">
          <Card title={"chrome" }/>
          <Card title={"firefox" }/>
          <Card title={"Opera" }/>

         </div>

   </section>
    );
  };
  
  export default Download;
  