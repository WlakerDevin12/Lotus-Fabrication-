import React, { useEffect } from "react";
import Slider from "react-slick";
import sliderone from "../assets/eco-solvent-printing-machine-4311410_1280.jpg";
import slidertwo from "../assets/c-lipped-channel-5528517_1280.jpg";
import sliderthree from "../assets/standee design.avif";
import brandone from "../assets/branding hub brand.jpg";
import brandtwo from "../assets/gk advertising brands.png";
import brandthree from "../assets/kgn-publicity brands.jpg";
import brandfour from "../assets/sk signs brands.png";
import brandfive from "../assets/holding boards.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaCheckCircle,
  FaPrint,
  FaPaintBrush,
  FaBullhorn,
  FaQuoteLeft,
  FaTools,
  FaRulerCombined,
  FaFont,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const testimonials = [
  {
    position: "Branding Hub",
    name: "Raj Kumar",
    testimonial:
      "They brought our branding ideas to life with amazing quality.",
  },
  {
    position: "KGN Advertising (Flex Printing)",
    name: "Rihan",
    testimonial: "Superb quality prints at reasonable pricing!",
  },
  {
    position: "SK Sign",
    name: "Birender",
    testimonial: "Reliable and timely delivery, every time.",
  },
  {
    position: "Yug Enterprise",
    name: "Ajay Sharma",
    testimonial: "Professional service and attention to detail.",
  },
  {
    position: "GM Motor",
    name: "Raja",
    testimonial: "Very happy with the creative design work!",
  },
  {
    position: "GK Advertising",
    name: "Gaurav",
    testimonial: "Our go-to team for all promotional materials.",
  },
];

const serviceList = [
  {
    icon: <FaPrint />,
    title: "Flex Printing",
    description:
      "Vibrant, long-lasting flex prints for banners, boards, and more.",
      link: "/flexprinting"
  },
  {
    icon: <FaPaintBrush />,
    title: "Standee Design",
    description: "Eye-catching standees that elevate your brand presence.",
     link: "/standee"
  },
  {
    icon: <FaBullhorn />,
    title: "Banner Holding",
    description: "Strong and stable banner holders for all environments.",
     link: "/bannerholding"
  },
  {
    icon: <FaTools />,
    title: "Welding",
    description:
      "Precision welding for custom frames, signage stands, and structural durability.",
       link: "/welding"
  },
  {
    icon: <FaRulerCombined />,
    title: "Iron Frame",
    description:
      "Sturdy iron frames for flex boards, displays, and outdoor installations.",
       link: "/ironframe"
  },
  {
    icon: <FaFont />,
    title: "Letter Boards",
    description:
      "Stylish and bold letter boards that grab attention and enhance visibility.",
       link: "/letterboard"
  },
];


const Dashboard = () => {
  const navigate = useNavigate();
  const heroSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
  };


 useEffect(() => {
  AOS.init({
    duration: 1000, // Animation duration in ms
    once: true,     // Animation happens only once on scroll
  });
}, []);

  return (
    <div className="mt-24 grid grid-cols-1 gap-20 px-4 lg:px-16">
<section className="bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl shadow-xl px-6 py-20 "data-aos="fade-down" >
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

    {/* Text Content */}
    <div className="space-y-6">
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-800">
        <span className="text-red-500">Creative Printing</span> That Builds Your Brand
      </h1>
      <p className="text-lg sm:text-xl text-gray-700">
        We craft vibrant flex prints, eye-catching standees, and strong banners to help your business stand out. Let your brand speak loud and clear with every visual.
      </p>
      <button className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300" onClick={()=>navigate("/contact")}>
         Let’s Get Started
       
      </button>
    </div>

    {/* Image Slider Section */}
    <div className="flex justify-center w-full">
      <Slider
        dots={true}
        infinite={true}
        autoplay={true}
        speed={600}
        autoplaySpeed={3000}
        slidesToShow={1}
        slidesToScroll={1}
        arrows={false}
        className="w-full max-w-md rounded-xl overflow-hidden shadow-lg"
      >
        {[sliderone, slidertwo, sliderthree].map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-72 object-cover rounded-xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  </div>
</section>


     {/* Vision Section - Updated */}
<section className="bg-gray-50 py-20 px-6 rounded-2xl shadow-inner" data-aos="fade-up">
  <div className="max-w-5xl mx-auto text-center space-y-8">
    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight">
      <span className="text-red-500">Crafting Your Vision</span> – From Print to Precision
    </h2>
    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
      We turn your concepts into impactful visuals with premium printing,
      durable fabrication, and expert service — ensuring your brand leaves a lasting impression.
    </p>
  <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
  <a
    href="#services"
    className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-red-600 transition duration-300 text-center"
  >
    Explore Services
  </a>
  <a
    onClick={()=>navigate('/contact')}
    className="border border-red-500 text-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition duration-300 text-center"
  >
    Contact Us
  </a>
</div>

  </div>
</section>


      {/* Services Section */}
      <section id="services" className="bg-gray-100 py-16 px-4 rounded-xl" data-aos="fade-up">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700">Our Top Services</h2>
          <p className="text-gray-600 mt-4 text-lg">
            From printing to promotion, we bring creativity and durability to
            your brand presence.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto cursor-pointer">
          {serviceList.map((service, i) => (
            <ServiceCard key={i} {...service} onClick={()=>navigate(service.link)} />
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-white via-gray-50 to-white py-20 px-6" data-aos="fade-up">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
      Our Printing Process
    </h2>
    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
      From concept to completion, our printing process ensures every design is brought to life with precision, quality, and consistency.
    </p>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {[
        {
          step: 'Design Consultation',
          desc: 'We discuss your brand, vision, and business goals to kick off the process with clarity.',
        },
        {
          step: 'Artwork Preparation',
          desc: 'Our designers craft pixel-perfect, high-resolution designs tailored to your brand.',
        },
        {
          step: 'Flex & Media Selection',
          desc: 'We help you choose the ideal materials and print techniques based on your needs.',
        },
        {
          step: 'Printing & Finishing',
          desc: 'With precision machines and expert hands, we bring your designs to life flawlessly.',
        },
      ].map(({ step, desc }, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-lg transition duration-300"
        >
          <div className="w-12 h-12 mb-4 flex items-center justify-center bg-indigo-100 text-indigo-600 text-lg font-bold rounded-full mx-auto">
            {idx + 1}
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{step}</h3>
          <p className="text-gray-600 text-sm">{desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>



    {/* Why Choose Us Section */}
<section className="py-16 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-10">
      Why Choose Us?
    </h2>

    <ul className="space-y-6 text-lg text-gray-700 text-left sm:text-center">
      {[
        "High-Quality Work: Precision and excellence in every project.",
        "Affordable Pricing: Top-quality service that fits your budget.",
        "Timely Delivery: We value your time and deliver fast.",
      ].map((item, index) => (
        <li key={index} className="flex items-start justify-start gap-3 sm:justify-center">
          <FaCheckCircle className="text-green-600 mt-1 text-xl" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
</section>


{/* Use Cases Section */}
<section className="bg-gradient-to-b from-white via-gray-50 to-white py-20 px-6" data-aos="fade-up">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12">
      Perfect For Every Business
    </h2>
    <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-base">
      {[
        {
          title: 'Retail Promotions',
          desc: 'Display flex banners or standees during sales, festivals, or new launches to drive more footfall and visibility.',
        },
        {
          title: 'Corporate Events',
          desc: 'Make your brand shine with clean, professional backdrops, podium wraps, and event signage.',
        },
        {
          title: 'Exhibitions & Trade Shows',
          desc: 'Create lasting impressions with eye-catching booths, flex boards, and roll-up banners that reflect your brand identity.',
        },
        {
          title: 'Real Estate & Local Advertising',
          desc: 'Use durable flex signs and holding boards for ongoing visibility at property sites or local promotions.',
        },
      ].map(({ title, desc }, idx) => (
        <div
          key={idx}
          className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition duration-300"
        >
          <h3 className="text-2xl font-semibold text-indigo-600 mb-3">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

 {/* Materials Section */}
<section className="bg-white py-20 px-6" data-aos="fade-up">
  <div className="max-w-6xl mx-auto">
    <div className="mb-12 text-left md:text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
        Premium Materials for Lasting Impact
      </h2>
      <p className="text-lg text-gray-600 mt-4 max-w-2xl md:mx-auto">
        Every print we deliver is crafted using superior-grade materials that ensure long-term durability and unmatched visual quality.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-10 mt-10">
      <div className="border-l-4 border-indigo-500 pl-6 py-4 hover:shadow-md transition duration-300 bg-gray-50 rounded-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">Eco-Solvent Flex</h3>
        <p className="text-gray-600">
          Durable and weatherproof, ideal for eye-catching outdoor advertising that lasts.
        </p>
      </div>

      <div className="border-l-4 border-indigo-500 pl-6 py-4 hover:shadow-md transition duration-300 bg-gray-50 rounded-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">Star Flex</h3>
        <p className="text-gray-600">
          Features a glossy finish and vibrant color output—perfect for marketing visuals.
        </p>
      </div>

      <div className="border-l-4 border-indigo-500 pl-6 py-4 hover:shadow-md transition duration-300 bg-gray-50 rounded-md" >
        <h3 className="text-xl font-semibold text-gray-800 mb-1">Vinyl & Reflective Vinyl</h3>
        <p className="text-gray-600">
          Used for premium signage, vehicle wraps, and reflective branding needs.
        </p>
      </div>

      <div className="border-l-4 border-indigo-500 pl-6 py-4 hover:shadow-md transition duration-300 bg-gray-50 rounded-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">UV Printing</h3>
        <p className="text-gray-600">
          Offers scratch-resistant quality on rigid surfaces like foam boards and acrylic.
        </p>
      </div>
    </div>
  </div>
</section>






      {/* Testimonials */}
      <section className="bg-white py-16 px-4" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          What Our Customers Say
        </h2>
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          autoplay={true}
          autoplaySpeed={4000}
          slidesToShow={1}
          slidesToScroll={1}
          arrows={false}
          pauseOnHover={true}
          className="max-w-3xl mx-auto"
        >
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-6 px-6"
            >
              <FaQuoteLeft className="text-5xl text-red-500" />
              <p className="text-lg text-gray-700 italic">
                “{item.testimonial}”
              </p>
              <div>
                <p className="text-blue-800 font-semibold">{item.position}</p>
                <p className="text-gray-900 font-medium">{item.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Clients Section */}
      <section className="bg-gray-50 py-16 px-4" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Trusted Clients
        </h2>
        <Slider
          dots={false}
          infinite={true}
          speed={1000}
          autoplay={true}
          autoplaySpeed={2000}
          slidesToShow={4}
          slidesToScroll={1}
          arrows={false}
          pauseOnHover={false}
          className="max-w-6xl mx-auto"
          responsive={[
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
          ]}
        >
          {[brandone, brandtwo, brandthree, brandfour, brandfive].map(
            (logo, i) => (
              <div key={i} className="flex justify-center items-center px-6">
                <img
                  src={logo}
                  alt={`client-${i}`}
                  className="h-24 w-auto object-contain transition duration-300"
                />
              </div>
            )
          )}
        </Slider>
      </section>

      {/* Contact Form */}
    </div>
  );
};

const ServiceCard = ({ icon, title, description, onClick }) => (
  <div
    onClick={onClick}
    className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-red-500 text-center cursor-pointer"
  >
    <div className="text-5xl text-red-500 mb-4 mx-auto">{icon}</div>
    <h3 className="text-2xl font-bold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600 text-base">{description}</p>
  </div>
);


export default Dashboard;
