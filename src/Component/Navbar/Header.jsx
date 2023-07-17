import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerStyle = {
    backgroundColor: scrolling ? "#fbbf24" : "",
  };
  return (
    <header
      className="bg-[#f3f37a] sm:bg-inherit sticky sm:fixed sm:left-0 sm:right-0 top-0 z-[9999]"
      style={headerStyle}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between p-5">
          <img src="./Logo.png" alt="Logo" />
          <div className="border-solid border-2 border-black p-2">
            <FaBars className="text-2xl" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
