import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removeMovie } from "../../store/actions/MovieActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loading from "./Loading";
import HorizontalCards from "./HorizontalCards";

function Moviedetails() {
  document.title = "FMDb | Movie Details";
  const pathName = useLocation();
  // console.log(pathName);
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id);
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.movieReducer);
  // console.log(info);
  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removeMovie());
    };
  }, [id, pathName]);
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6), rgba(0,0,0,.9)), 
      url(https://image.tmdb.org/t/p/original/${
        info.detail.backdrop_path || info.detail.profile_path
      })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // opacity: "0.6",
      }}
      className="w-screen min-h-[150vh] px-[10%] relative py-8 "
    >
      <nav className="w-full text-gray-50 flex gap-10 items-center text-2xl opacity-[1] ">
        <i
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line mr-3  hover:text-[#6556CD]   cursor-pointer "
        ></i>
        <i
          onClick={() => navigate("/")}
          className="ri-home-5-line hover:text-[#6556CD]   cursor-pointer"
        ></i>
        <a href={info.detail.homepage} target="blank" className="text-invert">
          <i class="ri-external-link-line"></i>
        </a>
        <a
          href={`https://wikidata.org/wiki/${info.externalid.wikidata_id}`}
          target="blank"
          className=" text-white"
        >
          <i class="ri-earth-fill"></i>
        </a>
        <a
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
          target="blank"
          className="text-white"
        >
          imdb
        </a>
      </nav>
      <div className="w-full flex mt-10 mb-8 ">
        <img
          className="h-[50vh] object-cover shadow-2xl shadow-black "
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />
        <div className=" ml-[5%] w-full text-white">
          <div className="text-5xl font-black text-white">
            {info.detail.title ||
              info.detail.name ||
              info.detail.original_name ||
              info.detail.original_title}
            <small className="text-xl font-medium text-zinc-300">
              ({info.detail.release_date.split("-")[0]})
            </small>
          </div>
          <div className="flex items-center  my-5">
            {info.detail.vote_average && (
              <div className="  bottom-[25%] right-[-10%] h-[5vh] text-xl font-semibold w-[5vh] bg-[#CA8A04] rounded-full text-white flex justify-center items-center">
                {(info.detail.vote_average * 10).toFixed()}
                <sup>%</sup>
              </div>
            )}
            <div className="w-[60px] font-semibold text-2xl leading-6 ml-3">
              User Score
            </div>
            <div className=" px-6">
              {info.detail.release_date || info.detail.first_air_date
                ? new Date(
                    info.detail.release_date || info.detail.first_air_date
                  ).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "Release date unavailable"}
            </div>
            <div>{info.detail.genres.map((g) => g.name).join(", ")}</div>
            <span className="px-4">{info.detail.runtime}min</span>
          </div>
          <div className="italic text-xl text-zinc-200 my-4 font-semibold">
            {info.detail.tagline}
          </div>
          <div>
            <h1 className="text-2xl mt-5 mb-3">Overview</h1>
            <p>{info.detail.overview}</p>
          </div>
          <div className="mb-9">
            <h1 className="text-2xl mt-5 mb-3">Movie Translated</h1>
            <p>{info.translations.map((e) => e.name).join(", ")}</p>
          </div>
          <Link
            to={`/movie/details/${id}/trailer`}
            className="bg-[#6556CD] px-5 text-md py-4 rounded my-[2rem] "
          >
            <i className="ri-play-fill mr-3"></i>
            Play Trailor
          </Link>
        </div>
      </div>
      <HorizontalCards
        title={"Recommendations & Similar stuff"}
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
}

export default Moviedetails;
