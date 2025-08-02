import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message);

      // Optional: Reset form after submission
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Failed to send message", err);
      alert("Failed to send message.");
    }
  };

  return (
    <section className="bg-white py-20 px-6 sm:px-10 md:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 mt-10">
            Get in Touch with <span className="text-red-500">Lotus Fabrication</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We'd love to hear from you! Whether you have a question, project idea, or just want to say hello.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Form - Only visible on medium and larger screens */}
          <div className="hidden md:block">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or question..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-red-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Call Us - Only visible on small screens */}
          <div className="block md:hidden text-center bg-red-50 border border-red-200 p-6 rounded-lg">
            <p className="text-lg font-semibold mb-4 text-gray-800">Need Help?</p>
            <a
              href="tel:+919810995923"
              className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-red-600 transition duration-300"
            >
              Call Now
            </a>
          </div>

          {/* Info Section */}
          <div className="text-gray-700 space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Office Address</h3>
              <p>D-185, Sector 10, Noida, Uttar Pradesh 201301</p>
            </div>
            <div className="pt-4">
              <h3 className="text-xl font-bold mb-2">Find Us Here</h3>
              <iframe
                title="Lotus Fabrication Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5948.746179363239!2d77.32605843397302!3d28.59207549526515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xad3c98ca997cbac1%3A0xcc7a3a830d5c6a8d!2sLotus%20Fabrication%20%3A%20Standee%2C%20Flex%20Printing%20Service%20in%20Noida%20%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1753705128658!5m2!1sen!2sin"
                width="100%"
                height="150"
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg border border-gray-300"
              ></iframe>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p>support@lotusfabrication.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p>+91 9873668464</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
