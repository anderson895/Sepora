import { useState } from "react";
import { motion } from "framer-motion";
const MainPage = () => {
  const [mainDish, setMainDish] = useState("/sample.webp");

  const sideDishes = [
    { id: 1, image: "/sample1.webp", alt: "Dish 1" },
    { id: 2, image: "/sample2.webp", alt: "Dish 2" },
    {
      id: 3,
      image:
        "https://image-optimizer-reg.production.sephora-asia.net/images/product_images/closeup_1_Product_840026679718-KVD-Beauty-Full-Sleeve-Mascara-Tattoo_95da7829ce0dbf9ce7c7dd6e2649413b3cb57db6_1728044090.png",
      alt: "Dish 3",
    },
  ];

  const handleMouseEnter = (image) => {
    setMainDish(image);
  };

  const handleMouseLeave = () => {
    setMainDish("/promo-1.png");
  };
  return (
    <section
    id="home"
      className="flex items-end pb-40 justify-between overflow-hidden bg-no-repeat bg-bottom bg-cover w-full min-h-screen mb-12"
      style={{
        backgroundImage: "url('/bg.webp')",
      }}
    >
      {/* Left Section */}
      <div className=" px-8 lg:px-12 pb-48">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold leading-tight text-gray-800">
            Welcome to <span className="text-[#ff7e67]">Sephora</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Unlock exclusive online offers Access to members-only sales and
            events Redeem points to get discounts and gifts
          </p>
          <button className="mt-8 bg-[#ff7e67] hover:bg-[#fda000] text-white font-semibold py-3 px-6 rounded-full transition duration-300 shadow-lg">
            Order Now
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative pr-12 h-full">
        {/* Main Dish Image */}
        <div className="relative w-[200px] border-4 border-[#ff7e67] rounded-full h-[200px] lg:w-[350px] lg:h-[350px] mx-auto animate-spin-slow">
          <img
            src={mainDish}
            alt="Main Dish"
            className="w-full h-full object-cover rounded-full shadow-lg"
          />
        </div>

        {/* Side Dishes */}
        <div className="absolute flex flex-col items-center gap-6 top-[50%] right-[10%] transform -translate-y-1/2">
          {sideDishes.map((dish) => (
            <div
              key={dish.id}
              className="w-28 h-28 cursor-pointer bg-[#ff7e67] rounded-full p-2 flex items-center justify-center shadow-lg"
              onMouseEnter={() => handleMouseEnter(dish.image)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={dish.image}
                alt={dish.alt}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainPage;
