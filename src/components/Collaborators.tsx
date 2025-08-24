import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Collaborators = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Mock company logos - using text for demonstration
  const collaborators = [
    "TechCorp", "InnovateLab", "DesignStudio", "CreativeWorks", "ModernTech",
    "DigitalAgency", "FutureDesign", "ArtisticVision", "BrandMakers", "StyleForge"
  ];

  return (
    <section ref={ref} className="py-20 bg-pure-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-pure-dark mb-6">
            Our Partners
          </h2>
          <p className="text-xl text-medium-grey max-w-2xl mx-auto">
            Trusted by leading brands and innovative companies worldwide
          </p>
        </motion.div>

        {/* Marquee Animation */}
        <div className="relative">
          <div className="flex space-x-16 animate-marquee">
            {[...collaborators, ...collaborators].map((company, index) => (
              <motion.div
                key={`${company}-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: (index % collaborators.length) * 0.1 }}
              >
                <div className="glass rounded-2xl px-8 py-4 min-w-[200px] text-center hover:shadow-glow transition-all duration-300">
                  <span className="text-2xl font-bold text-pure-dark">{company}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Secondary Row - Reverse Direction */}
        <div className="relative mt-8">
          <motion.div
            className="flex space-x-16"
            animate={{ x: [0, -100] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            style={{ width: "200%" }}
          >
            {[...collaborators.slice(5), ...collaborators.slice(5)].map((company, index) => (
              <motion.div
                key={`${company}-secondary-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + (index % 5) * 0.1 }}
              >
                <div className="glass-dark rounded-2xl px-8 py-4 min-w-[200px] text-center hover:shadow-glow transition-all duration-300">
                  <span className="text-2xl font-bold text-pure-white">{company}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center">
            <motion.div
              className="text-4xl font-bold text-pure-dark mb-2"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 200, delay: 0.8 }}
            >
              150+
            </motion.div>
            <p className="text-medium-grey">Partners</p>
          </div>

          <div className="text-center">
            <motion.div
              className="text-4xl font-bold text-pure-dark mb-2"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 200, delay: 0.9 }}
            >
              50+
            </motion.div>
            <p className="text-medium-grey">Countries</p>
          </div>

          <div className="text-center">
            <motion.div
              className="text-4xl font-bold text-pure-dark mb-2"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 200, delay: 1 }}
            >
              99%
            </motion.div>
            <p className="text-medium-grey">Satisfaction</p>
          </div>

          <div className="text-center">
            <motion.div
              className="text-4xl font-bold text-pure-dark mb-2"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 200, delay: 1.1 }}
            >
              24/7
            </motion.div>
            <p className="text-medium-grey">Support</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Collaborators;