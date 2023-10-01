const VideoCard = ({ data }) => {
  const { thumbnails, title, channelTitle } = data.snippet;
  const { viewCount } = data.statistics;
  const { url } = thumbnails.medium;

  return (
    <div
      className=" text-sm tracking-wider px-2"
      // style={{ "font-family": "'Mukta', sans-serif" }}
    >
      <img className="rounded-2xl py-1" src={url} alt="video" />
      {/* <img src="" alt="image" /> */}
      <h5 className="font-bold w-60 py-1 text-gray-800">{title}</h5>
      <p className="text-gray-500 font-semibold">{channelTitle}</p>
      <p className="text-gray-500 font-semibold">{viewCount} views</p>
    </div>
  );
};

export default VideoCard;
