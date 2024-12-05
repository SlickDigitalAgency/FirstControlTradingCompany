import { useState, useEffect } from "react";
import { Menu, X, Building2 } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Building2 className="h-8 w-8 text-emerald-500" />
            <span className="ml-2 text-xl font-bold text-white">
              First Control
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-emerald-500 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-emerald-500 transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-300 hover:text-emerald-500 transition-colors"
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-emerald-500 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
            >
              Contact Us
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-300 hover:text-emerald-500"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-300 hover:text-emerald-500"
            >
              About
            </a>
            <a
              href="#services"
              className="block px-3 py-2 text-gray-300 hover:text-emerald-500"
            >
              Services
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 text-gray-300 hover:text-emerald-500"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-emerald-500 font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
