import React from "react";
import { Link } from "react-router-dom";
// import ""
export default function Header({ wallpaper }) {
//   console.log("wallpaper in header : ", wallpaper);

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.5),rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original/${wallpaper.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "30% 50% ",// center
        backgroundRepeat:"no-repeat"
      }}
      className="w-full h-[55vh] flex flex-col justify-end items-start p-[5%]" // 50vh
    >
      <h1 className=" w-[70%] text-5xl font-black text-white">
        {wallpaper.original_title || wallpaper.title || wallpaper.name}
      </h1>
      <p className="font-lato mt-3 mb-3 w-[70%] text-white">{wallpaper.overview.slice(0,200)} ...<Link className=" text-blue-400">more</Link></p>
      <p className=" text-white  ">
      <i className="text-yellow-500  ri-megaphone-fill"></i>{wallpaper.release_date  || "No Information"}
      <i className="ml-5 text-yellow-500 ri-album-fill"></i>{wallpaper.media_type.toUpperCase()}

      </p>
      <Link  className="bg-[#6556CD] p-4 rounded text-white  mt-5">Watch Trailer</Link>
    </div>
  );
}
