import React from 'react';
import { motion } from 'framer-motion';
import serviceLogo from '../../../assets/service.png';

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    },
  }),
};

const Service = () => {
  const services = [
    {
      title: "Express & Standard Delivery",
      desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
      highlight: false,
    },
    {
      title: "Nationwide Delivery",
      desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
      highlight: true,
    },
    {
      title: "Fulfillment Solution",
      desc: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
      highlight: false,
    },
    {
      title: "Cash on Home Delivery",
      desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      highlight: false,
    },
    {
      title: "Corporate Service / Contract In Logistics",
      desc: "Customized corporate services which include warehouse and inventory management support.",
      highlight: false,
    },
    {
      title: "Parcel Return",
      desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
      highlight: false,
    },
  ];

  return (
    <section className="bg-teal-900 py-16 px-6 mb-3 rounded-2xl">
      <div className="">
        {/* Section Title */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-bold text-white mb-4"
          >
            Our Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-200 max-w-2xl mx-auto"
          >
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
            From personal packages to business shipments — we deliver on time, every time.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className={`${
                service.highlight ? "bg-lime-200" : "bg-white"
              } rounded-xl shadow-sm p-6 hover:shadow-md transition`}
            >
              <div className="mb-4 flex justify-center">
                <img src={serviceLogo} alt={service.title} className="w-12 h-12" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">{service.title}</h3>
              <p
                className={`text-sm ${
                  service.highlight ? "text-gray-700" : "text-gray-600"
                } text-center`}
              >
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
