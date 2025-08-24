import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const FeedbackStats = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const feedbacks = [
    {
      id: 1,
      rating: 5,
      text: "Absolutely amazing quality! The design is elegant and the functionality is perfect. Highly recommend to anyone looking for premium products.",
      author: "Sarah Johnson"
    },
    {
      id: 2,
      rating: 5,
      text: "Outstanding customer service and product quality. Every detail has been carefully considered. This is exactly what I was looking for.",
      author: "Michael Chen"
    },
    {
      id: 3,
      rating: 5,
      text: "The attention to detail is incredible. Beautiful design that perfectly balances form and function. Worth every penny!",
      author: "Emma Williams"
    },
    {
      id: 4,
      rating: 5,
      text: "Premium quality at its finest. The craftsmanship is exceptional and it exceeded all my expectations. Will definitely buy again.",
      author: "David Rodriguez"
    }
  ];

  const [customers, setCustomers] = useState(0);
  const [sales, setSales] = useState(0);
  const [collaborators, setCollaborators] = useState(0);

  useEffect(() => {
    if (inView) {
      // Animate counters
      const animateCounter = (setter: Function, target: number, duration: number) => {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setter(target);
            clearInterval(timer);
          } else {
            setter(Math.floor(start));
          }
        }, 16);
      };

      animateCounter(setCustomers, 15000, 2000);
      animateCounter(setSales, 50000, 2500);
      animateCounter(setCollaborators, 150, 1500);
    }
  }, [inView]);

  return (
    <section ref={ref} className="py-20 bg-light-grey">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-pure-dark mb-6">
            Customer Feedback
          </h2>
          <p className="text-xl text-medium-grey max-w-2xl mx-auto">
            What our customers say about their experience with us
          </p>
        </motion.div>

        {/* Feedback Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {feedbacks.map((feedback, index) => (
            <motion.div
              key={feedback.id}
              className="modern-card text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Star Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(feedback.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + i * 0.1 }}
                  >
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </div>

              <p className="text-medium-grey mb-4 leading-relaxed">
                "{feedback.text}"
              </p>

              <div className="border-t border-light-grey pt-4">
                <p className="font-semibold text-pure-dark">{feedback.author}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center">
            <motion.div
              className="text-6xl md:text-7xl font-bold text-pure-dark mb-4"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
            >
              {customers.toLocaleString()}+
            </motion.div>
            <p className="text-xl text-medium-grey font-semibold">Total Customers</p>
          </div>

          <div className="text-center">
            <motion.div
              className="text-6xl md:text-7xl font-bold text-pure-dark mb-4"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 200, delay: 0.8 }}
            >
              ${sales.toLocaleString()}+
            </motion.div>
            <p className="text-xl text-medium-grey font-semibold">Total Sales</p>
          </div>

          <div className="text-center">
            <motion.div
              className="text-6xl md:text-7xl font-bold text-pure-dark mb-4"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 200, delay: 1 }}
            >
              {collaborators}+
            </motion.div>
            <p className="text-xl text-medium-grey font-semibold">Collaborators</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeedbackStats;