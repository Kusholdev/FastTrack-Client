import React from "react";
import { motion } from "framer-motion";

const ParcelTrackingFeatures = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const featureData = [
    {
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
      icon: "🛡️",
    },
    {
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
      icon: "🛡️",
    },
    {
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
      icon: "📞",
      horizontal: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6 m-4">
      <div className="max-w-6xl w-full">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Premium Parcel Delivery Services
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {featureData.map((feature, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-lg flex flex-col ${
                feature.horizontal ? "md:col-span-2" : ""
              }`}
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 12px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div
                className={`flex ${
                  feature.horizontal ? "flex-col md:flex-row" : "flex-col"
                } items-center`}
              >
                <div className="flex-shrink-0 mb-4 md:mb-0">
                  <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-3xl">
                    {feature.icon}
                  </div>
                </div>

                <div
                  className={`${
                    feature.horizontal ? "md:ml-6 md:text-left" : "text-center"
                  } mt-4 md:mt-0 flex-1`}
                >
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ParcelTrackingFeatures;
