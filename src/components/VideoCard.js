import { useSelector } from "react-redux";

const VideoCard = ({ data }) => {
  const { thumbnails, title, channelTitle } = data.snippet;
  const { viewCount } = data.statistics;
  const { url } = thumbnails.medium;
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  return (
    <div className=" text-sm tracking-wide px-2 ">
      <img className="rounded-2xl py-1" src={url} alt="video" />
      <div className="flex">
        {/* <img src="" alt="CN" /> */}
        <h5
          className={`font-bold w-60 py-1 ${
            darkTheme ? "text-gray-200" : "text-gray-800"
          } break-words`}
        >
          {title}
        </h5>
      </div>
      <p
        className={`${
          darkTheme ? "text-gray-300" : "text-gray-500"
        }  font-semibold break-words`}
      >
        {channelTitle}
      </p>
      <p
        className={`${
          darkTheme ? "text-gray-300" : "text-gray-500"
        }  font-semibold break-words`}
      >
        {viewCount} views
      </p>
    </div>
  );
};

export default VideoCard;
