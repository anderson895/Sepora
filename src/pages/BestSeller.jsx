import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { CustomRate } from "../components/ui/CustomRate";
import { products } from "../utils/constant";
import { motion } from "framer-motion";
const Bestseller = () => {
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
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="best" className="container mx-auto px-4 py-12">
      {/* Section Heading */}
      <motion.div
        className="text-center mx-auto mb-12 max-w-3xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold text-gray-800">Bestseller Products</h1>
        <p className="text-gray-600 mt-4">
          Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
        </p>
      </motion.div>

      {/* First Grid Layout (Circular Images) */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {products.slice(0, 6).map((product) => (
          <motion.div
            key={product.id}
            className="bg-[#f4f6f8] p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-center"
            variants={cardVariants}
          >
            {/* Image */}
            <div className="flex-shrink-0">
              <img
                src={product.image}
                alt={product.title}
                className="w-24 h-24 rounded-full object-cover mx-auto sm:mx-0"
              />
            </div>

            {/* Product Details */}
            <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
              <h5 className="text-lg font-semibold text-gray-800">{product.title}</h5>
              <div className="flex justify-center sm:justify-start mt-2 text-yellow-500">
                <CustomRate />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mt-2">$850</h4>
              <motion.button
                className="mt-4 flex items-center gap-2 px-4 py-2 border border-[#ff7e67] rounded-full text-[#ffa62b] hover:bg-blue-100 transition w-full sm:w-auto"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaShoppingBag color="#ff7e67" /> Add to cart
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Second Grid Layout (Adjusted Image Size) */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {products.slice(6).map((product) => (
          <motion.div
            key={product.id}
            className="bg-white pt-6 border border-[#f4f6f8] rounded-lg shadow-lg overflow-hidden"
            variants={cardVariants}
          >
            {/* Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-contain"
            />

            {/* Product Details */}
            <div className="p-6 w-full text-center flex flex-col">
              <h5 className="text-lg font-semibold text-gray-800">{product.name}</h5>
              <div className="flex justify-center mt-2 text-yellow-500">
                <CustomRate />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mt-2">${product.price}</h4>
              <motion.button
                className="mt-4 w-full flex text-center justify-center items-center gap-2 px-4 py-2 border border-[#ffa62b] rounded-full text-[#ffa62b] hover:bg-blue-100 transition sm:w-auto"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaShoppingBag color="#ffa62b" /> <p>Add to cart</p>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Bestseller;
