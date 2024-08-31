import React, { useEffect } from "react";
import { Link } from "react-router-dom";
export default function Sidenav() {
  

  return (
    <>
      <div className=" w-[20%] h-full  border-r-2 border-zinc-200  p-3">
        <h1 className="text-2xl text-white font-bold ">
          <i className="text-[#6556CD] ri-tv-fill mr-2 "></i>
          <span className=" text-2xl ">MOVIE 0'CLOCK</span>
        </h1>
        <nav className=" flex flex-col text-zinc-400 text-xl gap-3">
          <h1 className=" text-white font-semibold text-xl mt-10 mb-5">
            New Feeds
          </h1>
          <Link to="/trending" className=" hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
            <i className="mr-2 ri-fire-fill"></i>
            Trending
          </Link>
          <Link to="/popular" className=" hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
            <i className="mr-2 ri-bard-fill"></i>
            Popular
          </Link>
          <Link to="/movies" className=" hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
            <i className="mr-2 ri-movie-2-fill"></i>
            Movies
          </Link>
          <Link to="/tvshows" className=" hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
            <i className="mr-2 ri-tv-2-fill"></i>
            Tv Shows
          </Link>
          <Link to="/people" className=" hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
            <i className="mr-2 ri-team-fill"></i>
            People
          </Link>
        </nav>

        <hr className="border-none h-[1px] bg-zinc-400"/>
        <nav className=" flex flex-col text-zinc-400 text-xl gap-3">
          <h1 className=" text-white font-semibold text-xl mt-10 mb-5">
            WebSite Information
          </h1>
          <Link className=" hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
            <i className="mr-2 ri-information-2-fill"></i>
            About WebApp
          </Link>
          <Link className=" hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
          <i className="mr-2 ri-phone-fill"></i>
            Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";

// export default function Sidenav() {
//   return (
//     <div className="fixed top-0 left-0 w-[20%] h-full border-r-2 border-zinc-200 p-3 bg-black z-50">
//       <h1 className="text-2xl text-white font-bold">
//         <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
//         <span className="text-2xl">MOVIE 0'CLOCK</span>
//       </h1>
//       <nav className="flex flex-col text-zinc-400 text-xl gap-3">
//         <h1 className="text-white font-semibold text-xl mt-10 mb-5">
//           New Feeds
//         </h1>
//         <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
//           <i className="mr-2 ri-fire-fill"></i>
//           Trending
//         </Link>
//         <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
//           <i className="mr-2 ri-bard-fill"></i>
//           Popular
//         </Link>
//         <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
//           <i className="mr-2 ri-movie-2-fill"></i>
//           Movies
//         </Link>
//         <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
//           <i className="mr-2 ri-tv-2-fill"></i>
//           Tv Shows
//         </Link>
//         <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
//           <i className="mr-2 ri-team-fill"></i>
//           People
//         </Link>
//       </nav>

//       <hr className="border-none h-[1px] bg-zinc-400" />

//       <nav className="flex flex-col text-zinc-400 text-xl gap-3">
//         <h1 className="text-white font-semibold text-xl mt-10 mb-5">
//           WebSite Information
//         </h1>
//         <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
//           <i className="mr-2 ri-information-2-fill"></i>
//           About WebApp
//         </Link>
//         <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
//           <i className="mr-2 ri-phone-fill"></i>
//           Contact Us
//         </Link>
//       </nav>
//     </div>
//   );
// }
