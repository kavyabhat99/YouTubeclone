import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from './Utils/appSlice'
import { useSearchParams } from 'react-router-dom';
import Commentscontainer from './Commentscontainer';
import { VIDEO_API} from './constants';
import VideoInfoComponent from './VideoInfoComponent';
import LiveChat from './LiveChat';
import showMoreIcon from '../assets/showMore.svg'

const WatchPage = () => {
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

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeMenu);
  }, [])

  return (
    <div className='flex w-3/2'>
      <div className='flex w-[600px]'>
        <div>
          <div className='p-[70px] pl-[100px]'>
            <iframe className='rounded-xl'
              width="750"
              height="400"
              src={"https://www.youtube.com/embed/" + SearchParam.get('v')}
              title="YouTube video player"
              frameborder="0" allow="accelerometer;
              autoplay; 
              clipboard-write;
               encrypted-media;
                gyroscope;
                 picture-in-picture; 
                 web-share"
              allowfullscreen></iframe>
            <VideoInfoComponent />
            <Commentscontainer videoId={videoId} />
          </div>
        </div>
        <div>
        <div className='p-4 mt-[70px] rounded-t-lg border border-gray'>
    <span>Top Chat</span>
    <img className='inline-block align-bottom mr-3' src={showMoreIcon} alt="ShowMore" />
    </div>
          <LiveChat />
        </div>
      </div>
    </div>
  )
}

export default WatchPage
