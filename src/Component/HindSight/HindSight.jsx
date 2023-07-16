// import backgroundImage from "../../../public/Background_img.png";

const HindSight = () => {
  return (
    <section className="bg-black text-white">
      <div className="">
        <div
          className="container mx-auto flex"
          style={{
            backgroundImage: "url('./Background_img.png')",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full h-full flex justify-center items-center backdrop-brightness-50 py-32 ">
            <div className="w-[50%] ">
              <div className="absolute top-[222px] left-[150px]">
                <div className="flex items-center rotate-90 ">
                  <div>
                    <button className="py-1 px-7 bg-white hover:bg-yellow-500 text-black font-semibold">
                      Your Goal
                    </button>
                  </div>
                  <div className="w-20 h-1 bg-white"></div>
                </div>
              </div>
              <div className="absolute top-[335px] left-[210px]">
                <div className="flex items-center rotate-90 ">
                  <div>
                    <button className="py-1 px-7 bg-white hover:bg-yellow-500 text-black font-semibold">
                      Implement
                    </button>
                  </div>
                  <div className="w-20 h-1 bg-white"></div>
                </div>
              </div>
              <div className="absolute top-[495px] left-[170px]">
                <div className="flex items-center rotate-90 ">
                  <div>
                    <button className="py-1 px-7 bg-white hover:bg-yellow-500 text-black font-semibold">
                      Prototype
                    </button>
                  </div>
                  <div className="w-20 h-1 bg-white"></div>
                </div>
              </div>

              <div className="absolute top-[530px] left-[75px]">
                <div className="flex items-center rotate-90 ">
                  <div>
                    <button className="py-1 px-7 bg-white hover:bg-yellow-500 text-black font-semibold">
                      Research
                    </button>
                  </div>
                  <div className="w-20 h-1 bg-white"></div>
                </div>
              </div>
            </div>
            <div className="w-[50%] pr-20">
              <p className="font-medium">Getting Started</p>
              <h2 className="text-7xl font-medium mt-3">Free hindsight</h2>
              <p className="text-3xl mt-10">
                How do you grow from £2m to £10m? From 30 to 100 staff? From
                ownership to exit?
              </p>
              <p className="text-3xl mt-8">
                The 2Y3X framework provides a clear how to, while our industry
                experience provides the invaluable done that.
              </p>

              <p className="text-3xl mt-8">
                {" "}
                We’ve got to the top and want to help next generation get there
                too. A chat with our growth specialists will help you step back,
                take stock, and chart your next move.
              </p>
              <button className="border-2 border-white py-4 px-10 backdrop-filter backdrop-blur-sm hover:bg-white hover:duration-1000 hover:text-black mt-12 font-medium">
                Take the fast self assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HindSight;
