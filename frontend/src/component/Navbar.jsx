import React, { useState, useEffect, useRef } from "react";
import lotuslogo from "../assets/lotus loggo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
  const [mobileServiceMenuOpen, setMobileServiceMenuOpen] = useState(false);

  const dropdownRef = useRef(null);

  const serviceItems = [
    { label: "Flex Printing", path: "/flexprinting" },
    { label: "Welding", path: "/welding" },
    { label: "Iron Frame", path: "/ironframe" },
    { label: "Letter Board", path: "/letterboard" },
    { label: "Banner Holding", path: "/bannerholding" },
    { label: "Standee Design", path: "/standee" },
  ];

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
    setServiceMenuOpen(false);
    setMobileServiceMenuOpen(false);
  };

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServiceMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <img src={lotuslogo} alt="Logo" className="h-12 w-12" />
          <h1
            onClick={() => navigate("/")}
            className="text-2xl md:text-xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500 cursor-pointer hover:scale-105 transition-all duration-300 drop-shadow-sm"
          >
            LOTUS FABRICATION
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-[16px] font-medium">
          <li
            onClick={() => handleNavigate("/")}
            className="hover:text-red-600 cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => handleNavigate("/about")}
            className="hover:text-red-600 cursor-pointer"
          >
            About
          </li>
          <li className="relative cursor-pointer" ref={dropdownRef}>
            <div
              onClick={() => setServiceMenuOpen(!serviceMenuOpen)}
              className="hover:text-red-600 transition flex items-center gap-1"
            >
              Services
            </div>
            {serviceMenuOpen && (
              <ul className="absolute top-8 left-0 bg-white rounded-lg shadow-lg border z-50 w-48 mt-2 py-2">
                {serviceItems.map((item, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-red-500 hover:text-white transition cursor-pointer"
                    onClick={() => handleNavigate(item.path)}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li
            onClick={() => handleNavigate("/contact")}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-black hover:text-white transition cursor-pointer"
          >
            Contact
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4">
          <ul className="flex flex-col gap-4 text-base font-medium">
            <li
              onClick={() => handleNavigate("/")}
              className="hover:text-red-600 cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => handleNavigate("/about")}
              className="hover:text-red-600 cursor-pointer"
            >
              About
            </li>
            {/* Mobile Dropdown Toggle */}
            <li>
              <div
                onClick={() => setMobileServiceMenuOpen(!mobileServiceMenuOpen)}
                className="hover:text-red-600 cursor-pointer flex justify-between items-center"
              >
                <span>Services</span>
                <span>{mobileServiceMenuOpen ? "▲" : "▼"}</span>
              </div>
              {mobileServiceMenuOpen && (
                <ul className="mt-2 bg-gray-100 rounded-md px-2 py-2">
                  {serviceItems.map((item, index) => (
                    <li
                      key={index}
                      className="py-2 px-2 hover:bg-red-500 hover:text-white rounded-md cursor-pointer"
                      onClick={() => handleNavigate(item.path)}
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li
              onClick={() => handleNavigate("/contact")}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-black cursor-pointer text-center"
            >
              Contact
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
