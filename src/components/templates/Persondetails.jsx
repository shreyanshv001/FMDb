import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncLoadPerson,
  removePerson,
} from "../../store/actions/PersonActions";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import HorizontalCards from "./HorizontalCards";

function Persondetails() {
  document.title = "FMDb | People Details";
  const { id } = useParams();
  const navigate = useNavigate();
  // console.log(id);
  const dispatch = useDispatch();
  const info = useSelector((state) => state.personReducer.info);
  console.log(info);
  useEffect(() => {
    dispatch(asyncLoadPerson(id));
    return () => {
      dispatch(removePerson());
    };
  }, [id]);
  return info ? (
    <div className="w-screen min-h-[140vh] px-[10%] bg-[#1F1E24] relative py-8 text-white overflow-x-hidden ">
      <nav className="w-full text-gray-50 flex gap-10 items-center text-2xl opacity-[1] ">
        <i
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line mr-3  hover:text-[#6556CD]   cursor-pointer "
        ></i>
        <i
          onClick={() => navigate("/")}
          className="ri-home-5-line hover:text-[#6556CD]   cursor-pointer"
        ></i>
      </nav>
      <div className="flex my-5  ">
        <div className="w-[15vw]   ">
          <img
            className="h-[38vh] w-full object-cover shadow-2xl shadow-black "
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />
          <hr className="mt-10 mb-5" />
          <div className="flex justify-between text-2xl ">
            <a
              href={`https://wikidata.org/wiki/${info.externalIds.wikidata_id}`}
              target="_blank"
            >
              <i class="ri-earth-fill"></i>
            </a>
            <a
              href={`https://www.facebook.com/${info.externalIds.facebook_id}`}
              target="_blank"
            >
              <i class="ri-facebook-circle-fill"></i>
            </a>
            <a
              href={`https://www.instagram.com/${info.externalIds.instagram_id}`}
              target="_blank"
            >
              <i class="ri-instagram-line"></i>
            </a>
            <a
              href={`https://x.com/${info.externalIds.twitter_id}`}
              target="_blank"
            >
              <i class="ri-twitter-x-fill"></i>
            </a>
          </div>
          <div className="text-zinc-400 text-2xl font-semibold mt-5 ">
            <h1 className="mb-5">Person Info</h1>
            <h1 className="text-xl font-medium">Known For</h1>
            <h1 className="text-base font-normal ">
              {info.detail.known_for_department}
            </h1>
            <h1 className="text-xl font-medium mt-3">Gender</h1>
            <h1 className="text-base font-normal ">
              {info.detail.gender === 1
                ? "Female"
                : info.detail.gender === 2
                ? "Male"
                : "Other"}
            </h1>
            <h1 className="text-xl font-medium mt-3">Birthday</h1>
            <h1 className="text-base font-normal ">{info.detail.birthday}</h1>
            <h1 className="text-xl font-medium mt-3">Deathday</h1>
            <h1 className="text-base font-normal ">
              {info.detail.deathday === null
                ? "Still Alive"
                : info.detail.deathday}
            </h1>
            <h1 className="text-xl font-medium mt-3">Place Of Birth</h1>
            <h1 className="text-base font-normal ">
              {info.detail.place_of_birth}
            </h1>
            <h1 className="text-xl font-medium mt-3">Also Known As</h1>
            <h1 className="text-base font-normal ">
              {info.detail.also_known_as.map((e) => e).join(", ")}
            </h1>
          </div>
        </div>
        <div className="w-[86%] pl-20  ">
          <h1 className="text-7xl font-bold text-zinc-200 ">
            {info.detail.name}
          </h1>
          <h1 className="text-2xl font-medium text-zinc-400 mt-6 ">
            Biography
          </h1>
          <div className="mt-4   text-zinc-400 text-base ">
            {info.detail.biography.slice(0, 900)}
            <a
              href={`https://wikidata.org/wiki/${info.externalIds.wikidata_id}`}
              target="_blank"
              className="text-zinc-500"
            >
              ...more
            </a>
          </div>
          <HorizontalCards
            title={"Famous For"}
            data={info.combinedCredits.cast}
          />
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Persondetails;
