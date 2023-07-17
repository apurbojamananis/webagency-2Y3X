import "./SelfAssessment.css";
const SelfAssessment = () => {
  return (
    <section
      className="container mx-auto bg-black "
      style={{
        backgroundImage: "url('./bannerRounded.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
      }}
    >
      <div className=" text-white text-center w-full sm:w-1/2 mx-auto py-20">
        <div className="flex justify-center">
          <div className="clock ">
            <div className="second"></div>
          </div>
        </div>
        <div>
          <h2 className="text-[56px] xl:text-[56px] 2xL:text-[68px] leading-[88px] font-semibold mt-10 px-5 sm:px-0">
            Identify your strengths and weaknesses in under four minutes
          </h2>
          <button className="border-2 border-white py-4 px-10 backdrop-filter backdrop-blur-sm hover:bg-white hover:duration-1000 hover:text-black mt-12 font-medium">
            Free self assessment
          </button>
        </div>
      </div>
    </section>
  );
};

export default SelfAssessment;
