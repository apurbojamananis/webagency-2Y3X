import "./Programmes.css";

const Programmes = () => {
  return (
    <section className="container mx-auto">
      <div className="my-20">
        <div className="text-center">
          <p className="font-medium">Start your 2Y3X journey</p>
          <h2 className="text-7xl font-medium">Our programmes and workshops</h2>
        </div>
        <div className="mt-16 flex justify-around gap-2">
          <div className=" xl:w-[400px] 2xl:w-[500px]  relative  z-10 pb-20">
            <div className="text-center  ">
              <div className="pt-10">
                <h3 className="font-semibold ">Strategy Map</h3>
              </div>
              <div className="flex justify-center xl:mt-10 2xl:mt-20 xl:h-[150px] 2xl:h-[180px]">
                <img src="./StrategyMap.png" alt="" />
              </div>
              <p className="mt-10 px-16">
                Designed for companies that understand the value in defining a
                clear strategy. We help you do this, quickly.
              </p>

              <div>
                <button className="border-2 border-black py-4 px-10 backdrop-filter backdrop-blur-sm hover:bg-black hover:duration-1000 hover:text-white mt-8 font-medium">
                  Set up a no string call
                </button>
              </div>
            </div>
            <div className="card">
              <div className="building-block"></div>
              <div className="building-block"></div>
              <div className="building-block"></div>
              <div className="building-block"></div>
            </div>
          </div>

          {/* 2nd Card */}

          <div className="xl:w-[400px] 2xl:w-[500px] relative  z-10 pb-20">
            <div className="text-center">
              <div className="pt-10">
                <h3 className="font-semibold ">QuickMap</h3>
              </div>
              <div className="flex justify-center xl:mt-10 2xl:mt-20 xl:h-[150px] 2xl:h-[180px]">
                <img src="./QuickMap.png" alt="" />
              </div>
              <p className="mt-10 px-16">
                The 2Y3X QuickMap® program is only for businesses that we need
                to do reboot or quickly pivot to new opportunity.
              </p>

              <div>
                <button className="border-2 border-black py-4 px-10 backdrop-filter backdrop-blur-sm hover:bg-black hover:duration-1000 hover:text-white mt-8 font-medium">
                  Set up a no string call
                </button>
              </div>
            </div>
            <div className="card">
              <div className="building-block"></div>
              <div className="building-block"></div>
              <div className="building-block"></div>
              <div className="building-block"></div>
            </div>
          </div>

          {/* 3rd Card */}

          <div className=" xl:w-[400px] 2xl:w-[500px]  relative  z-10 pb-20">
            <div className="text-center  ">
              <div className="pt-10">
                <h3 className="font-semibold ">Proposition Development</h3>
              </div>
              <div className="flex justify-center xl:mt-10 2xl:mt-20 xl:h-[150px] 2xl:h-[180px]">
                <img src="./PropositionDevelopment.png" alt="" />
              </div>
              <p className="mt-10 px-16">
                A tight & clearly-articulated value proposition focuses your
                team & signals to the right clients that you are the only fit
                for them.
              </p>

              <div>
                <button className="border-2 border-black py-4 px-10 backdrop-filter backdrop-blur-sm hover:bg-black hover:duration-1000 hover:text-white mt-8 font-medium">
                  Set up a no string call
                </button>
              </div>
            </div>
            <div className="card">
              <div className="building-block"></div>
              <div className="building-block"></div>
              <div className="building-block"></div>
              <div className="building-block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programmes;
