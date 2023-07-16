import { FaLinkedinIn } from "react-icons/fa";

const Team = () => {
  return (
    <section className="container mx-auto">
      <div className="flex gap-10 justify-around mt-40 mb-24">
        <div className="w-1/2 px-10 flex flex-col justify-between">
          <div className="w-1/2">
            <p className="font-medium">Builders and Leaders</p>
            <h2 className="text-7xl font-medium leading-[90px]">
              Growth acceleration specialists
            </h2>
            <p className="font-medium mt-6">
              We’ve been there so you can do that
            </p>
          </div>
          <div>
            <div>
              <img src="./Mwangala.png" alt="" />
            </div>
            <h2 className="text-4xl font-medium mt-8">
              Mwangala (Mo) Lishomwa
            </h2>
            <h4 className="font-semibold mt-5">Managing Director</h4>
            <button className="border-2 border-black p-1 mt-5 hover:bg-black hover:text-white">
              <FaLinkedinIn className=" text-xl "></FaLinkedinIn>
            </button>
          </div>
          <div>
            <button className="border-2 border-black py-4 px-10 backdrop-filter backdrop-blur-sm hover:bg-black hover:duration-1000 hover:text-white mt-12 font-medium">
              Meet the Team
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/2 pl-32">
          <div>
            <div>
              <img src="./Felix.png" alt="" />
            </div>
            <h2 className="text-4xl font-medium mt-8">Felix Velarde</h2>
            <h4 className="font-semibold mt-5">Founder</h4>
            <button className="border-2 border-black p-1 mt-5 hover:bg-black hover:text-white">
              <FaLinkedinIn className=" text-xl"></FaLinkedinIn>
            </button>
          </div>
          <div>
            <div className="mt-28">
              <img src="./Steve.png" alt="" />
            </div>
            <h2 className="text-4xl font-medium mt-8">Steve Mcnulty</h2>
            <h4 className="font-semibold mt-5">Executive Partner</h4>
            <button className="border-2 border-black p-1 mt-5 hover:bg-black hover:text-white">
              <FaLinkedinIn className=" text-xl"></FaLinkedinIn>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
