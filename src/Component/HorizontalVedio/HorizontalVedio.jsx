import { FaPlay } from "react-icons/fa";

const HorizontalVedio = () => {
  return (
    <section className="container mx-auto">
      <div className="py-24">
        <div className="text-center">
          <p className="font-medium">
            Founder Felix Velarde on the 2Y3X method
          </p>
          <h2 className="text-6xl sm:text-7xl leading-[64px] sm:leading-7xl  font-medium px-2 sm:px-0 mt-5 sm:mt-0">
            Two years to triple revenue. How we do it.
          </h2>
        </div>
        <div className=" my-10">
          <div className="relative">
            <img src="./HSlide1.png" alt="" className="w-full px-5 " />
            <FaPlay className="absolute top-[50%] left-[50%] text-6xl sm:text-9xl text-white opacity-50"></FaPlay>
          </div>
        </div>
        <div className="text-center">
          <button className="border-2 border-black py-4 px-10 backdrop-filter backdrop-blur-sm hover:bg-black hover:duration-1000 hover:text-white mt-8 font-medium">
            Schedule a call
          </button>
        </div>
      </div>
    </section>
  );
};

export default HorizontalVedio;
