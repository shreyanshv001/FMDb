import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadTv, removeTv } from "../../store/actions/TvActions";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import HorizontalCards from "./HorizontalCards";

function Tvdetails() {
  document.title = "FMDb | TV Shows Details";
  const { id } = useParams();
  const navigate = useNavigate();
  const info = useSelector((state) => state.tvReducer.info);
  // console.log(info);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncLoadTv(id));
    return () => {
      dispatch(removeTv());
    };
  }, [id]);
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
      className="w-screen min-h-[220vh] px-[10%] relative py-8 "
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
          <i className="ri-external-link-line"></i>
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
              ({info.detail.first_air_date.split("-")[0]})
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
            <p>
              {info.translations.translations
                .map((e) => e.english_name)
                .join(", ")}
            </p>
          </div>
          <Link
            to={`/tv/details/${id}/trailer`}
            className="bg-[#6556CD] px-5 text-md py-4 rounded my-[2rem] "
          >
            <i className="ri-play-fill mr-3"></i>
            Play Trailer
          </Link>
        </div>
      </div>
      <HorizontalCards title={"Seasons"} data={info.detail.seasons} />
      <hr className="mb-[8vh] mt-[15vh] border-none " />
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

export default Tvdetails;
