import React from "react";
import DropDown from "./DropDown";

export default function ({ data }) {
  return (
    <div className="w-[100%] mb-5 p-5 flex overflow-y-hidden">
      {data.map((d, i) => {
        return (
          <div
            key={i}
            className="min-w-[15%] h-[400px] rounded-lg overflow-hidden mr-5 mb-5 bg-zinc-900 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.poster_path
              }`}
              alt=""
              className="w-full h-[40%] object-cover"
            />
            <div className="text-white mb-3 p-3 h-[60%]">
              <h1 className="mt-3 text-xl font-semibold text-white">
                {d.original_title || d.title || d.name}
              </h1>
              <p className="font-lato mt-3 mb-3 text-white">
                {d.overview.slice(0, 200)} ...
                <span className="text-zinc-300">more</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
