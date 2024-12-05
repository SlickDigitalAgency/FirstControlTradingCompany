import { Target, Users, Globe } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-50 mb-4">
            About First Control
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Leading the way in international trade solutions with a commitment
            to excellence, innovation, and sustainable business practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 shadow-sm">
            <Target className="h-12 w-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-200">
              To facilitate seamless global trade connections while maintaining
              the highest standards of quality and customer service.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-emerald-500/20 hover:border-emerald-500/40 transition-all shadow-sm">
            <Globe className="h-12 w-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-200">
              To become the leading trading company in Saudi Arabia, recognized
              for our integrity, innovation, and excellence in global commerce.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-emerald-500/20 hover:border-emerald-500/40 transition-all shadow-sm">
            <Users className="h-12 w-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p className="text-gray-200">
              Built on trust, powered by innovation, and driven by customer
              success in every business relationship we forge.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80"
              alt="Modern Office"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Excellence in Trading</h3>
            <p className="text-gray-200 mb-6">
              First Control Trading Company has established itself as a
              cornerstone of international trade in Saudi Arabia. With years of
              experience and a deep understanding of global markets, we provide
              comprehensive trading solutions that meet the diverse needs of our
              clients.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-3">
                  ✓
                </span>
                <span>Expert market analysis and insights</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-3">
                  ✓
                </span>
                <span>Global network of trusted partners</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-3">
                  ✓
                </span>
                <span>Comprehensive logistics solutions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
