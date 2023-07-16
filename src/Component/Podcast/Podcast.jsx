import { GiSoundWaves } from "react-icons/gi";
const Podcast = () => {
  return (
    <section className="container mx-auto">
      <div className="py-28">
        <div className="text-center">
          <p className="font-medium">Start your 2Y3X journey</p>
          <h2 className="text-7xl font-medium">Our programmes and workshops</h2>
        </div>
        <div className="mt-14 mx-32 ">
          <div className="flex items-center gap-5 ">
            <div className="p-2 ">
              <img src="./Podcast1.png" alt="" />
            </div>
            <div className="w-full">
              <div className="flex items-center gap-3">
                <GiSoundWaves className="text-5xl"></GiSoundWaves>
                <h3 className="text-4xl font-semibold">
                  Title for podcast will go here across a line here
                </h3>
              </div>
              <div className="mt-3">
                <audio
                  src=""
                  controls
                  controlsList="noplaybackrate"
                  className="w-full h-10"
                />
              </div>
            </div>
          </div>

          {/* podcast 2 */}
          <div className="flex items-center gap-5 mt-10">
            <div className="p-2">
              <img src="./Podcast2.png" alt="" />
            </div>
            <div className="w-full">
              <div className="flex items-center gap-3">
                <GiSoundWaves className="text-5xl"></GiSoundWaves>
                <h3 className="text-4xl font-semibold">
                  Title for podcast will go here across a line here
                </h3>
              </div>
              <div className="mt-3">
                <audio
                  src="#"
                  controls
                  controlsList="noplaybackrate"
                  className="w-full h-10"
                />
              </div>
            </div>
          </div>

          {/* podcast 3 */}
          <div className="flex items-center gap-5 mt-10">
            <div className="p-2">
              <img src="./Podcast3.png" alt="" />
            </div>
            <div className="w-full">
              <div className="flex items-center gap-3">
                <GiSoundWaves className="text-5xl"></GiSoundWaves>
                <h3 className="text-4xl font-semibold">
                  Title for podcast will go here across a line here
                </h3>
              </div>
              <div className="mt-3">
                <audio
                  src=""
                  controls
                  controlsList="noplaybackrate"
                  className="w-full h-10"
                />
              </div>
            </div>
          </div>
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

export default Podcast;
