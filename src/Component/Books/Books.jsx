import Animation from "./Animation";

const Books = () => {
  return (
    <section className="container mx-auto ">
      <div className="sm:flex justify-between my-40 relative z-10">
        <div className="sm:w-2/5 px-5 sm:px-0 xl:pr-10 2xl:pr-40">
          <p className="font-medium">The Theory</p>
          <h2 className="text-6xl sm:text-7xl font-medium leading-[70px] sm:leading-[90px]">
            Scale at speed
          </h2>
          <p className="text-2xl sm:text-3xl font-medium mt-6">
            Our programmes are based on the book Scale at Speed by 2Y3X Felix
            Velarde, which translates the best business theory into easy
            actionable steps.
          </p>
          <button className="border-2 border-black py-2 px-10 backdrop-filter backdrop-blur-sm hover:bg-black hover:duration-1000 hover:text-white mt-12 font-medium">
            See More
          </button>
        </div>
        <div className="sm:w-3/5 mt-20 px-16">
          <div className="flex justify-center">
            <img src="./Book.png" alt="" />
          </div>
        </div>
      </div>
      <div className="-mt-80 z-1">
        <Animation></Animation>
      </div>
    </section>
  );
};

export default Books;
