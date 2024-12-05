import {
  Ship,
  Package,
  Truck,
  FileCheck,
  Building,
  Users2,
} from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "International Trading",
    description:
      "Comprehensive import and export services across global markets with strategic partnerships.",
  },
  {
    icon: Package,
    title: "Supply Chain Solutions",
    description:
      "End-to-end supply chain management ensuring efficient delivery and distribution.",
  },
  {
    icon: Truck,
    title: "Logistics Management",
    description:
      "Seamless logistics coordination for domestic and international shipments.",
  },
  {
    icon: FileCheck,
    title: "Quality Assurance",
    description:
      "Rigorous quality control processes ensuring product excellence.",
  },
  {
    icon: Building,
    title: "Warehousing",
    description:
      "State-of-the-art storage facilities with modern inventory management systems.",
  },
  {
    icon: Users2,
    title: "Consulting Services",
    description:
      "Expert guidance on market entry, regulations, and trade optimization.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-slate-950 z-0"></div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.2)_0%,transparent_60%)] z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-100 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Comprehensive trading and logistics solutions tailored to meet your
            business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              <service.icon className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
