import React, { useEffect, useState } from "react";
import TopNav from "./TopNav";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/Axios";
import Cards from "./Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

function People() {
  document.title = "FMDb | People";
  const navigate = useNavigate();
  const [category, setcategory] = useState("popular");
  const [people, setpeople] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const getPeople = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      // console.log(data);
      if (data.results.length > 0) {
        setpeople((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    refreshhandler();
  }, [category]);

  const refreshhandler = () => {
    if (people.length === 0) {
      getPeople();
    } else {
      setpage(1);
      setpeople([]);
      getPeople();
    }
  };
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Add this new function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return people.length > 0 ? (
    <div className="w-full h-screen text-white relative ">
      <div className="w-full h-[10vh] z-10 fixed bg-[#1F1E24] flex justify-between items-center px-[7vw] ">
        <h1 className=" text-2xl font-semibold text-zinc-400  flex  ">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line mr-3 hover:text-[#6556CD]   cursor-pointer "
          ></i>
          <p className="inline-block">People</p>
        </h1>
        <TopNav />
      </div>
      <InfiniteScroll
        dataLength={people.length}
        next={getPeople}
        loader={<h1>Loading...</h1>}
        hasMore={hasMore}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <Cards data={people} title={"people"} />
      </InfiniteScroll>
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed w-12 h-12 flex justify-center items-center bottom-8 right-8 bg-[#6556CD] hover:bg-[#4c3fb9] p-3 rounded-full shadow-lg transition-all duration-300"
          aria-label="Scroll to top"
        >
          <i className="ri-arrow-up-line text-2xl"></i>
        </button>
      )}
    </div>
  ) : (
    <Loading />
  );
}

export default People;
