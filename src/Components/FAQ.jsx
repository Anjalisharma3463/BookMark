
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // Install react-icons if needed

const faqs = [
  { question: "What is Bookmark?", answer: "Bookmark is a tool to save web pages for later." },
  { question: "How can I request a new browser?", answer: "You can request a new browser via settings." },
  { question: "Is there a mobile app?", answer: "Yes, we have mobile apps for iOS and Android." },
  { question: "What about other Chromium browsers?", answer: "Our extension supports all Chromium-based browsers." }
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b py-3">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between w-full text-left text-gray-700 font-semibold text-lg"
          >
            {faq.question}
            <FaChevronDown className={`transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`} />
          </button>
          {activeIndex === index && (
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}


const FAQ = () => {
  return (
    <section id="faq" className="h-screen flex flex-col items-center bg-white">
      <h2 className="text-3xl font-semibold text-gray-800">Frequently Asked Questions</h2>
      <p className="text-gray-600 max-w-lg text-center mt-4">
        Here are some common questions we receive about Bookmark.
      </p>

      <FAQAccordion />
      <div className="w-full flex  text-white font-bold flex-col justify-center items-center bg-[#5368df] h-screen">
        <h2 className="text-xl">35,000+ Already Joined
        </h2>

        <h1 className="text-3xl font-bold text-center">

          Stay up-to-date with <br /> what we're doing
        </h1>

        <div className="flex mt-4 p-4 space-x-4">
          <input type="text" placeholder="Enter your email here.." className="rounded text-black   bg-white " />
          <button className="rounded px-4 py-2 bg-[#e95864] ">Contact Us</button>
        </div>
      </div>

    </section>
  );
};

export default FAQ;
