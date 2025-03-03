import React from "react";
import { FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer =() => {
  return (
<section id="contact"
  className="relative w-full h-[591.8px] bg-[#45595b] text-gray-300 py-16 bg-no-repeat bg-bottom bg-contain border-b-2 border-gray-700"
  style={{
    backgroundImage: "url('/footer-illustration.png')",
  }}
>
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="border-b border-[#ff7e67]/50 pb-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Logo Section */}
            <div>
              <a href="#" className="text-3xl font-bold text-[#ff7e67]">
                Cosmetics
              </a>
              <p className="text-gray-400 mt-2">Make it Taste!</p>
            </div>

            {/* Subscribe Section */}
            <div className="relative">
              <input
                type="text"
                placeholder="Your Email"
                className="w-full py-3 px-4 rounded-full border border-gray-600 bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none"
              />
              <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#ff7e67] text-gray-900 px-4 py-2 rounded-full hover:bg-yellow-400">
                Subscribe Now
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-end space-x-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-gray-700 transition"
              >
                <FaTwitter className="text-[#ff7e67]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-gray-700 transition"
              >
                <FaFacebookF className="text-[#ff7e67]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-gray-700 transition"
              >
                <FaYoutube className="text-[#ff7e67]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-gray-700 transition"
              >
                <FaLinkedinIn className="text-[#ff7e67]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Why People Like Us */}
          <div>
            <h4 className="text-lg font-semibold text-[#ff7e67] mb-3">
              Why People Like Us!
            </h4>
            <p className="text-gray-400 mb-4">
              Typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with Aldus PageMaker including of Lorem Ipsum.
            </p>
            <a
              href="#"
              className="inline-block px-4 py-2 border border-[#ff7e67] rounded-full text-[#ff7e67] hover:bg-[#ff7e67] hover:text-gray-900 transition"
            >
              Read More
            </a>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-[#ff7e67] mb-3">
              Contact Info
            </h4>
            <ul className="space-y-2">
              <li>+1 (062) 109-9222</li>
              <li>Info@YourGmail24.com</li>
              <li>
                <address className="not-italic">
                  153 Williamson Plaza, Maggieberg, MT 09514
                </address>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold text-[#ff7e67] mb-3">
              Opening Hours
            </h4>
            <ul className="space-y-2">
              <li>Monday-Friday: 08:00-22:00</li>
              <li>Tuesday 4PM: Till Midnight</li>
              <li>Saturday: 10:00-16:00</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Overlay Image */}
      <div
        className="absolute bottom-[-1px] left-[-160px] w-[160px] animate-running-cycle"
        style={{
          content: "url('/delivery-boy.svg')",
          animation: "running-cycle 20s linear infinite",
        }}
      ></div>
    </section>
  );
};

export default Footer;
