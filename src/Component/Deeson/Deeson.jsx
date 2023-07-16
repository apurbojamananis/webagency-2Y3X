import { FaPlay } from "react-icons/fa";

const Deeson = () => {
  return (
    <section className="container mx-auto bg-[#FFB902]">
      <div className="flex">
        <div className="w-3/5 xl:px-10 2xl:px-16 xl:pt-20 2xl:pt-32">
          <p className="font-medium">What our clients say</p>
          <p className="text-[40px] mt-5 font-semibold ">
            “Their leadership and challenge really helped us set us up for
            growth and a subsequent exit. I’d thoroughly recommend working with
            them and would love the opportunity to work with them again in the
            future.”
          </p>
          <p className="mt-9">Simon Wakeman | Managing director</p>
          <img src="./AgencyLogo/Deeson.png" alt="" className="mt-9" />
        </div>
        <div className="w-2/5 flex justify-end ">
          <div className="relative">
            <img src="./Rectangle 19.png" alt="" />
            <FaPlay className="absolute top-[50%] left-[50%] text-9xl text-white opacity-80"></FaPlay>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deeson;
