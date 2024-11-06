import React from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import noImage from "/download.png";

function HorizontalCards({ data, title }) {
  // console.log(data);
  // console.log(data.seasons);
  return data ? (
    <div
      className={`w-full h-[40vh] ${
        title === "Famous For" ? "p-0 " : "p-5"
      }   text-white  `}
    >
      <div>
        <h1
          className={`${
            title === "Famous For"
              ? "text-2xl font-medium text-zinc-400 mt-5"
              : "text-3xl font-semibold"
          } `}
        >
          {title}
        </h1>
      </div>

      <div
        className={`flex overflow-x-auto gap-5 w-full mt-5 ${
          title === "Seasons" && "pb-0"
        } pb-5 `}
      >
        {data.length > 0 ? (
          data.map((item, index) => (
            <Link
              to={`/${item.media_type}/details/${item.id}`}
              key={index}
              className={`min-w-[18%] ${
                title === "Seasons"
                  ? "h-[37vh] bg-transparent overflow-hidden "
                  : " bg-[#18181B] overflow-y-auto"
              }   rounded h-[48vh]
                ${title === "Famous For" && "h-[45vh]"} `}
            >
              <img
                className={`w-full ${
                  title === "Seasons" ? "h-[40vh]" : "h-[26vh]"
                }  object-cover rounded `}
                src={
                  item.backdrop_path || item.profile_path || item.poster_path
                    ? `https://image.tmdb.org/t/p/original/${
                        item.backdrop_path ||
                        item.profile_path ||
                        item.poster_path
                      }`
                    : noImage
                }
                alt=""
              />

              <div className="p-2 ">
                <h1 className="text-xl mt-1  font-semibold">
                  {item.original_title ||
                    item.title ||
                    item.name ||
                    item.original_name}
                </h1>
                {title !== "Seasons" && item.overview && (
                  <p className="text-zinc-300 mt-3">
                    {item.overview.slice(0, 90)}
                    <Link className="text-zinc-500">...more</Link>
                  </p>
                )}
              </div>
            </Link>
          ))
        ) : (
          <h1>Nothing to show</h1>
        )}
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default HorizontalCards;
