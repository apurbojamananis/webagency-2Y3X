import { FaPlay } from "react-icons/fa";

const Deeson = () => {
  return (
    <section className="container mx-auto bg-[#FFB902]">
      <div className="sm:flex">
        <div className="w-full sm:w-3/5 xl:px-10 2xl:px-16 pt-20 2xl:pt-32 px-8">
          <p className="font-medium">What our clients say</p>
          <p className="text-[32px] sm:text-[40px] mt-5 font-semibold ">
            “Their leadership and challenge really helped us set us up for
            growth and a subsequent exit. I’d thoroughly recommend working with
            them and would love the opportunity to work with them again in the
            future.”
          </p>
          <p className="mt-9">Simon Wakeman | Managing director</p>
          <img src="./AgencyLogo/Deeson.png" alt="" className="mt-9" />
        </div>
        <div className="w-full sm:w-2/5 flex justify-end mt-20 xm:mt-0">
          <div className="relative">
            <img src="./Rectangle 19.png" alt="" />
            <FaPlay className="absolute top-[50%] left-[50%] text-6xl sm:text-9xl text-white opacity-80"></FaPlay>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deeson;
