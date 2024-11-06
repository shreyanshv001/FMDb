import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import NotFound from "./NotFound";

function TvTrailer() {
  const videos = useSelector((state) => state.tvReducer.info.videos[0]);
  // console.log(videos);
  const ytvideo = videos && videos.key;
  // console.log(ytvideo);

  const navigate = useNavigate();

  return ytvideo ? (
    <div className="fixed z-[100] bg-[rgba(0,0,0,.6)] w-screen h-screen flex justify-center items-center  top-0 left-0 ">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${ytvideo}`}
        height={"90%"}
        width={"80%"}
        controls={true}
        playing={true}
      />
      <Link
        className="ri-close-line text-4xl absolute top-[3%] right-[5%] text-white "
        onClick={() => navigate(-1)}
      ></Link>
    </div>
  ) : (
    <NotFound />
  );
}

export default TvTrailer;
