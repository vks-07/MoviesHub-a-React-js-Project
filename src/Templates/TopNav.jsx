import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../utils/Axios";

export default function TopNav() {
  const [query, setQuery] = useState("");
  // console.log("query :", query);
  const [search, setSearch] = useState([]);
  const getSearches = async () => {
    try {
      const d = await axios.get(`/search/multi?query=${query}`);
      // console.log(d);
      setSearch(d.data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <>
      <div className=" w-[80%] h-[10vh] relative flex mx-auto items-center ">
        <i className="ri-search-line text-zinc-400 text-3xl"></i>
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="text"
          className=" w-[50%]  mx-10 p-5 text-xl text-zinc-200 outline-none border-none bg-transparent"
          placeholder="Search anything"
        />
        {query.length > 0 && (
          <i
            onClick={() => setQuery("")}
            className=" ri-close-fill text-zinc-400 text-3xl right-0"
          ></i>
        )}
        {/* some changes in css */}
        <div className="max-[60%] max-h-[55vh] absolute bg-zinc-200 top-[100%] left-[5%] overflow-auto ">
          {/* inline block */}
          {search.map((s, i) => {
            return (
              <Link
                key={i}
                className="font-semibold hover:text-black border-zinc-100 hover:bg-zinc-300 duration-300 text-zinc-600 p-10 w-[100%]  flex justify-start items-center border-b-2 "
              >
                <img
                  className=" w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg"
                  src={
                    s.backdrop_path || s.profile_path
                      ? `https://image.tmdb.org/t/p/original/${
                          s.backdrop_path || s.profile_path
                        }`
                      : "https://img.icons8.com/plasticine/100/no-image.png"
                  }
                  alt=""
                />

                <span>{s.original_title || s.title || s.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
