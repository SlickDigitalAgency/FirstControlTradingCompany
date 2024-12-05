import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-emerald-900/20 to-gray-900"></div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15)_0%,transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-lg text-emerald-100/80 max-w-3xl mx-auto">
            We'd love to hear from you. Let's discuss how we can help your
            business grow
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Information Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-emerald-500/20">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-emerald-400 mr-3" />
                  <div>
                    <p className="font-medium text-white">Office Location</p>
                    <p className="text-emerald-100/70">Riyadh, Saudi Arabia</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-emerald-500/20">
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-emerald-400 mr-3" />
                  <div>
                    <p className="font-medium text-white">Business Hours</p>
                    <p className="text-emerald-100/70">Mon - Fri: 9AM - 6PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-emerald-500/20">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-emerald-400 mr-3" />
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <p className="text-emerald-100/70">+966 XX XXX XXXX</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-emerald-500/20">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-emerald-400 mr-3" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-emerald-100/70">
                      contact@firstcontrol.sa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-[400px] bg-white/10 backdrop-blur-md rounded-lg overflow-hidden border border-emerald-500/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463880.89799874!2d46.5423319!3d24.7135517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1709群4321"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-emerald-500/20"
            >
              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    className="peer w-full px-4 py-3 bg-white/5 border border-emerald-500/20 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 placeholder-transparent text-white"
                    placeholder="Your name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 -top-2.5 text-sm text-emerald-400 bg-gray-900 px-1 transition-all
                             peer-placeholder-shown:text-base peer-placeholder-shown:text-emerald-100/50 peer-placeholder-shown:top-3
                             peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-emerald-400"
                  >
                    Full Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className="peer w-full px-4 py-3 bg-white/5 border border-emerald-500/20 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 placeholder-transparent text-white"
                    placeholder="you@example.com"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 -top-2.5 text-sm text-emerald-400 bg-gray-900 px-1 transition-all
                             peer-placeholder-shown:text-base peer-placeholder-shown:text-emerald-100/50 peer-placeholder-shown:top-3
                             peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-emerald-400"
                  >
                    Email Address
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    className="peer w-full px-4 py-3 bg-white/5 border border-emerald-500/20 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 placeholder-transparent text-white"
                    placeholder="Your phone number"
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-4 -top-2.5 text-sm text-emerald-400 bg-gray-900 px-1 transition-all
                             peer-placeholder-shown:text-base peer-placeholder-shown:text-emerald-100/50 peer-placeholder-shown:top-3
                             peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-emerald-400"
                  >
                    Phone Number
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    rows={4}
                    className="peer w-full px-4 py-3 bg-white/5 border border-emerald-500/20 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 placeholder-transparent text-white resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-4 -top-2.5 text-sm text-emerald-400 bg-gray-900 px-1 transition-all
                             peer-placeholder-shown:text-base peer-placeholder-shown:text-emerald-100/50 peer-placeholder-shown:top-3
                             peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-emerald-400"
                  >
                    Message
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 px-6 rounded-md hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2 group"
                >
                  <span>Send Message</span>
                  <Send className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
