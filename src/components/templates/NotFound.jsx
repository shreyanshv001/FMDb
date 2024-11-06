import { Link, useNavigate } from "react-router-dom";
import notFoundImage from "/notFoundimg.gif";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center bg-[rgba(0,0,0,.8)] absolute top-0 left-0 items-center h-screen w-full">
      <img className="w-[40%]" src={notFoundImage} alt="" />
      <Link
        className="ri-close-line text-4xl absolute top-[3%] right-[5%] text-white "
        onClick={() => navigate(-1)}
      ></Link>
    </div>
  );
}

export default NotFound;
