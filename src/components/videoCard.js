import React from 'react'
import { formatCompactNumber } from './constants';

const VideoCard = ({snippet,statistics}) => {

  return (
    <div className="p-2 w-[360px] mb-7 ml-6 "  >
      <img className='rounded-xl hover:rounded-none h-[200px]'
       src={snippet?.thumbnails.medium.url}/>
      <ul>
      <li className='font-bold py-2 text-gray text-ellipsis overflow-hidden'>{snippet.title}</li> 
      <li>{snippet.channelTitle}</li>
      <li> {statistics?.viewCount? formatCompactNumber(statistics?.viewCount) : 0} viwes <b className='font-bold'>.</b> {(Math.abs(new Date(snippet.publishedAt) - new Date()) / (60 * 60 * 24 * 1000)).toFixed(0)} days ago</li>
      </ul>
    </div>
  )
}

export default VideoCard;
