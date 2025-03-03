import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaQuoteRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import customer1 from "/sample16.jpg";
import customer2 from "/sample15.jpg";
import customer3 from "/sample17.jpg";
import { CustomRate } from "../components/ui/CustomRate";

const Testimonial = () => {
  const testimonials = [
    {
      text: "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s.",
      name: "Client Name 1",
      profession: "Profession 1",
      image: customer1,
      stars: 4,
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s.",
      name: "Client Name 2",
      profession: "Profession 2",
      image: customer2,
      stars: 5,
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s.",
      name: "Client Name 3",
      profession: "Profession 3",
      image: customer3,
      stars: 3,
    },
  ];

  return (
    <section className="w-full my-32 py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h4 className="text-[#ff7e67] text-xl font-medium uppercase">
            Our Testimonial
          </h4>
          <h1 className="text-gray-800 text-3xl md:text-4xl font-bold">
            What Our Clients Say
          </h1>
        </div>

        {/* Swiper Section */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1} // Default for smaller screens
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-lg p-6 relative mx-2">
                {/* Quote Icon */}
                <FaQuoteRight
                  className="text-gray-400 text-3xl absolute bottom-4 right-4"
                />

                {/* Testimonial Text */}
                <p className="text-gray-600 italic mb-6">
                  "{testimonial.text}"
                </p>

                {/* Client Details */}
                <div className="flex items-center">
                  {/* Client Image */}
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-yellow-500"
                  />

                  {/* Client Info */}
                  <div className="ml-4">
                    <h4 className="text-gray-800 font-bold text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-sm">{testimonial.profession}</p>

                    {/* Star Ratings */}
                    <div className="flex mt-2">
                      <CustomRate />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
