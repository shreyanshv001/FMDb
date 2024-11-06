import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/templates/Trending";
import Dropdown from "./components/templates/Dropdown";
import Popular from "./components/templates/Popular";
import Movies from "./components/templates/Movies";
import TV_shows from "./components/templates/TV_shows";
import People from "./components/templates/People";
import Moviedetails from "./components/templates/Moviedetails";
import Tvdetails from "./components/templates/Tvdetails";
import Persondetails from "./components/templates/Persondetails";
import Trailer from "./components/templates/Trailer";
import NotFound from "./components/templates/NotFound";
import TvTrailer from "./components/templates/TvTrailer";

function App() {
  return (
    <div className="w-full h-screen  bg-[#1f1e24]   flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/details/:id" element={<Moviedetails />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/tv" element={<TV_shows />} />
        <Route path="/tv/details/:id" element={<Tvdetails />}>
          <Route path="/tv/details/:id/trailer" element={<TvTrailer />} />
        </Route>
        <Route path="/people" element={<People />} />
        <Route path="/people/details/:id" element={<Persondetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
