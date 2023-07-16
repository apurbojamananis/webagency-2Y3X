import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Featured.css";

// import { Navigation } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";

const Featured = () => {
  return (
    <section className=" bg-[#D9D9D9] bg-opacity-10">
      <div className=" container mx-auto pt-32 pb-32">
        <div>
          <p className="font-medium">Our Views</p>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-7xl font-medium ">Featured Insights</h2>
            </div>

            <div className="flex gap-5 text-blue-500 text-3xl">
              <button className="border-2 border-yellow-500 py-1 px-3 text-black">
                <FaArrowLeftLong></FaArrowLeftLong>
              </button>
              <button className="border-2 border-yellow-500 py-1 px-3 text-black">
                <FaArrowRightLong></FaArrowRightLong>
              </button>
            </div>
          </div>
        </div>
        <div className="my-10">
          <Swiper
            slidesPerView={1.5}
            // navigation={true}
            // modules={[Navigation]}
            className="mySwiper bg-[#D9D9D9] bg-opacity-10 Featured"
          >
            <SwiperSlide className="featuredSlide">
              <div className="pr-10 bg-[#D9D9D9] bg-opacity-10">
                <div className="relative">
                  <div className="h-[440px]">
                    <img src="./image1.png" alt="" />
                  </div>
                  <div className="flex items-center gap-2 absolute top-5 left-4 text-white">
                    <FaClock></FaClock>
                    <span>5 Min</span>
                  </div>
                </div>
                <div className="text-left">
                  <p className="opacity-30 mt-5">Content tag here</p>
                  <h2 className="text-[40px] leading-[60px] font-semibold">
                    Title for featured story will go here across two lines if
                    needed
                  </h2>
                  <p className="text-xl leading-[30px] mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit,sit amet feugiat lectus.
                    Class{" "}
                  </p>
                  <button className="mt-5 font-semibold hover:text-yellow-500">
                    Read More
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="featuredSlide">
              {" "}
              <div className="pr-10 bg-[#D9D9D9] bg-opacity-10">
                <div className="relative">
                  <div className="h-[440px]">
                    <img src="./image2.png" alt="" />
                  </div>
                  <div className="flex items-center gap-2 absolute top-5 left-4 text-white">
                    <FaClock></FaClock>
                    <span>5 Min</span>
                  </div>
                </div>
                <div className="text-left">
                  <p className="opacity-30 mt-5">Content tag here</p>
                  <h2 className="text-[40px] leading-[60px] font-semibold">
                    Title for featured story will go here across two lines if
                    needed
                  </h2>
                  <p className="text-xl leading-[30px] mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit,sit amet feugiat lectus.
                    Class{" "}
                  </p>
                  <button className="mt-5 font-semibold hover:text-yellow-500">
                    Read More
                  </button>
                </div>
              </div>
            </SwiperSlide>

            {/* third slide */}
            <SwiperSlide className="featuredSlide">
              <div className="pr-10 bg-[#D9D9D9] bg-opacity-10">
                <div className="relative">
                  <div className="h-[440px]">
                    <img src="./image1.png" alt="" />
                  </div>
                  <div className="flex items-center gap-2 absolute top-5 left-4 text-white">
                    <FaClock></FaClock>
                    <span>5 Min</span>
                  </div>
                </div>
                <div className="text-left">
                  <p className="opacity-30 mt-5">Content tag here</p>
                  <h2 className="text-[40px] leading-[60px] font-semibold">
                    Title for featured story will go here across two lines if
                    needed
                  </h2>
                  <p className="text-xl leading-[30px] mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit,sit amet feugiat lectus.
                    Class{" "}
                  </p>
                  <button className="mt-5 font-semibold hover:text-yellow-500">
                    Read More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="text-center">
          <button className="border-2 border-black py-2 px-10 backdrop-filter backdrop-blur-sm hover:bg-black hover:duration-1000 hover:text-white mt-12 font-medium">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
