const Footer = () => {
  return (
    <footer
      className="bg-black text-white"
      style={{
        backgroundImage: "url('./FooterBg1.png'), url('./Footerbg2.png')",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "top left, right bottom",
      }}
    >
      <section className="container mx-auto py-20 px-10 relative">
        <div>
          <img src="./Logo2.png" alt="" />
        </div>
        <div className="sm:flex justify-between pt-10">
          <div>
            <h5 className="font-medium">Contact</h5>
            <div className="flex gap-5 mt-4 sm:mt-8">
              <div className="flex flex-col gap-y-4 sm:gap-y-8">
                <p>UK & Europe</p>
                <p>USA & Canada</p>
              </div>
              <div className="flex flex-col gap-y-4 sm:gap-y-8">
                <p>
                  <a href="#">info@2y3x.com</a>
                </p>
                <p>
                  <a href="#">naw@2y3x.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="pt-10 sm:pt-0">
            <h5 className="font-medium">2Y3X Programme</h5>
            <ul className="flex flex-col gap-y-4 mt-4 sm:mt-8">
              <li>Events</li>
              <li>Insights & Media</li>
              <li>Meet the team</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="mt-10 sm:mt-0">
            <div className="bg-white bg-opacity-10 p-5 sm:p-10 w-[90%] sm:w-[70%] text-center">
              <h5 className="font-medium">2Y3X Programme</h5>
              <p className="mt-6">
                This is a how-to guide, matching theory with easily actionable
                steps.
              </p>
              <button className="border-2 border-white py-2 px-10 backdrop-filter backdrop-blur-sm hover:bg-white hover:duration-1000 hover:text-black mt-8 font-medium">
                Buy the book
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <hr />
      </section>
      <section className="container mx-auto">
        <div className="sm:flex items-center justify-between py-14 px-8">
          <div>
            <div>
              <ul className="flex items-center gap-5">
                <li>Terms</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <p className="mt-3">
              &copy 2022 All rights reserved. 2Y3X , QuickMap , and Earnout
              Maximiser® are Registered Trade Marks
            </p>
          </div>
          <div className="mt-10 sm:mt-0">
            <img src="./GBC.png" alt="" />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
