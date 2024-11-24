import React from "react";
import { Link, useParams } from "react-router-dom";

function Header({ data }) {
  console.log(data);
  const { id } = useParams();
  // console.log(id);
  // console.log(data);
  return (
    <div className="w-full h-[50vh] bg-black  relative">
      <img
        className="w-full h-full object-cover bg-center opacity-[0.5]  "
        src={`https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        }`}
        alt=""
      />
      <div className=" absolute inline-block  top-[5.2vw] left-[6%]  h-full  text-white bg-transparent">
        <h1 className="text-5xl font-black">
          {data.original_title || data.title || data.name || data.original_name}
        </h1>
        <p className="mt-6 w-[60%]">
          {data.overview && data.overview.slice(0, 200)}
          <Link
            to={`${data.media_type}/details/${data.id}`}
            className="text-sky-500"
          >
            ...more
          </Link>
        </p>
        <div className="flex gap-5 mt-4">
          <p>
            <i class="mr-2 text-yellow-500 ri-megaphone-fill"></i>
            {data.release_date || data.first_air_date
              ? new Date(
                  data.release_date || data.first_air_date
                ).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "Release date unavailable"}
          </p>
          <p>
            <i class="mr-2 text-yellow-500 ri-album-fill"></i>
            {data.media_type && data.media_type.toUpperCase()}
          </p>
        </div>
        <div className="mt-8">
          <Link
            to={`/movie/details/${data.id}/trailer`}
            className="px-4 py-4 rounded   bg-[#6556cd]"
          >
            Watch Trailer
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
