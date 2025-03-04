import { useEffect, useState } from "react";
import { PiArrowCircleUpDuotone } from "react-icons/pi";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll
    });
  };

  return (
    <>
    {!isVisible ? null : <button
      onClick={scrollToTop}
      className="fixed bottom-4 animate-bounce right-4 p-3 cursor-pointer bg-[#ff7e67] text-white rounded-full shadow-lg transition-colors duration-300"
    >
        <PiArrowCircleUpDuotone size={40} />
    </button>}
    </>
  );
}
