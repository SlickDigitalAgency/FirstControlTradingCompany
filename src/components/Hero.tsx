import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80"
          className="w-full h-full object-cover"
          alt="Saudi Arabia Cityscape"
        />
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Trusted Partner in Global Trade
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            First Control Trading Company delivers excellence in international
            trade solutions, connecting Saudi Arabia to global markets with
            integrity and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center px-6 py-3 rounded-md bg-white text-gray-900 hover:bg-gray-100 transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
