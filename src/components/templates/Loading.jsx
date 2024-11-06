import loader from "/loader.gif";

function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <img src={loader} alt="loader" />
    </div>
  );
}

export default Loading;
