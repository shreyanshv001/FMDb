import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-10 text-white overflow-y-auto scrollbar-hide">
      <h1 className="font-bold mr-2 ">
        <i class="text-[#6556cd] text-2xl ri-tv-fill mr-2"></i>
        <span className="text-2xl ">FMDb.</span>
      </h1>
      <nav className="flex flex-col gap text-zinc-400 text-xl gap-3 ">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          New Feeds
        </h1>
        <Link
          to={"/trending"}
          className="hover:bg-[#6556CD] p-5 rounded-lg duration-300 hover:text-white"
        >
          <i class="mr-2 ri-fire-fill"></i>
          Trending
        </Link>
        <Link
          to="/popular"
          className="hover:bg-[#6556CD] p-5 rounded-lg duration-300 hover:text-white"
        >
          <i class="mr-2 ri-bard-fill"></i>
          Popular
        </Link>
        <Link
          to="/movie"
          className="hover:bg-[#6556CD] p-5 rounded-lg duration-300 hover:text-white"
        >
          <i class="mr-2 ri-movie-2-fill"></i>
          Movies
        </Link>
        <Link
          to={"/tv"}
          className="hover:bg-[#6556CD] p-5 rounded-lg duration-300 hover:text-white"
        >
          <i class="mr-2 ri-tv-2-fill"></i>
          Tv Shows
        </Link>
        <Link
          to={"/people"}
          className="hover:bg-[#6556CD] p-5 rounded-lg duration-300 hover:text-white"
        >
          <i class="mr-2 ri-team-fill"></i>
          People
        </Link>
      </nav>
      <hr className="border-none bg-zinc-400 h-[1px] " />
      <nav className="flex flex-col gap text-zinc-400 text-xl gap-3 ">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          Website Information
        </h1>
        <Link className="hover:bg-[#6556CD] p-5 rounded-lg duration-300 hover:text-white">
          <i class="mr-2 ri-information-fill"></i>
          About Us
        </Link>
        <Link className="hover:bg-[#6556CD] p-5 rounded-lg duration-300 hover:text-white">
          <i class="mr-2 ri-phone-fill"></i>
          Contact Us
        </Link>
      </nav>
    </div>
  );
}

export default SideNav;
