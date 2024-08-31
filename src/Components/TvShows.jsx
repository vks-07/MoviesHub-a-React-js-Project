import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "../Templates/TopNav";
import DropDown from "../Templates/DropDown";
import axios from "../utils/Axios";
import Card from "../Templates/Card";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

export default function TvShows() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("now_playing");
  const [duration, setDuration] = useState("day");
  const [tv, settv] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getPopular = async () => {
    try {
      // /3/tv/popular /tv/popular
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      settv((prevData) => [...prevData, ...data.results]);
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
  document.title = "Web App | Tv Shows";

  useEffect(() => {
    settv([]);
    setPage(1);
    setHasMore(true);
    getPopular();
  }, [category, duration]);

  return tv.length > 0 ? (
    <div className="w-screen h-full px-[3%]">
      {/* Fixed Navbar Section */}
      <div className="fixed top-0 left-0 w-full bg-zinc-900 shadow-md z-50 p-4 flex items-center justify-between">
        <h1 className="text-2xl text-zinc-400 font-semibold flex items-center">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line cursor-pointer mr-2"
          ></i>
          Tv Shows<small className="text-sm text-zinc-600 ml-2">({category})</small>
        </h1>
        <div className="flex items-center space-x-4">
          <TopNav />
          <DropDown
            title="Category"
            options={[ "popular", "top_rated","upcoming","now_playing"]}
            func={(e) => setCategory(e)}
          />
          {/* <DropDown 
            title="Duration" 
            options={["week", "day"]} 
            func={(e) => setDuration(e)}
          /> */}
        </div>
      </div>

      {/* Content Section with Spacing */}
      <div className="pt-20">
        {" "}
        {/* Adjust padding as needed to match your fixed navbar height */}
        <InfiniteScroll
          dataLength={tv.length}
          next={getPopular}
          hasMore={hasMore}
          loader={<h1>Loading...</h1>}
        >
          <Card data={tv} title={category} />
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loading />
  );
}
