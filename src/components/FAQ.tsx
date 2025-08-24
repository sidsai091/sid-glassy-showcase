import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const faqs = [
    {
      id: 1,
      question: "What makes your products different from competitors?",
      answer: "Our products are designed with a focus on quality, sustainability, and innovation. We use premium materials and cutting-edge technology to ensure exceptional performance and longevity."
    },
    {
      id: 2,
      question: "Do you offer international shipping?",
      answer: "Yes, we ship worldwide! We offer fast and secure international shipping to over 50 countries. Shipping costs and delivery times vary by location."
    },
    {
      id: 3,
      question: "What is your return policy?",
      answer: "We offer a 30-day money-back guarantee on all our products. If you're not completely satisfied, you can return the item in its original condition for a full refund."
    },
    {
      id: 4,
      question: "How long is the warranty on your products?",
      answer: "All our products come with a comprehensive 2-year warranty covering manufacturing defects and normal wear. Extended warranty options are also available."
    },
    {
      id: 5,
      question: "Do you offer bulk discounts for businesses?",
      answer: "Yes, we offer special pricing for bulk orders and business customers. Contact our sales team for a custom quote based on your specific needs."
    },
    {
      id: 6,
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can use this to monitor your shipment's progress on our website or the carrier's tracking portal."
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section ref={ref} className="py-20 bg-light-grey" id="faq">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-pure-dark mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-medium-grey max-w-2xl mx-auto">
            Find answers to common questions about our products and services
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="modern-card mb-6 overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => toggleItem(faq.id)}
            >
              <div className="flex items-center justify-between p-6">
                <h3 className="text-xl font-semibold text-pure-dark pr-8">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openItem === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-medium-grey" />
                </motion.div>
              </div>

              <motion.div
                initial={false}
                animate={{
                  height: openItem === faq.id ? "auto" : 0,
                  opacity: openItem === faq.id ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <div className="border-t border-light-grey pt-4">
                    <p className="text-medium-grey leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-pure-dark mb-4">
            Still have questions?
          </h3>
          <p className="text-medium-grey mb-8">
            Our support team is here to help you with any additional questions
          </p>
          <motion.button
            className="glass rounded-2xl px-8 py-4 text-pure-dark font-semibold text-lg hover:shadow-glow transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;