import React from "react";
import { Link } from "react-router-dom";

export default function Card({ data }) {
  if (!data || data.length === 0) {
    return (
      <p className="text-center text-gray-500">No trending data available.</p>
    );
  }

  return (
    <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-6 p-4">
      {data.map((c, i) => (
        <Link
          to={`/detail/${c.id}`} // Assuming you have a detail route set up for items
          key={i}
          className="relative overflow-hidden shadow-md hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          <div className="relative aspect-[4/7]">
            <img
              src={`https://image.tmdb.org/t/p/original/${
                c.backdrop_path || c.poster_path || c.profile_path
              }`} // Correct src usage
              className="absolute inset-0 h-full w-full object-cover"
              alt={c.original_title || c.title || c.name} // Adding a descriptive alt text
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>{" "}
            {/* Overlay */}
          </div>
          <div className="p-4">
            <h1 className="mt-2 text-xl font-semibold text-zinc-200">
              {c.original_title || c.title || c.name}
            </h1>
          </div>
          {c.vote_average && (
            <div className=" absolute right-[0] bottom-[20%] rounded-full text-xl font-semibold w-[5vh] h-[5vh] flex justify-center items-center bg-yellow-600 text-white">
              {parseFloat(c.vote_average.toFixed(1))}
              <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}
