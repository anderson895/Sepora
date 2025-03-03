import React from "react";
import { FaUsers, FaCertificate, FaBoxOpen } from "react-icons/fa";
import { motion } from "framer-motion";

const Fact = () => {
  // Data for the counters
  const facts = [
    { id: 1, icon: <FaUsers color="#ff7e67" />, title: "Satisfied Customers", value: "1963" },
    {
      id: 2,
      icon: <FaCertificate color="#ff7e67" />,
      title: "Quality of Service",
      value: "99%",
    },
    {
      id: 3,
      icon: <FaCertificate color="#ff7e67" />,
      title: "Quality Certificates",
      value: "33",
    },
    { id: 4, icon: <FaBoxOpen color="#ff7e67" />, title: "Available Products", value: "789" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="w-full bg-gray-50 py-12 px-8 md:px-16 rounded-lg "
      style={{ transform: "translateY(90px)" }}
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center"
          variants={containerVariants}
        >
          {facts.map((fact) => (
            <motion.div
              key={fact.id}
              className="w-full max-w-md"
              variants={itemVariants}
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="bg-white rounded-lg flex flex-col items-center p-8 text-center shadow-lg">
                <motion.div
                  className="text-[#ff7e67] text-6xl mb-6"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  {fact.icon}
                </motion.div>
                <h4 className="font-bold text-2xl text-gray-800 mb-2">
                  {fact.title}
                </h4>
                <h1 className="text-[#ff7e67] font-extrabold text-5xl">
                  {fact.value}
                </h1>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Fact;
