import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Menus = () => {
  const menuItems = [
    {
      title: "Luxury Skincare",
      description: "Discover high-end skincare essentials for a radiant glow.",
      image: "/sample1.webp",
      link: "/Beauty/luxury-skincare",
    },
    {
      title: "Organic Beauty",
      description: "Explore natural and organic beauty products for healthy skin.",
      image: "/sample2.webp",
      link: "/Beauty/organic-beauty",
    },
    {
      title: "Makeup Essentials",
      description: "Find must-have makeup products for every occasion.",
      image: "/sample3.webp",
      link: "/Beauty/makeup-essentials",
    },
    {
      title: "Fragrances",
      description: "Indulge in a collection of exquisite perfumes and scents.",
      image: "/sample4.webp",
      link: "/Beauty/fragrances",
    },
    {
      title: "Haircare Solutions",
      description: "Nourish and style your hair with premium haircare products.",
      image: "/sample5.webp",
      link: "/Beauty/haircare",
    },
    {
      title: "Beauty Tools",
      description: "Upgrade your routine with high-quality beauty accessories.",
      image: "/sample6.webp",
      link: "/Beauty/beauty-tools",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      className="container mx-auto py-16"
      initial="hidden"
      id="menus"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Section Header */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h1 className="text-3xl font-bold text-gray-800">Menus</h1>
        <p className="text-gray-500">Choose The Items You Want</p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        variants={containerVariants}
        viewport={{ once: false, amount: 0.2 }}
      >
        {menuItems.map((category, index) => (
          <motion.div
            key={index}
            className="flex justify-center"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="menu-card bg-[#f4f6f8] border border-[#ff7e67] rounded-lg shadow-md p-6 flex flex-col items-center text-center h-full w-full">
              {/* Circular Image */}
              <div className="flex justify-center">
                <motion.img
                  src={category.image}
                  alt={category.title}
                  className="h-32 w-32 object-cover rounded-full border-4 border-[#ff7e67]"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: false, amount: 0.2 }}
                />
              </div>

              {/* Title and Description */}
              <div className="mt-4">
                <h5 className="text-xl font-semibold text-gray-800">
                  <a href="#" className="hover:text-orange-600 transition-colors">
                    {category.title}
                  </a>
                </h5>
                <p className="text-sm text-gray-600 mt-2">{category.description}</p>
              </div>

              {/* Button */}
              <Link
                to={category.link}
                className="mt-6 w-full px-4 py-2 text-sm font-semibold text-[#ff7e67] border border-[#ff7e67] rounded-full hover:bg-[#ff7e67] hover:text-white transition-colors"
              >
                View Menu
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Menus;
