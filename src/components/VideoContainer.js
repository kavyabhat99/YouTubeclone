import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from './constants';
import VideoCard from './videoCard';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import homeIcon from '../assets/home.svg';
import shortsIcon from '../assets/shorts.svg';
import subscriptionsIcon from '../assets/subscriptions.svg';
import libraryIcon from '../assets/library.svg';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <>
      <div className='mt-[-100px] w-[60px]'>
        <div className='my-1 p-5 py-5 hover:bg-gray-100 cursor-pointer rounded-lg'>
          <NavLink to='/'> <img className='inline-block align-bottom mr-3' src={homeIcon} alt="Home" />
            <div className='text-xs'>Home</div></NavLink >
        </div>
        <div className='my-1 p-5 py-5 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink to={'/'}> <img className='inline-block align-bottom mr-3' src={shortsIcon} alt="Shorts" /> <h6 className='text-xs'>Shorts</h6></NavLink ></div>
        <div className='my-1 p-5 py-5 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink to={'/'}> <img className='inline-block align-bottom mr-3 ml-2' src={subscriptionsIcon} alt="Subscriptions" /> <h6 className='text-xs'>Subscriptions</h6></NavLink ></div>
        <div className='my-1 p-5 py-5 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink to={'/'}> <img className='inline-block align-bottom mr-3' src={libraryIcon} alt="Library" /> <h6 className='text-xs'>You</h6></NavLink ></div>
      </div>
      <div className='flex flex-wrap ml-[80px] mt-[-280px]'>
        {
          videos && videos.map((video) => {
            return (<>
              <Link to={"/watch?v=" + video.id}>
                <VideoCard
                  key={video.id}
                  snippet={video.snippet}
                  statistics={video.statistics}
                />
              </Link>
            </>
            )
          })
        }
      </div>
    </>
  )
}

export default VideoContainer;
