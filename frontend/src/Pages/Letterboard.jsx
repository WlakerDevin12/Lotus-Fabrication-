import React from 'react';
import { useNavigate } from 'react-router-dom';
import classicfeltletterboard from "../assets/Backlit Flex Boards.jpeg";
import Acrylic from "../assets/Acrylic Letter Boards.jfif";
const Letterboard = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen p-6">
      {/* Hero Section */}
      <section className="text-center max-w-5xl mx-auto mb-12 mt-[100px]">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Custom Letter Board Printing
        </h1>
        <p className="text-lg md:text-xl">
          Unique, customizable letter boards perfect for cafes, businesses, classrooms, and personal spaces — crafted with precision and creativity.
        </p>
      </section>

      {/* Grid of Letter Board Types */}
      <section className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {[
          {
            title: "Classic Felt Letter Boards",
            desc: "Elegant, changeable messages for cafes, menus, or motivational quotes.",
            img: classicfeltletterboard,
          },
          {
            title: "Acrylic Letter Boards",
            desc: "Modern and sleek design for office or event displays.",
            img: Acrylic,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-300"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img 
              src={item.img}
                alt= 'classicfeltletterboard'
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

      {/* Why Choose Our Letter Boards */}
      <section className="bg-white text-purple-800 p-8 rounded-2xl shadow-md max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-4 text-center">Why Choose Our Letter Boards?</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">🎨 Customizable Designs</h3>
            <p>Choose board colors, fonts, sizes, and accessories to match your style.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">📐 Various Sizes</h3>
            <p>From desktop sizes to wall-mountable boards — made as per your needs.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🧲 Easy Letter Placement</h3>
            <p>Strong grip letters that are easy to rearrange without slipping or falling.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">💡 Perfect for Businesses</h3>
            <p>Used for welcome signs, menus, price lists, and inspirational quotes.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🚚 Fast Delivery</h3>
            <p>Available for express delivery and bulk orders on request.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🔧 Ready to Use</h3>
            <p>Delivered with complete letter sets and mounting hardware if needed.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold">Q: Can I order custom text pre-installed?</h4>
            <p>Yes! We offer letter boards with your message already assembled.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Q: Are extra letters included?</h4>
            <p>Yes, each board comes with a full set of letters, numbers, and symbols.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Q: Are these boards suitable for kids?</h4>
            <p>Absolutely. They're great for learning, classroom activities, or name displays.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Q: Do you offer bulk or corporate orders?</h4>
            <p>Yes, we provide special pricing for bulk orders for offices, schools, or cafes.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white text-purple-900 text-center p-10 rounded-xl shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Start Designing Your Letter Board Today!</h2>
        <p className="text-lg mb-5">Get in touch to customize your letter board exactly the way you want.</p>
        <button className="bg-purple-700 hover:bg-purple-800 font-semibold px-8 py-3 rounded-full transition-all text-white" onClick={()=>navigate("/contact")}>
          Order Now
        </button>
      </section>
    </div>
  );
};

export default Letterboard;
