import { FaCar, FaUserShield, FaExchangeAlt, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
const Features = () => {
  const features = [
    {
      icon: <FaCar size={40} color="white" />,
      title: "Free Shipping",
      description: "Free on order over $300",
    },
    {
      icon: <FaUserShield size={40} color="white" />,
      title: "Security Payment",
      description: "100% security payment",
    },
    {
      icon: <FaExchangeAlt size={40} color="white" />,
      title: "30 Day Return",
      description: "30 day money guarantee",
    },
    {
      icon: <FaPhone size={40} color="white" />,
      title: "24/7 Support",
      description: "Support every time fast",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="container mx-auto">
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 mb-4 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white border text-center rounded-lg shadow-md p-6"
              variants={childVariants}
            >
              <div className="relative w-28 h-28 mx-auto mb-6">
                {/* Icon Circle */}
                <div className="absolute top-0 left-0 w-full h-full rounded-full bg-[#ff7e67] flex items-center justify-center">
                  {feature?.icon}
                </div>
                {/* Diamond Shape */}
                <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 rotate-45 w-9 h-9 bg-[#ff7e67]"></div>
              </div>
              {/* Title and Description */}
              <h5 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h5>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Features;
