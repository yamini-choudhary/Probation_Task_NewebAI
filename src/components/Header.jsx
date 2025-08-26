import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 
import logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <header id="header" className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl sm:px-6 lg:px-10">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="neweb.ai"
            className="h-8 w-auto sm:h-10 md:h-[80px] lg:h-[80px]"
          />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-10 font-medium ml-10 pt-[12px]">
          {["Home", "Features", "About Us", "Contact", "Pricing"].map(
            (link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                className="text-[18px] text-[#1E1E2F] hover:text-black transition-colors"
              >
                {link}
              </a>
            )
          )}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="items-center hidden space-x-4 lg:flex">
          {/* Login Button */}
          <button className="px-4 py-2 text-sm font-semibold text-black transition-all duration-300 border border-black rounded-md hover:scale-105 hover:text-black">
            Log in
          </button>

          {/* Get Started Button */}
          <button className="px-4 py-2 text-sm font-semibold text-white transition-all duration-300 bg-black rounded-md hover:scale-105 hover:shadow-lg">
            Request for Demo
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#1E1E2F] hover:text-black focus:outline-none"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`lg:hidden bg-white shadow-md border-t transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col items-center py-6 space-y-4 text-base font-medium">
          {["Features", "Why Us", "Pricing", "Testimonials"].map(
            (link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                className="text-[#1E1E2F] hover:text-black transition-colors"
                onClick={() => setIsOpen(false)} 
              >
                {link}
              </a>
            )
          )}

          {/* Mobile Action Buttons */}
          <button
            className="px-4 py-2 text-sm font-semibold text-black transition-all duration-300 border border-black rounded-md hover:scale-105 hover:text-black"
            onClick={() => setIsOpen(false)}
          >
            Log in
          </button>

          <button
            className="px-4 py-2 text-sm font-semibold text-white transition-all duration-300 bg-black rounded-md hover:scale-105 hover:shadow-lg"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
