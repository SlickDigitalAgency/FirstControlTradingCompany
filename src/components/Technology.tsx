import { motion } from "framer-motion";
import { Cpu, Database, Lock, BarChart } from "lucide-react";

const technologies = [
  {
    icon: Cpu,
    title: "AI-Powered Analytics",
    description: "Advanced market analysis and predictive trading insights.",
  },
  {
    icon: Database,
    title: "Blockchain Integration",
    description: "Secure and transparent transaction tracking.",
  },
  {
    icon: Lock,
    title: "Enhanced Security",
    description: "State-of-the-art data protection protocols.",
  },
  {
    icon: BarChart,
    title: "Real-time Monitoring",
    description: "Live tracking and performance analytics.",
  },
];

export default function Technology() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-emerald-900 to-emerald-800"></div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.2)_0%,transparent_70%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Technology & Innovation
          </h2>
          <p className="text-lg text-emerald-100 max-w-3xl mx-auto">
            Leveraging cutting-edge technology to revolutionize global trade
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gray-900/60 backdrop-blur-sm p-6 rounded-lg border border-emerald-500/20 group-hover:border-emerald-500/40 transition-all">
                <tech.icon className="h-12 w-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {tech.title}
                </h3>
                <p className="text-emerald-100/80">{tech.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
          >
            Learn More About Our Technology
          </a>
        </motion.div>
      </div>
    </section>
  );
}
