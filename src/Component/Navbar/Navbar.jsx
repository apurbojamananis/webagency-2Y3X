// import { FaBars } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <header className="fixed left-0 right-0 top-0 z-10">
//       <div className="container mx-auto flex items-center justify-between p-5">
//         <img src="./Logo.png" alt="" />
//         <div className="border-solid border-2 border-black p-2">
//           <FaBars className="text-2xl "></FaBars>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar = () => {
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
    backgroundColor: scrolling ? "rgba(255, 185, 2, 1)" : "transparent",
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50" style={headerStyle}>
      <div className="container mx-auto flex items-center justify-between p-5 ">
        <img src="./Logo.png" alt="" />
        <div className="border-solid border-2 border-black p-2">
          <FaBars className="text-2xl"></FaBars>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
