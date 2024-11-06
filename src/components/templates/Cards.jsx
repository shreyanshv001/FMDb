import React from "react";
import { Link } from "react-router-dom";
import noImage from "/download.png";

function Cards({ data, title }) {
  // console.log(data); to="/${data.media_type}/details/{data.id}"
  return (
    <div className="flex flex-wrap w-full pt-[7rem] pl-[8rem] bg-[#1F1E24] ">
      {data.map((item, index) => (
        <Link
          to={`/${item.media_type || title}/details/${item.id}`}
          key={index}
          className="w-[25vh] mr-[5%] mb-[4%] relative"
        >
          <img
            className="h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] "
            src={
              item.poster_path || item.backdrop_path || item.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    item.poster_path || item.backdrop_path || item.profile_path
                  }`
                : noImage
            }
            alt=""
          />
          <h1 className="text-2xl font-semibold text-zinc-300 mt-[0.6rem]">
            {item.original_title ||
              item.title ||
              item.name ||
              item.original_name}
          </h1>
          {item.vote_average && (
            <div className=" absolute bottom-[25%] right-[-10%] h-[5.4vh] text-xl font-semibold w-[5.4vh] bg-[#CA8A04] rounded-full text-white flex justify-center items-center">
              {(item.vote_average * 10).toFixed()}
              <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}

export default Cards;
