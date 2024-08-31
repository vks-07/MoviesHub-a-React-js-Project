import React, { useEffect, useState } from "react";
import Sidenav from "../Templates/Sidenav";
import TopNav from "../Templates/TopNav";
import axios from "../utils/Axios";
import Header from "../Templates/Header";
import HorizontalCards from "../Templates/HorizontalCards";
import DropDown from "../Templates/DropDown";
import Loading from "./Loading";
export default function Home() {
  document.title = "Web App | Homepage";
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("all");
  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      // console.log("data :", data);

      // Select a random item from the results
      let randomdata =
        data.results[Math.floor(Math.random() * data.results.length)];

      // Update the wallpaper state
      setWallpaper(randomdata);

      // If you want to log the updated wallpaper, use a useEffect hook in the component
      // console.log("Selected Wallpaper:", randomdata);
      // setWallpaper(randomdata);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/week`);
      // console.log("data :", data);
      setTrending(data.results);
      console.log("trending : ", data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  useEffect(() => {
    !wallpaper && getHeaderWallpaper();
    getTrending();
  }, [category]);
  console.log("trending : ", trending);

  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full ">
        <TopNav />
        {/* <div></div> */}
        <div className=" overflow-auto scroll-smooth overflow-x-hidden">
          <Header wallpaper={wallpaper} />
          <div className="  flex justify-between p-5 ">
            <h1 className=" font-semibold  text-3xl text-zinc-400 ">
              Trendings
            </h1>
            <DropDown
              title="Category"
              options={["movie", "tv", "all"]}
              func={(e) => setCategory(e)} // Pass value directly from DropDown
            />
          </div>
          <HorizontalCards data={trending} />
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
}
