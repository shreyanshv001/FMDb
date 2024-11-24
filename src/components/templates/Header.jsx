import React, { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
function Header({ data }) {
  return (
    <div className="w-full h-[50vh] bg-black  relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-full"
      >
        {data.map((item, index) => (
          <SwiperSlide>
            <img
              className="w-full h-full object-cover bg-center  opacity-[0.5]  "
              src={`https://image.tmdb.org/t/p/original/${
                item.backdrop_path || item.profile_path
              }`}
              alt=""
            />
            <div className=" absolute inline-block  top-[5.2vw] left-[6%]  h-full  text-white bg-transparent">
              <h1 className="text-5xl font-black">
                {item.original_title ||
                  item.title ||
                  item.name ||
                  item.original_name}
              </h1>
              <p className="mt-6 w-[60%]">
                {item.overview && item.overview.slice(0, 200)}
                <Link
                  to={`${item.media_type}/details/${item.id}`}
                  className="text-sky-500"
                >
                  ...more
                </Link>
              </p>
              <div className="flex gap-5 mt-4">
                <p>
                  <i class="mr-2 text-yellow-500 ri-megaphone-fill"></i>
                  {item.release_date || item.first_air_date
                    ? new Date(
                        item.release_date || item.first_air_date
                      ).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "Release date unavailable"}
                </p>
                <p>
                  <i class="mr-2 text-yellow-500 ri-album-fill"></i>
                  {item.media_type && item.media_type.toUpperCase()}
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to={`/movie/details/${item.id}/trailer`}
                  className="px-4 py-4 rounded   bg-[#6556cd]"
                >
                  Watch Trailer
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Header;
