import moment from "moment";
import React, { useEffect, useState } from "react";
import { VIDEO_API, formatCompactNumber} from "./constants";
import { useSearchParams } from "react-router-dom";


const VideoInfoComponent = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [SearchParam] = useSearchParams();
  const videoId = SearchParam.get('v');
  const [videos, setVideos] = useState([]);



  const getVideos = async () => {
    const data = await fetch(VIDEO_API + videoId);
    const json = await data.json();
    setVideos(json.items[0]);
    console.log("test1", json.items[0])
  };

  useEffect(() => {
    getVideos();
  }, []);
  const formattedViewCount = videos?.statistics?.viewCount ? formatCompactNumber(videos?.statistics?.viewCount) : 0
  const formattedPublishedAt = moment(videos?.snippet?.publishedAt).fromNow();

  const truncatedDescription = showDescription
    ? videos?.snippet?.description
    : `${videos?.snippet?.description.substring(0, 200)}...`;
  const toggleDescription = () => setShowDescription(!showDescription);
  const buttonText = showDescription ? "less" : "more";

  return (

    <div className="md:mt-2 m-2">
      <h2 className="md:text-lg font-sans text-sm font-semibold">{videos?.snippet?.title}</h2>
      <div className="flex items-center">
        <div> <img className="rounded-full h-10 w-10" src={videos?.snippet?.thumbnails?.medium?.url} /></div>
        <div className="ml-2">
          <h2 className="font-semibold text-sm md:text-base">{videos?.snippet?.channelTitle}</h2>
          <p className="text-gray-500 text-sm">xx subscribers</p>
        </div>
      </div>
      <div className="bg-gray-100 rounded-lg p-2 mt-4 w-[750px]">
        <div className="flex flex-col">
          <p className="font-semibold text-sm md:text-base">
            {formattedViewCount} views &nbsp; {formattedPublishedAt}
          </p>
          <p className="text-sm md:text-base">
            {truncatedDescription}
            {showDescription && <br />}
            <button className="font-semibold" onClick={toggleDescription}>
              {buttonText}
            </button>
          </p>
        </div>
      </div>
    </div>

  );
};

export default VideoInfoComponent;