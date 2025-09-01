import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-pure-dark text-pure-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-pure-dark font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold">sidclo</span>
            </div>
            <p className="text-medium-grey leading-relaxed mb-6">
              Where design meets creativity and exclusivity. We create premium products that combine innovation with aesthetic excellence.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: MessageCircle, href: "#", label: "WhatsApp" },
                { icon: Phone, href: "#", label: "TikTok" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="glass-dark rounded-full p-3 hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Products', 'Gallery', 'About', 'Contact'].map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-medium-grey hover:text-pure-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <motion.div
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <MapPin className="w-5 h-5 text-medium-grey mt-1 flex-shrink-0" />
                <div>
                  <p className="text-pure-white font-semibold">Location</p>
                  <p className="text-medium-grey">
                    123 Design Street<br />
                    Creative District, CD 12345<br />
                    United States
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Phone className="w-5 h-5 text-medium-grey flex-shrink-0" />
                <div>
                  <p className="text-pure-white font-semibold">Phone</p>
                  <p className="text-medium-grey">+1 (555) 123-4567</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Stay Updated</h3>
            <p className="text-medium-grey mb-4">
              Subscribe to our newsletter for the latest updates and exclusive offers.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full glass-dark rounded-xl px-4 py-3 text-pure-white placeholder-medium-grey focus:outline-none focus:ring-2 focus:ring-pure-white/20 transition-all duration-300"
              />
              <motion.button
                className="w-full bg-gradient-primary text-pure-dark rounded-xl py-3 font-semibold hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-dark-grey pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-medium-grey text-center md:text-left mb-4 md:mb-0">
            © 2024 sidclo. All rights reserved. Designed with passion and precision.
          </p>
          <div className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, index) => (
              <motion.a
                key={link}
                href="#"
                className="text-medium-grey hover:text-pure-white transition-colors duration-300 text-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.6 }}
                viewport={{ once: true }}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;