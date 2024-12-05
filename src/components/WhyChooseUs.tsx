import { motion } from "framer-motion";
import { Shield, Globe2, Award, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Trusted Excellence",
    description:
      "Over decades of proven expertise in international trade and logistics.",
  },
  {
    icon: Globe2,
    title: "Global Network",
    description:
      "Strategic partnerships across major global markets and trade routes.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description:
      "Rigorous standards and certifications ensuring premium service delivery.",
  },
  {
    icon: TrendingUp,
    title: "Innovation Driven",
    description:
      "Leveraging cutting-edge technology for optimal trading solutions.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-gray-900"></div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white mb-4"
          >
            Why Choose First Control
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-emerald-100 max-w-3xl mx-auto"
          >
            Experience unparalleled expertise in global trade solutions
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-emerald-500/20 hover:border-emerald-500/40 transition-all"
            >
              <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-emerald-100/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
