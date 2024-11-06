import React, { useEffect, useState } from "react";
import SideNav from "./templates/SideNav";
import TopNav from "./templates/TopNav";
import axios from "../utils/Axios";
import Header from "./templates/Header";
import HorizontalCards from "./templates/HorizontalCards";
import Loading from "./templates/Loading";

function Home() {
  document.title = "FMDb | Home Page";
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`trending/all/day`);
      console.log(data.results);

      const randomData =
        data.results[Math.floor(Math.random() * data.results.length)];
      setwallpaper(randomData);
      // console.log(randomData);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getTrending = async () => {
    try {
      const { data } = await axios.get(`trending/all/day`);
      // console.log(data.results);
      settrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    !wallpaper && getHeaderWallpaper();
    !trending && getTrending();
  }, []);
  return wallpaper && trending ? (
    <>
      <SideNav />
      <div className="w-[80%] h-full overflow-auto pb-48 ">
        <TopNav />
        <Header data={wallpaper} />
        <HorizontalCards data={trending} title={"Trending"} />
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
