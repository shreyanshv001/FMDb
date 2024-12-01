import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/Axios";
import noImage from "/download.png";

function TopNav() {
  const [query, setquery] = useState("");
  // console.log(query);
  const [searches, setsearches] = useState([]);
  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      // console.log({ data });
      setsearches(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(searches);
  useEffect(() => {
    getSearches();
  }, [query]);
  return (
    <div className="w-[80%] relative h-[10vh] z-10 flex  justify-start ml-[10%] items-center ">
      <i className="text-3xl text-zinc-400 ri-search-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        type="text"
        placeholder="Search here"
        className="bg-none w-[60%] mx-10 p-5 text-xl outline-none border-none bg-transparent text-zinc-300 "
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="text-3xl text-zinc-400 ri-close-line cursor-pointer"
        ></i>
      )}
      <div className="w-full bg-red-300 mr-5"></div>

      <div className="w-24 h-12  rounded-full flex items-center justify-center">
        <span className="text-zinc-400 text-lg mr-5">Hello!</span>
        <i className="ri-user-line text-[2rem] text-zinc-400"></i>
      </div>
      <div className="absolute w-[60%] max-h-[55vh] bg-zinc-200 top-[100%] overflow-auto ">
        {searches.map((s, i) => (
          <Link
            to={`/${
              s.media_type === "person" ? "people" : s.media_type
            }/details/${s.id}`}
            key={i}
            className="hover:bg-zinc-300 hover:text-black duration-200 text-zinc-600  w-full p-6 flex font-semibold justify-start items-center border-b-2 border-zinc-100 "
          >
            <img
              className="w-[13vh] h-[13vh] object-cover rounded shadow-lg "
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : noImage
              }
              alt=""
            />
            <span className="text-[1.3rem] ml-12">
              {s.original_title || s.title || s.name || s.original_name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TopNav;
