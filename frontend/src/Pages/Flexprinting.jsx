import React from 'react';
import adverting from "../assets/advertisg flex.webp";
import Backlit from "../assets/backlet flex boards.avif";
import rollup from "../assets/Roll-Up Standees.jpg";
import retail from "../assets/Retail Flex Signage.webp";
import political from "../assets/political flex.jpg";
import flexbanner from "../assets/flex banner.webp";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // For toggle icon


const Flexprinting = () => {
  const [openIndex, setOpenIndex] = useState(null);

const faqs = [
  {
    question: "What is the minimum order for flex printing?",
    answer: "We cater to both bulk and single-piece orders — no minimum quantity.",
  },
  {
    question: "Do you offer design support?",
    answer: "Yes, we offer free basic design and layout support for your prints.",
  },
  {
    question: "How long does it take to print and deliver?",
    answer: "Standard orders are ready within 4–6 hours. We also offer same-day delivery.",
  },
  {
    question: "Can I print custom sizes?",
    answer: "Absolutely! We support all sizes, from A4 to large hoardings.",
  },
];

  const navigate = useNavigate();
  return (
    <div className="min-h-screen p-4 md:p-6 bg-gray-50">
      {/* Hero Section */}
      <section className="text-center max-w-5xl mx-auto mb-10 mt-[80px]">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight text-gray-800">
          Flex Printing Services
        </h1>
        <p className="text-base md:text-lg text-gray-600">
          Affordable, durable, and eye-catching flex banners, hoardings, posters, and signage for events, promotions, shops, and more.
        </p>
      </section>

      {/* Grid of Services */}
      <section className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12 px-2">
        {[
          {
            title: "Event Flex Banners",
            desc: "High-quality banners for product launches, weddings, trade fairs, and more.",
            img: flexbanner,
          },
          {
            title: "Political Flex Posters",
            desc: "Grab voter attention with impactful political banners printed in bulk.",
            img: political,
          },
          {
            title: "Advertising Hoardings",
            desc: "Large format hoardings to boost visibility in high-traffic areas.",
            img: adverting,
          },
          {
            title: "Retail Flex Signage",
            desc: "Display your offers, new arrivals, or branding with bold and colorful prints.",
            img: retail,
          },
          {
            title: "Backlit Flex Boards",
            desc: "Perfect for nighttime promotions — light up your message with backlit flex.",
            img: Backlit,
          },
          {
            title: "Roll-Up Standees",
            desc: "Portable, compact, and professional standees for events and exhibitions.",
            img: rollup,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <div className="relative h-40 w-full overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1 text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Detailed Services Section */}
      <section className="max-w-5xl mx-auto mb-12 px-4">
        <h2 className="text-2xl font-bold mb-3 text-gray-800">Our Flex Printing Solutions</h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li>✅ <strong>Eco-Solvent Flex Printing</strong> – Bright and eco-friendly prints with high-resolution output.</li>
          <li>✅ <strong>Blackout Flex</strong> – Ideal for front-lit and backlit applications, prevents image transparency.</li>
          <li>✅ <strong>Star Flex</strong> – Glossy, durable, waterproof, and affordable — perfect for general advertising.</li>
          <li>✅ <strong>Canvas Flex</strong> – Premium matte texture used for indoor events and artistic displays.</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white text-red-700 p-6 md:p-8 rounded-xl shadow-sm max-w-6xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Why Choose Our Flex Printing Services?</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-sm text-gray-800">
          <div>
            <h3 className="text-base font-semibold mb-1">✨ High Resolution</h3>
            <p>We use top-tier printers for ultra-sharp and vibrant prints.</p>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-1">🚚 Same-Day Delivery</h3>
            <p>Need it urgent? We deliver flex within hours in your city.</p>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-1">💸 Budget Friendly</h3>
            <p>Best prices guaranteed. No compromise on quality.</p>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-1">🌦️ Weather Proof</h3>
            <p>UV and rain resistant flex ideal for outdoor use.</p>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-1">📏 Custom Sizes</h3>
            <p>We print on any size — from posters to giant hoardings.</p>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-1">📞 Free Design Help</h3>
            <p>No designer? We assist you in creating appealing banner designs.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
<section className="max-w-5xl mx-auto mb-16 px-4">
  <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Frequently Asked Questions</h2>
  <div className="space-y-4">
    {faqs.map((faq, index) => (
      <div
        key={index}
        className="bg-red-50 border border-red-200 rounded-lg shadow-md transition-all duration-300"
      >
        {/* Dropdown button */}
        <button
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
          className="flex justify-between items-center w-full px-6 py-4 text-left text-gray-800 font-semibold hover:bg-red-100 focus:outline-none transition-colors duration-200"
        >
          {faq.question}
          <span className="ml-4 text-red-600">
            {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </button>

        {/* Dropdown answer */}
        <div
          className={`px-6 pt-0 pb-4 text-sm text-gray-700 transition-all duration-300 ease-in-out ${
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
      <section className="bg-red-50 text-red-900 text-center p-8 rounded-xl shadow-md max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to Print Your Flex?</h2>
        <p className="text-sm md:text-base mb-4">Get in touch with us for quick, affordable, and premium flex printing.</p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded-full transition-all" onClick={()=>navigate("/contact")}>
          Get a Free Quote
        </button>
      </section>
    </div>
  );
};

export default Flexprinting;
