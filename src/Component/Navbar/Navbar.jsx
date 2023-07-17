// import { FaBars } from "react-icons/fa";
// import { useEffect, useState } from "react";

// const Navbar = () => {
//   const [scrolling, setScrolling] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setScrolling(true);
//       } else {
//         setScrolling(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const headerStyle = {
//     backgroundColor: scrolling ? "rgba(255, 185, 2, 1)" : "transparent",
//   };

//   return (
//     <header className="bg-yellow-500 sticky top-0 z-[1000]">
//       <div className="container mx-auto ">
//         <div className="flex items-center justify-between p-5 ">
//           <img src="./Logo.png" alt="" />
//           <div className="border-solid border-2 border-black p-2">
//             <FaBars className="text-2xl"></FaBars>
//           </div>
//         </div>
//       </div>
//     </header>

//      <header className="fixed left-0 sm:left-0 right-[20%] sm:right-0 top-0 z-50" style={headerStyle}>
//       <div className="container mx-auto">
//         <div className="flex items-center justify-between p-5 ">
//           <img src="./Logo.png" alt="" />
//           <div className="border-solid border-2 border-black p-2">
//             <FaBars className="text-2xl"></FaBars>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
