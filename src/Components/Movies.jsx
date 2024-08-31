import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "../Templates/TopNav";
import DropDown from "../Templates/DropDown";
import axios from "../utils/Axios";
import Card from "../Templates/Card";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Movies() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("airing_today");
  const [duration, setDuration] = useState("day");
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getPopular = async () => {
    try {
      // /3/tv/popular /tv/popular
      const { data } = await axios.get(`/tv/${category}?page=${page}`);
      setMovie((prevData) => [...prevData, ...data.results]);
      if (data.results.length === 0 || data.results.length < 20) {
        setHasMore(false);
      } else {
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error("Error fetching popular data:", error);
      setHasMore(false);
    }
  };
  document.title = "Web App | Movies";

  useEffect(() => {
    setMovie([]);
    setPage(1);
    setHasMore(true);
    getPopular();
  }, [category, duration]);

  return movie.length > 0 ? (
    <div className="w-screen h-full px-[3%]">
      {/* Fixed Navbar Section */}
      <div className="fixed top-0 left-0 w-full bg-zinc-900 shadow-md z-50 p-4 flex items-center justify-between">
        <h1 className="text-2xl text-zinc-400 font-semibold flex items-center">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line cursor-pointer mr-2"
          ></i>
          Movies<small className="text-sm text-zinc-600 ml-2">({category})</small>
        </h1>
        <div className="flex items-center space-x-4">
          <TopNav />
          <DropDown
            title="Category"
            options={[ "on_the_air", "popular","top_rated","airing_today"]}
            func={(e) => setCategory(e)}
          />
          
        </div>
      </div>

      {/* Content Section with Spacing */}
      <div className="pt-20">
        {" "}
        {/* Adjust padding as needed to match your fixed navbar height */}
        <InfiniteScroll
          dataLength={movie.length}
          next={getPopular}
          hasMore={hasMore}
          loader={<h1>Loading...</h1>}
        >
          <Card data={movie} title={category} />
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loading />
  );
}
