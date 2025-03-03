import Blog1 from "/sample12.jpg";
import Blog2 from "/sample13.jpg";
import Blog3 from "/sample14.jpg";
import { motion } from "framer-motion";
const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Elevate Your Glow: 5 Luxury Skincare Essentials",
      image: Blog1,
      category: "Skincare",
      date: "Feb 15 2023",
      author: "Ava Thompson",
      excerpt:
        "Discover the ultimate must-haves for a radiant complexion, from silky serums to revitalizing eye creams...",
      link: "#",
    },
    {
      id: 2,
      title: "Redefining Self-Care: The New Age of Premium Cosmetics",
      image: Blog2,
      category: "Makeup",
      date: "Mar 02 2023",
      author: "Isabella Martinez",
      excerpt:
        "Luxury cosmetics go beyond mere beauty. Explore the latest formulas and innovative ingredients that deliver a transformative experience...",
      link: "#",
    },
    {
      id: 3,
      title: "Embrace the Fine Life: Exclusive Fragrances for Modern Tastes",
      image: Blog3,
      category: "Fragrance",
      date: "Apr 10 2023",
      author: "Olivia Banks",
      excerpt:
        "Uncover a world of premium scents crafted to complement every style and occasion, bringing luxury to your everyday routine...",
      link: "#",
    },
  ];
  

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Animates children one by one
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <main className="py-16 w-full bg-gray-50">
      <section className="container mx-auto">
        <header className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">All About Latest Beauty Products</h2>
          <p className="text-lg text-gray-600 mt-4">
            Explore our latest blog posts to learn more about delicious recipes, food trends, and more.
          </p>
        </header>

        {/* Blog Posts */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // Animate on scroll every time in view
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Blog Banner */}
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-fill"
                />
                <div className="absolute top-4 left-4 bg-[#ff7e67] text-white text-sm font-semibold py-1 px-3 rounded">
                  {post.category}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">
                  <time>{post.date}</time> · <span>{post.author}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 hover:text-[#ff7e67] transition-colors">
                  <a href={post.link}>{post.title}</a>
                </h3>
                <p className="text-gray-600 mt-4">{post.excerpt}</p>
                <a
                  href={post.link}
                  className="inline-flex items-center text-[#ff7e67] mt-4 font-semibold hover:underline"
                >
                  Read More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
};

export default Blog;
