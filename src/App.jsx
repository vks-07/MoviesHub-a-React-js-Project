import { useState } from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Loading from "./Components/Loading";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Movies from "./Components/Movies";
import TvShows from "./Components/TvShows";
import People from "./Components/People";
function App() {
  const [count, setCount] = useState(0);

  return (
    // h-screen
    <div className="w-screen h-full bg-[#1f1e24] flex ">
      <Routes>
        <Route path="/" element={<Home count={count} />} />

        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/tvshows" element={<TvShows/>} />
        <Route path="/people" element={<People/>} />


      </Routes>
    </div>
  );
}

export default App;
