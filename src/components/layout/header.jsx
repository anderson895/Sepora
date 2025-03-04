import { useEffect, useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add the event listener for scroll
    window.addEventListener("scroll", handleScroll);
    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`z-50 fixed top-0 w-full bg-white  transition-all duration-300 ${
        isScrolled ? "shadow-md py-2" : "shadow-none py-4"
      }`}
    >
      <div className="flex items-center justify-between px-4 sm:px-8 ">
        {/* Logo Section */}
        <div className="flex items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-[#ff7e67]">
            Sephora
          </h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button className="text-gray-600 hover:text-gray-800">
            <FaBars size={24} />
          </button>
        </div>

        {/* Navigation Links and Icons */}
        <div className="hidden lg:flex items-center">
          {/* Navigation Links */}
          <nav className="flex items-center space-x-6 sm:space-x-10 text-gray-600">
            <a
              href="#home"
              className="hover:text-[#ff7e67] text-base sm:text-lg transition-colors duration-300 ease-in-out"
            >
              Home
            </a>
            <div className="relative group">
              <a
                href="#menus"
                className="hover:text-[#ff7e67] text-base sm:text-lg transition-colors duration-300 ease-in-out"
              >
                Menu
              </a>
            </div>
            <a
              href="#best"
              className="hover:text-[#ff7e67] text-base sm:text-lg transition-colors duration-300 ease-in-out"
            >
              Best Seller
            </a>
            <a
              href="#contact"
              className="hover:text-[#ff7e67] text-base sm:text-lg transition-colors duration-300 ease-in-out"
            >
              Contact
            </a>
            <button
              onClick={() => navigate("/login")}
              className="text-gray-500 hover:text-gray-600 transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
              Login
            </button>
          </nav>

          {/* Icon Buttons */}
          <div className=""></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* {isMenuOpen && (
          <nav className="lg:hidden h-max pb-4 bg-white shadow-md">
            <a
              href="/"
              className="block px-4 py-3 hover:bg-gray-100 text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/Menus"
              className="block px-4 py-3 hover:bg-gray-100 text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </a>
            <a
              href="/Reservation"
              className="block px-4 py-3 hover:bg-gray-100 text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Reservation
            </a>
            <a
              href="/Contact-Us"
              className="block px-4 py-3 hover:bg-gray-100 text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            {isAuthenticated ? (
              <div className="flex flex-col gap-4 sm:gap-6">
                <button
                  onClick={() => navigate("/My-Cart")}
                  className=" hover:text-blue-600 text-start pl-4 text-gray-600 transition-transform duration-300 ease-in-out transform hover:scale-110"
                >
                  My Cart
                </button>
                <Popover
                  content={userPopoverContent}
                  trigger="click"
                  placement="bottomRight"
                >
                  <button className=" hover:text-[#ff7e67] text-start pl-4 text-gray-600 transition-transform duration-300 ease-in-out transform hover:scale-110">
                    My Profile
                  </button>
                </Popover>
              </div>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="text-gray-500 hover:text-gray-600 transition-transform duration-300 ease-in-out transform hover:scale-110"
              >
                Login
              </button>
            )}
          </nav>
        )} */}
    </header>
  );
};

export default Header;
