import "./Banner.css";

const Banner = () => {
  return (
    <header className="max-h-screen">
      <div className="bannerBackground">
        <div className="conicAnimation"></div>
        <div className="absolute top-0 left-48">
          <img src="./RadialGrad.png" alt="" />
        </div>
      </div>
      <section className="container mx-auto">
        <div className="absolute left-0 right-0 xl:top-[150px] 2xl:top-[270px] pb-80">
          <div className="text-center ">
            <h4 className="text-base ">
              It’s time for <b>2Y3X</b>
            </h4>
            <h1 className="xl:text-[96px]  2xl:text-[120px] font-bold xl:leading-[110px] 2xl:leading-[140px]">
              Triple your revenue <br /> in two years
            </h1>
            <p className="text-xl mt-8">
              Acceleration programme and one-off workshops to <br /> scale your
              business at speed.
            </p>
            <button className="border-2 border-black py-4 px-10 backdrop-filter backdrop-blur-sm hover:bg-black hover:duration-1000 hover:text-white mt-8 font-medium">
              Take the fast self assessment
            </button>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Banner;
