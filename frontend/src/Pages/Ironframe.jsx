import React from 'react';
import Outdooriron from "../assets/product-jpeg.png";
import evantframe from "../assets/Wedding-Beads.jpg";
import shopfront from "../assets/unique-vintage-blank-signage-wrought-iron-bracket-perfect-old-town-shops-unique-vintage-blank-signage-wrought-iron-390118241.jpg";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


const Ironframe = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();
  const services = [
    {
      title: "Outdoor Iron Boards",
      desc: "Perfect for street-level advertising, highly resistant to weather conditions.",
      image: Outdooriron,
    },
    {
      title: "Event Iron Frames",
      desc: "Use for temporary installations during fairs, rallies, and public gatherings.",
      image: evantframe,
    },
    {
      title: "Shopfront Iron Signage",
      desc: "Promote products or discounts using rigid iron frame boards outside your shop.",
      image: shopfront,
    },
  ];

  return (
    <div className="min-h-screen p-6">
      {/* Hero Section */}
      <section className="text-center max-w-5xl mx-auto mb-12 mt-[100px]">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Iron Frame Board Printing
        </h1>
        <p className="text-lg md:text-xl">
          Durable, portable, and weatherproof iron frame board printing for outdoor advertising, political campaigns, shop boards, and more.
        </p>
      </section>

      {/* Grid of Services */}
      <section className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-300"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Why Choose Iron Frame Boards */}
      <section className="bg-white text-blue-800 p-8 rounded-2xl shadow-md max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-4 text-center">Why Choose Our Iron Frame Printing?</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">🔩 Strong Build</h3>
            <p>Heavy-duty iron frames built to last long and withstand outdoor conditions.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🌧️ Weather Resistance</h3>
            <p>Prints are UV-coated and waterproof, ensuring durability in any season.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">📀 Custom Sizes</h3>
            <p>We provide iron frames in any size, whether big or small.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🎯 Eye-Catching Designs</h3>
            <p>We design impactful visuals that grab attention instantly.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🚚 Quick Installation</h3>
            <p>Delivered and installed within a few hours if needed locally.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">💰 Cost Effective</h3>
            <p>Affordable pricing with no compromise on quality or durability.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto mb-20 px-4">
  <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">Frequently Asked Questions</h2>
  <div className="space-y-4">
    {[
      {
        question: "Are iron frame boards reusable?",
        answer: "Yes, they are reusable and easy to transport for multiple uses.",
      },
      {
        question: "Can I print different materials on iron frames?",
        answer: "Yes! We offer flex, vinyl, and fabric prints mounted on iron frames.",
      },
      {
        question: "How do I place an order?",
        answer: "You can call us or visit our store to discuss your requirements. Online orders are accepted too.",
      },
      {
        question: "Can I get delivery and installation?",
        answer: "Yes, we offer delivery and professional installation within your city.",
      },
    ].map((faq, index) => (
      <div
        key={index}
        className="bg-blue-50 border border-blue-200 rounded-xl shadow-md transition-all duration-300"
      >
        <button
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
          className="flex justify-between items-center w-full px-6 py-4 text-left font-semibold text-blue-900 hover:bg-blue-100 transition-colors"
        >
          {faq.question}
          <span className="ml-4 text-blue-700">
            {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </button>

        <div
          className={`px-6 pb-4 text-sm text-blue-800 transition-all duration-300 ease-in-out ${
            openIndex === index ? "block" : "hidden"
          }`}
        >
          {faq.answer}
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Call to Action */}
      <section className="bg-white text-blue-900 text-center p-10 rounded-xl shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Need Iron Frame Printing?</h2>
        <p className="text-lg mb-5">Reach out today for fast, professional, and reliable iron board printing service.</p>
        <button className="bg-blue-700 hover:bg-blue-800 font-semibold px-8 py-3 rounded-full transition-all text-white" onClick={()=>navigate("/contact")}>
          Request a Quote
        </button>
      </section>
    </div>
  );
};

export default Ironframe;
