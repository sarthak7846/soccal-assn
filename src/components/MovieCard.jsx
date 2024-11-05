const MovieCard = ({ mobileView, title, imageURL }) => {
  if (mobileView) {
    return (
      <div className="block md:w-[20%] w-[100px] flex-shrink-0">
        <div className="rounded-lg overflow-hidden h-44">
          <img
            src={imageURL}
            alt="No image found."
            className="w-full h-full object-cover"
          />
        </div>
        <p className=" font-normal font-sans text-base">{title}</p>
        {/* <p className=" text-gray-600 font-medium">Comedy/Horror</p> */}
      </div>
    );
  }
  return (
    <>
      <div className="rounded-lg overflow-hidden h-96">
        <img
          src={imageURL}
          alt="No image found."
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-lg font-semibold font-sans mt-2">{title}</p>
      {/* <p className="mt-1 text-gray-600 font-medium">Comedy/Horror</p> */}
    </>
  );
};

export default MovieCard;
