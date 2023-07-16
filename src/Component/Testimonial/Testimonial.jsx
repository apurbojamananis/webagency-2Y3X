// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./test.css";
import { FaStar } from "react-icons/fa";

// import required modules
// import { Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <section
      className="container mx-auto"
      style={{
        backgroundImage: "url('./Review_bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-white bg-opacity-0">
        <div className="flex py-32">
          <div className="w-1/3  flex items-center">
            <div className="px-10">
              <p className="font-medium">Making Change</p>
              <h2 className="text-7xl font-medium">Consistent results</h2>
            </div>
          </div>
          <div className="w-2/3">
            <Swiper slidesPerView={2.2} spaceBetween={30}>
              <SwiperSlide className="border-2 border-yellow-500 hover:bg-yellow-500 mx-2">
                <div className="absolute top-0 newCard ">
                  <div className="py-10 px-5 ">
                    <div className="flex gap-5 text-yellow-500 textColor">
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                    </div>
                    <h2 className="text-left text-[26px] font-semibold mt-3">
                      Focus on what really matters
                    </h2>
                    <p className="text-left text-xl mt-5">
                      “Brilliant at getting management to focus on what really
                      matters and getting us to go of that are not
                      contributing to our strategic aims.”
                    </p>
                    <div className="mt-8 flex items-center gap-3">
                      <div className="w-16 ">
                        <img
                          src="https://randomuser.me/api/portraits/men/40.jpg"
                          alt=""
                          className="rounded-[50%]"
                        />
                      </div>
                      <div className="text-left">
                        <h5 className="font-semibold">Fred More</h5>
                        <p>COO, Matter of Form</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="border-2 border-yellow-500 hover:bg-yellow-500 mx-2">
                <div className="absolute top-0 newCard">
                  <div className="py-10 px-5">
                    <div className="flex gap-5 text-yellow-500 textColor">
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                    </div>
                    <h2 className="text-left text-[26px] font-semibold mt-3">
                      From reactive to being really proactive
                    </h2>
                    <p className="text-left text-xl mt-5">
                      “We moved from being reactive to being really proactive everyday in
                      absolutely everything we do. So we really happy with it”
                    </p>
                    <div className="mt-8 flex items-center gap-3">
                      <div className="w-16 ">
                        <img
                          src="https://randomuser.me/api/portraits/women/41.jpg"
                          alt=""
                          className="rounded-[50%]"
                        />
                      </div>
                      <div className="text-left">
                        <h5 className="font-semibold">Kelly Mackenzie</h5>
                        <p>Founder, White Bear</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="border-2 border-yellow-500 hover:bg-yellow-500 mx-2">
                <div className="absolute top-0 newCard">
                  <div className="py-10 px-5">
                    <div className="flex gap-5 text-yellow-500 textColor">
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                    </div>
                    <h2 className="text-left text-[26px] font-semibold mt-3">
                      Reactive to being really proactive
                    </h2>
                    <p className="text-left text-xl mt-5">
                      “Brilliantly We moved from being reactive to being really
                      proactive in absolutely every thing we do things that are
                      not contributing .”
                    </p>
                    <div className="mt-8 flex items-center gap-3">
                      <div className="w-16 ">
                        <img
                          src="https://randomuser.me/api/portraits/women/45.jpg"
                          alt=""
                          className="rounded-[50%]"
                        />
                      </div>
                      <div className="text-left">
                        <h5 className="font-semibold">Elizabeth Queen</h5>
                        <p>Vice President, THP</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
